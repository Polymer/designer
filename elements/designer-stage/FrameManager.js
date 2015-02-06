/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 function FrameManager() {
  this.token = null;
  this.ownerWindow = null;
  this.currentElement = null;
  this.handlers = {
    'selectElement': this._onSelectElement.bind(this),
    'resizeElement': this._onResizeElement.bind(this),
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
FrameManager.prototype.sendUpdateSelection = function(bounds) {
  this.ownerWindow.postMessage({
    messageType: 'updateSelection',
    token: this.token,
    bounds: {
      left: bounds.left,
      top: bounds.top,
      width: bounds.width,
      height: bounds.height
    }
  }, '*');
};

/**
 * Sends an 'selectedElement' message to the stage which sets up the stages
 * selection component move and resize the selected component.
 */
FrameManager.prototype.sendSelectedElement = function(element) {
  var style = window.getComputedStyle(element);
  var bounds = element.getBoundingClientRect();
  this.ownerWindow.postMessage({
    messageType: 'selectedElement',
    token: this.token,
    tagName: element.tagName,
    display: style.display,
    position: style.position,
    bounds: {
      left: bounds.left,
      top: bounds.top,
      width: bounds.width,
      height: bounds.height
    }
  }, '*');
};

FrameManager.prototype._onSelectElement = function(message) {
  this.selectElement(message.x, message.y);
  this.sendSelectedElement(this.currentElement);
};

FrameManager.prototype.selectElement = function(x, y) {
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
  this.currentElement = lastLightCandidate;
};

FrameManager.prototype._onResizeElement = function(message) {
  var newBounds = this.resizeElement(message.bounds);
  this.sendUpdateSelection(newBounds);
};

FrameManager.prototype.resizeElement = function(bounds) {
  // TODO: explicitly support more display/position modes than block/absolute
  if (this.currentElement != null) {
    var style = this.currentElement.style;
    style.top = bounds.top + 'px';
    style.left = bounds.left + 'px';
    style.height = bounds.height + 'px';
    style.width = bounds.width + 'px';
    return bounds;
  }
};
