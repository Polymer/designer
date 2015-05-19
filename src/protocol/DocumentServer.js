/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/protocol/DocumentServer', [
      'polymer-designer/path',
      'polymer-designer/css',
      'polymer-designer/dragging',
      'polymer-designer/commands',
      'polymer-designer/commands/DomCommandApplier',
      'polymer-designer/dom-utils',
      'polymer-designer/text/CursorManager'],
    function(pathLib, cssLib, dragging, commands, DomCommandApplier, domUtils,
        CursorManager) {
  'use strict';

  function designerNodeFilter(node) {
    return node.nodeType !== Node.ELEMENT_NODE ||
        !node.hasAttribute('designer-exclude');
  }

  // TODO(justinfagnani): move to common location
  const nodeIdProperty = '__designer_node_id__';

  class DocumentServer {

    constructor(connection) {
      this.connection = connection;
      this.currentElement = null;
      this.commandApplier = new DomCommandApplier(document);
      this.nodes = new Map();
      this.nextId = 1;

      connection.on('getDocument', this.getDocument.bind(this));
      connection.on('selectElementAtPoint', this.selectElementAtPoint.bind(this));
      connection.on('selectElementAtPath', this.selectElementAtPath.bind(this));
      connection.on('selectionBoundsChanged', this.selectionBoundsChanged.bind(this));
      connection.on('getCaretPosition', this.getCaretPosition.bind(this));
      connection.on('moveCursor', this.moveCursor.bind(this));
      connection.on('insertText', this.insertText.bind(this));
      connection.on('command', this._onCommand.bind(this));
    }

    _onCommand(request) {
      this.commandApplier.apply(request.message.command);
      // TODO: how can we tell what non-doc side effects, like the following
      // need to be propagated?
      request.reply({
        bounds: this._elementBounds(this.currentElement),
        elementInfo: this._elementInfo(this.currentElement),
      });
    }

    _getId(node) {
      let id = node[nodeIdProperty];
      if (id == null) {
        id = node[nodeIdProperty] = this.nextId++;
        this.nodes.set(id, node);
      }
      return id;
    }

    _getSourceId(node) {
      return (node.nodeType === Node.ELEMENT_NODE)
          ? node.getAttribute(nodeIdProperty)
          : null;
    }

    getDocument(request) {
      request.reply({
        id: this._getId(document),
      });
    }

    selectElementAtPoint(request) {
      var x = request.message.x;
      var y = request.message.y;
      this.currentElement = this._getElementAt(x, y);
      this.cursorManager = new CursorManager(this.currentElement);
      request.reply({
        bounds: this._elementBounds(this.currentElement),
        elementInfo: this._elementInfo(this.currentElement),
      });
    }

    _getElementAt(x, y) {
      var el = document.elementFromPoint(x, y);
      var lastLightCandidate = el;
      while (el != null) {
        if (el.lightParent instanceof DocumentFragment) {
          // reset our search
          lastLightCandidate = null;
        } else if (el.lightParent == null) {
          // now at a top-level host, return the candidate
          if (lastLightCandidate == null) {
            lastLightCandidate = el;
          }
          break;
        } else {
          lastLightCandidate = el;
        }
        el = el.parentNode;
      }
      return lastLightCandidate;
    }

    selectElementAtPath(request) {
      this.currentElement = pathLib.getNodeFromPath(request.message.path,
          document, designerNodeFilter);
      this.cursorManager = new CursorManager(this.currentElement);

      request.reply({
        bounds: this._elementBounds(this.currentElement),
        elementInfo: this._elementInfo(this.currentElement),
      });
    }

    selectionBoundsChanged(request) {
      var command = this._resizeElement(request.message.bounds);
      var message = {
        bounds: this._elementBounds(this.currentElement),
        command: command,
      };

      if (request.message.cursor && document.elementsFromPoint) {
        var hoverElements = document.elementsFromPoint(
          request.message.cursor.x,
          request.message.cursor.y);
        var hoverElement = null;
        // elementsFromPoint() is z-ordered. We want the first result that
        // is not currentElement, a ancestor or descendant
        for (var i = 0; i < hoverElements.length; i++) {
          var e = hoverElements[i];
          if (!(e === this.currentElement ||
                domUtils.isDescendant(e, this.currentElement) ||
                domUtils.isDescendant(this.currentElement, e))) {
            hoverElement = e;
            break;
          }
        }
        if (hoverElement === null) {
          message.hover = null;
        } else {
          message.hover = {
            bounds: this._elementBounds(hoverElement),
            elementInfo: this._elementInfo(hoverElement)
          };
        }
      }
      request.reply(message);
    }

    getCaretPosition(request) {
      // Note: We're assuming Shadow DOM here. This gets much more complicated
      // with Shady DOM!
      let caretRange = document.caretRangeFromPoint(request.message.x,
          request.message.y);
      let node = caretRange.startContainer;
      let offset = caretRange.startOffset;

      this.cursorManager.setPosition(node, offset);

      let rect = this.cursorManager.walker.getCaretRange()
          .getBoundingClientRect();

      request.reply({
        node: pathLib.getNodePath(node),
        offset: offset,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
      });
    }

    moveCursor(request) {
      switch (request.message.move) {
        case 'up':
          this.cursorManager.up();
          break;
        case 'down':
          this.cursorManager.down();
          break;
        case 'left':
          this.cursorManager.back();
          break;
        case 'right':
          this.cursorManager.forward();
          break;
        case 'beginningOfLine':
          this.cursorManager.beginningOfLine();
          break;
        case 'endOfLine':
          this.cursorManager.endOfLine();
          break;
        default:
          console.error('Unrecognized cursor move', request.message.move);
      }

      let rect = this.cursorManager.walker.getCaretRange()
          .getBoundingClientRect();
      let node = this.cursorManager.walker.currentNode;
      let offset = this.cursorManager.walker.localOffset;

      request.reply({
        node: pathLib.getNodePath(node),
        offset: offset,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
      });
    }

    insertText(request) {
      let text = request.message.text;

      let node = document.createTextNode(text);
      let range = this.cursorManager.walker.getCaretRange();

      range.insertNode(node);
      this.cursorManager.walker.refresh();
      this.cursorManager.forward();

      let rect = this.cursorManager.walker.getCaretRange()
          .getBoundingClientRect();

      node = this.cursorManager.walker.currentNode;
      let offset = this.cursorManager.walker.localOffset;

      request.reply({
        node: pathLib.getNodePath(node),
        offset: offset,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
      });
    }

    _resizeElement(bounds) {
      // TODO: explicitly support more display/position modes than block/absolute
      if (this.currentElement == null) {
        throw new Error('current element is null');
      }
      // Setting the style attribute isn't ideal for this operation - we'd
      // rather set style properties on the element's style, but setAttribtue
      // is a rather easy command to implement, so we'l use it for now
      // TODO: Send all commands to the editor as well so that it can apply
      // them to it's document model
      var element = this.currentElement;
      // var path = pathLib.getNodePath(element, document,
      //     designerNodeFilter);
      let id = element.getAttribute(nodeIdProperty);
      var command = commands.setAttribute(id, 'style',
        element.getAttribute('style'),
        `top: ${bounds.top}px; ` +
        `left: ${bounds.left}px; ` +
        `height: ${bounds.height}px; ` +
        `width: ${bounds.width}px;`);
      this.commandApplier.apply(command);
      return command;
    }

    _elementBounds(element) {
      var bounds = element.getBoundingClientRect();
      return {
        left: bounds.left,
        top: bounds.top,
        width: bounds.width,
        height: bounds.height,
      };
    }

    // TODO(justinfagnani): break element info into two parts: static,
    // unchanging (id, tagName), and dynamic: parent, attributes, style...
    _elementInfo(element) {
      var style = window.getComputedStyle(element);
      return {
        id: this._getId(element),
        sourceId: this._getSourceId(element),
        path: pathLib.getNodePath(element, document,
            designerNodeFilter),
        tagName: element.tagName,
        display: style.display,
        position: style.position,
        styles: cssLib.collectStyles(element),
        computedStyle: cssLib.getStyleProperties(style),
        proxy: dragging.createDragProxy(element, true).outerHTML,
      };
    }
  }

  return DocumentServer;

});
