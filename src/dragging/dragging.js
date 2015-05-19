/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/dragging', ['polymer-designer/css'], function(css) {
  'use strict';

  /**
   * Deep clones a node, only copying visible nodes and inlining all computed
   * styles.
   *
   * TODO(justinfagnani): add option to strip margins?
   * TODO(justinfagnani): created divs rather than clones?
   */
  function createDragProxy(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.cloneNode();
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      let style = window.getComputedStyle(node);
      if (style.display === 'none') {
        return null;
      }
      let clone = node.ownerDocument.createElement('div');
      for (let i = 0; i < node.attributes.length; i++) {
        let attr = node.attributes[i];
        clone.setAttribute(attr.name, attr.value);
      }
      let properties = css.getStyleProperties(style);
      let styleText = Object.keys(properties)
        .map(function(prop) {
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
  };

});
