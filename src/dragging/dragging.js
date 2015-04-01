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

  function getDragProxyInfo(node) {
    // console.log('buildDragProxy');
    if (node.nodeType === Node.TEXT_NODE) {
      return {
        nodeValue: node.nodeValue,
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      return {
        style: css.getStyleProperties(window.getComputedStyle(node)),
        children: (function() {
          let children = [];
          for (let i = 0; i < node.childNodes.length; i++) {
            children.push(getDragProxyInfo(node.childNodes[i]));
          }
          return children;
        })(),
      };
    }
  }

  function buildDragProxy(info, stripMargins) {
    if (info.hasOwnProperty('nodeValue')) {
      return document.createTextNode(info.nodeValue);
    } else {
      let node = document.createElement('div');
      let style = info.style;
      let keys = Object.keys(style);
      if (stripMargins) {
        keys = keys.filter(function(k) {
          return !k.startsWith('margin');
        });
      }
      let styleAttr = keys.map(function(k) {
        return `${k}: ${style[k]}`;
      }).join(';');
      node.setAttribute('style', styleAttr);
      info.children.forEach(function(c) {
        node.appendChild(buildDragProxy(c));
      });
      return node;
    }
  }

  return {
    getDragProxyInfo: getDragProxyInfo,
    buildDragProxy: buildDragProxy,
  };

});
