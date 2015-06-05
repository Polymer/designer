/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/dom-utils', function() {
  'use strict';

  const sourceIdAttribute = '__designer_node_id__';

  /**
   * @param {Element} element
   * @return {string} The source ID of the element, which is assigned to the to
   *     the element before its document is parsed.
   */
  function getSourceId(element) {
    return element.getAttribute(sourceIdAttribute);
  }

  /**
   * @param {Node} node
   * @return {Array<Node>} The ancestors of [node] not including the node's
   *     owner document.
   */
  function getAncestors(node) {
    var ancestors = [];
    while (node.parentNode !== node.ownerDocument) {
      ancestors.push(node);
      node = node.parentNode;
    }
    return ancestors.reverse();
  }

  function isDescendant(element, target) {
    while (element.parentNode) {
      if (element.parentNode == target) {
        return true;
      }
      element = element.parentNode;
    }
  }

  /**
   * Returns the document element (<html>), even in minimal DOMs that don't
   * define Document.documentElement, like parse5's AST.
   */
  function getDocumentElement(doc) {
    return doc.documentElement ||
        (function() {
          for (var i = 0; i < doc.childNodes.length; i++) {
            var n = doc.childNodes[i];
            if (n.nodeName.toUpperCase() == 'HTML') {
              return n;
            }
          }
        })();
  }

  function designerNodeFilter(node) {
    return node.nodeType !== Node.ELEMENT_NODE ||
        !node.hasAttribute('designer-exclude');
  }

  function parseQueryString(queryString) {
    if (queryString.startsWith('?')) {
      queryString = queryString.slice(1);
    }
    let params = new Map();
    queryString.split('&').forEach(function(e) {
      let keyValue = e.split('=');
      if (keyValue[0]) {
        params.set(keyValue[0], keyValue[1] || true);
      }
    });
    return params;
  }

  /**
   * Converts a client position to a local position within [node].
   *
   * @param node {Node}
   * @param clientX {number}
   * @param clientY {number}
   * @return {{
   *   x: number,
   *   y: number,
   * }}
   */
  function toLocalPosition(node, clientX, clientY) {
    let bounds = node.getBoundingClientRect();
    return {
      x: clientX - bounds.left,
      y: clientY - bounds.top,
    };
  }

  function attributesForElement(element) {
    return Array.prototype.reduce.call(element.attributes, function(attributes, attribute) {
      attributes[attribute.name] = attribute.value;
      return attributes;
    }, {});
  }

  /**
   * Sets the left, top, width and height of [element] from [bounds]. Useful
   * for absolutely positioning elements.
   *
   * @param element {Element}
   * @param bounds {ClientRect|Object}
   */
  function setBounds(element, bounds) {
    var style = element.style;
    style.top = bounds.top + 'px';
    style.left = bounds.left + 'px';
    style.width = bounds.width + 'px';
    style.height = bounds.height + 'px';
  }


  /**
   * Sets [element]'s style display property to [display] or 'block' if
   * [display] is not specified.
   *
   * @param element {Element}
   * @param display {string|Null}
   */
  function show(element, display) {
    element.style.display = display || 'block';
  }

  /**
   * Sets [element]'s style display property to 'none';
   *
   * @param element {Element}
   */
  function hide(element) {
    element.style.display = 'none';
  }

  return {
    attributesForElement: attributesForElement,
    designerNodeFilter: designerNodeFilter,
    getAncestors: getAncestors,
    getDocumentElement: getDocumentElement,
    getSourceId: getSourceId,
    hide: hide,
    isDescendant: isDescendant,
    isDescendant: isDescendant,
    parseQueryString: parseQueryString,
    setBounds: setBounds,
    show: show,
    sourceIdAttribute: sourceIdAttribute,
    toLocalPosition: toLocalPosition,
  };

});
