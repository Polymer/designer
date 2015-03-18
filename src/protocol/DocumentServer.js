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
      'polymer-designer/commands',
      'polymer-designer/commands/DomCommandApplier',
      'polymer-designer/dom-utils'],
    function(pathLib, cssLib, commands, DomCommandApplier, domUtils) {
  'use strict';

  function designerNodeFilter(node) {
    return node.nodeType !== Node.ELEMENT_NODE ||
        !node.hasAttribute('designer-exclude');
  }

  class DocumentServer {

    constructor(connection) {
      this.connection = connection;
      this.currentElement = null;
      this.commandApplier = new DomCommandApplier(document);

      connection.on('selectElementAtPoint', this.selectElementAtPoint.bind(this));
      connection.on('selectElementAtPath', this.selectElementAtPath.bind(this));
      connection.on('selectionBoundsChanged', this.selectionBoundsChanged.bind(this));
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

    selectElementAtPoint(request) {
      var x = request.message.x;
      var y = request.message.y;
      this.currentElement = this._getElementAt(x, y);
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

      if (document.elementsFromPoint) {
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
      var path = pathLib.getNodePath(element, document,
          designerNodeFilter);
      var command = commands.setAttribute(path, 'style',
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

    _elementInfo(element) {
      var style = window.getComputedStyle(element);
      return {
        path: pathLib.getNodePath(element, document,
            designerNodeFilter),
        tagName: element.tagName,
        display: style.display,
        position: style.position,
        styles: cssLib.collectStyles(element),
        computedStyle: cssLib.getStyleProperties(style),
      };
    }
  }

  return DocumentServer;

});
