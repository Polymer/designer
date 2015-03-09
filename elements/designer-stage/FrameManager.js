/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

modulate('FrameManager', ['Path', 'Css', 'Commands', 'DomCommandApplier', 'dom-utils'],
    function(pathLib, cssLib, commands, DomCommandApplier, domUtils) {
  'use strict';

  class FrameManager {

    constructor() {
      this.token = null;
      this.ownerWindow = null;
      this.currentElement = null;
      this.handlers = {
        'selectElementAtPoint': this._onSelectElementAtPoint.bind(this),
        'selectElementAtPath': this._onSelectElementAtPath.bind(this),
        'selectionChange': this._onSelectionChange.bind(this),
        'command': this._onCommand.bind(this),
      };
      this.commandApplier = new DomCommandApplier(document);
    }

    listen(wnd) {
      wnd = wnd || window;
      wnd.addEventListener('message', (function(event) {
        var data = event.data;
        if (data.messageType == 'handshake') {
          // special case 'handshake' beause it needs access to event.source
          this._onHandshake(event);
        } else {
          var handler = this.handlers[data.messageType];
          if (handler == null) {
            throw new Error('Unknown message type: ' + data.messageType);
          }
          handler(data);
        }
      }).bind(this));
    }

    _onHandshake(event) {
      if (this.token != null) {
        throw new Error('token already set');
      }
      this.ownerWindow = event.source;
      this.token = event.data.token;
    }

    _onCommand(message) {
      this.commandApplier.apply(message);
      // TODO: how can we tell what non-doc side effects, like the following
      // need to be propagated?
      this.sendMessages([this.updateBoundsMessage(this.currentElement)]);
    }

    updateBoundsMessage(element) {
      var bounds = element.getBoundingClientRect();
      return {
        messageType: 'selectionBoundsChange',
        left: bounds.left,
        top: bounds.top,
        width: bounds.width,
        height: bounds.height,
      };
    }

    newSelectionMessage(element) {
      var style = window.getComputedStyle(element);
      return {
        messageType: 'newSelection',
        path: pathLib.getNodePath(element),
        tagName: element.tagName,
        display: style.display,
        position: style.position,
        styles: cssLib.collectStyles(element),
      };
    }

    updateHoverMessage(element) {
      var message = {
        messageType: 'hoverElement',
      };
      if (element != null) {
        var bounds = element.getBoundingClientRect();
        var style = window.getComputedStyle(element);

        message.left = bounds.left;
        message.top = bounds.top;
        message.width = bounds.width;
        message.height = bounds.height;
        message.path = pathLib.getNodePath(element);
        message.tagName = element.tagName;
        message.display = style.display;
        message.position = style.position;
      }
      return message;
    }

    sendMessages(messages) {
      this.ownerWindow.postMessage({token: this.token, messages: messages}, '*');
    }

    _onSelectElementAtPoint(message) {
      this.selectElement(message.x, message.y);
      this.sendMessages([
        this.updateBoundsMessage(this.currentElement),
        this.newSelectionMessage(this.currentElement)]);
    }

    _onSelectElementAtPath(message) {
      this.currentElement = pathLib.getNodeFromPath(message.path);
      this.sendMessages([
        this.updateBoundsMessage(this.currentElement),
        this.newSelectionMessage(this.currentElement)]);
    }

    selectElement(x, y) {
      this.currentElement = this.getElementAt(x, y);
    }

    getElementAt(x, y) {
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

    _onSelectionChange(message) {
      var command = this.resizeElement(message.bounds);
      var messages = [
        this.updateBoundsMessage(this.currentElement),
        command,
      ];
      if (document.elementsFromPoint) {
        var hoverElements = document.elementsFromPoint(message.cursor.x, message.cursor.y);
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
        messages.push(this.updateHoverMessage(hoverElement));
      }
      this.sendMessages(messages);
    }

    resizeElement(bounds) {
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
      var path = pathLib.getNodePath(element);
      var command = commands.setAttribute(path, 'style',
        element.getAttribute('style'),
        `top: ${bounds.top}px; ` +
        `left: ${bounds.left}px; ` +
        `height: ${bounds.height}px; ` +
        `width: ${bounds.width}px;`);
      this.commandApplier.apply(command);
      return command;
    }
  }

  return {
    FrameManager: FrameManager,
  };
});
