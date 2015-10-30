/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/dragging', ['polymer-designer/css'], (css) => {
  'use strict';

  /**
   * Starts a mouse drag operation.
   *
   * Given an initial client position at (clientX, clientY) and an
   * initial drag position (startX, startY), onMove is called with new
   * drag position.
   */
  function startDrag(startX, startY, clientX, clientY, opts) {
    opts = opts || {};
    let onDragMove = opts.onDragMove;
    let onDragEnd = opts.onDragEnd;
    let fireDragEvents = opts.fireDragEvents || false;
    let data = opts.data;

    let currentTargets = new Set();

    // Because receivers can mutate events, we create a new detail for each
    // event we fire. This is important for dragging where a receiver might
    // send data back via the event.
    let _detail = (e) => ({
      clientX: e.clientX,
      clientY: e.clientY,
      // relatedTarget: element,
      dragType: opts.dragType,
      data: data,
    });

    let onMouseMove = (e) => {
      let deltaX = e.clientX - clientX + startX;
      let deltaY = e.clientY - clientY + startY;

      if (onDragMove) {
        onDragMove(deltaX, deltaY, e);
      }

      if (fireDragEvents) {

        var dropTargets = document.elementsFromPoint(e.clientX, e.clientY)
            .filter((e) => e.designerDropTarget);

        let newTargets = new Set(dropTargets);

        for (let target of currentTargets) {
          if (!newTargets.has(target)) {
            target.dispatchEvent(new CustomEvent('designer-drag-leave', {detail: _detail(e)}));
          }
        }

        for (let target of dropTargets) {
          if (!currentTargets.has(target)) {
            target.dispatchEvent(new CustomEvent('designer-drag-enter', {detail: _detail(e)}));
          }
          target.dispatchEvent(new CustomEvent('designer-drag-move', {detail: _detail(e)}));
        }

        currentTargets = newTargets;
      }
    };

    let onMouseUp = (e) => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('contextmenu', onMouseUp);

      if (onDragEnd) {
        onDragEnd(e);
      }

      if (fireDragEvents) {
        for (let target of currentTargets) {
          target.dispatchEvent(new CustomEvent('designer-drag-drop', {detail: _detail(e)}));
        }
        currentTargets = null;
      }
    };

    let onMouseOver = (e) => {

    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    // Note document instead of window:
    // http://www.quirksmode.org/dom/events/contextmenu.html
    document.addEventListener('contextmenu', onMouseUp);
  }

  /**
   * Deep clones a node, only copying visible nodes and inlining all computed
   * styles.
   */
  function createDragProxy(node, stripMargins) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.cloneNode();
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      let style = window.getComputedStyle(node);
      if (style.display === 'none') {
        return null;
      }
      let clone;
      if (style.display === 'inline') {
        clone = node.ownerDocument.createElement('span');
      } else {
        clone = node.ownerDocument.createElement('div');
      }
      for (let i = 0; i < node.attributes.length; i++) {
        let attr = node.attributes[i];
        clone.setAttribute(attr.name, attr.value);
      }
      let properties = css.getStyleProperties(style);
      let styleText = Object.keys(properties)
        .filter((prop) => {
          return !(stripMargins && prop.startsWith('margin'));
        })
        .map((prop) => {
          return `${prop}: ${properties[prop]}`;
        })
        .join('; ');
      clone.setAttribute('style', styleText);
      for (let i = 0; i < node.childNodes.length; i++) {
        let child = createDragProxy(node.childNodes[i]);
        if (child) {
          clone.appendChild(child);
        }
      }
      return clone;
    }
    return null;
  }

  return {
    createDragProxy: createDragProxy,
    startDrag: startDrag,
  };

});
