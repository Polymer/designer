/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

modulate('FrameManager', ['Path'], function(path) {
  function FrameManager() {
    this.token = null;
    this.ownerWindow = null;
    this.currentElement = null;
    this.handlers = {
      'selectElement': this._onSelectElement.bind(this),
      'selectionChange': this._onSelectionChange.bind(this),
    };
  }

  FrameManager.prototype.listen = function(wnd) {
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
  };

  FrameManager.prototype._onHandshake = function(event) {
    if (this.token != null) {
      throw new Error('token already set');
    }
    this.ownerWindow = event.source;
    this.token = event.data.token;
  };

  /**
   * Sends an 'updateSelection' message to the stage which updates the stages
   * selection component to match the new bounds of the selected component.
   */
  FrameManager.prototype.sendUpdateSelection = function(element, options) {
    options = options || {};
    var newSelection = options.newSelection;
    var hoverElement = options.hoverElement;

    document.normalize();

    var data = {
      messageType: 'updateSelection',
      token: this.token,
      path: path.getNodePath(element),
    };

    var bounds = element.getBoundingClientRect();
    data.bounds = {
      left: bounds.left,
      top: bounds.top,
      width: bounds.width,
      height: bounds.height,
    };

    if (newSelection) {
      var style = window.getComputedStyle(element);
      data.elementInfo = {
        tagName: element.tagName,
        display: style.display,
        position: style.position,
      };
    }

    if (hoverElement) {
      var hoverBounds = hoverElement.getBoundingClientRect();
      data.hover = {
        left: hoverBounds.left,
        top: hoverBounds.top,
        width: hoverBounds.width,
        height: hoverBounds.height,
      };
    }

    this.ownerWindow.postMessage(data, '*');
  };

  FrameManager.prototype._onSelectElement = function(message) {
    this.selectElement(message.x, message.y);
    this.sendUpdateSelection(this.currentElement, {newSelection: true});
  };

  FrameManager.prototype.selectElement = function(x, y) {
    this.currentElement = this.getElementAt(x, y);
  };

  FrameManager.prototype.getElementAt = function(x, y) {
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
  };

  FrameManager.prototype._onSelectionChange = function(message) {
    this.resizeElement(message.bounds);
    // TODO: This isn't quite right, we need to exclude the current element
    // when looking for a hover element. We need either 
    // 1) Document.elementsFromPoint() (being added to Chrome, in progress)
    // 2) Remove the current element, then call document.elementFromPoint()
    // 3) Custom hit testing
    var hoverElement = this.getElementAt(message.cursor.x, message.cursor.y);
    this.sendUpdateSelection(this.currentElement, {hoverElement: hoverElement});
  };

  FrameManager.prototype.resizeElement = function(bounds) {
    // TODO: explicitly support more display/position modes than block/absolute
    if (this.currentElement != null) {
      throw new Error('current element is null');
    }
    var style = this.currentElement.style;
    style.top = bounds.top + 'px';
    style.left = bounds.left + 'px';
    style.height = bounds.height + 'px';
    style.width = bounds.width + 'px';
  };

  return {
    FrameManager: FrameManager,
  };
});
