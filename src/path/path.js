/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/path', ['polymer-designer/dom-utils'],
     function(domUtils) {
  'use strict';

  /**
   * Returns the path to [node] in [doc]. A path is a slash-separated list
   * of segments, each of which is the node name and the the index into its
   * parent nodes childNodes (for error detection).
   *
   * This function is sensitive to empty and adjacent Text nodes, so you
   * probably want to call doc.normalize() first!
   *
   * @param {Node|Object} node The DOM Node or Parse5 AST node to get the path
   *   of.
   * @param {Document|Object} doc The DOM or Parse5 Document containing [node].
   * @param {function(Node|Object)} filter An optional function that excludes
   *     nodes from the path when it returns `false`.
   *
   * @returns {string} the path to [node]
   */
  function getNodePath(node, doc, filter) {
    var doc = doc || document;
    var path = [];
    while (node && node.parentNode && node.parentNode !== doc) {
      let children = Array.prototype.slice.call(node.parentNode.childNodes);

      let index = -1;
      for (let child of children) {
        if (filter && !filter(child)) {
          continue;
        }
        index += 1;
        if (child === node) {
          break;
        }
      }
      if (index === -1) {
        throw new Error('Internal Error');
      }
      path.push(`${node.nodeName.toUpperCase()}:${index}`);
      node = node.parentNode;
    }
    return path.reverse().join('/');
  }

  /**
   * Returns the node for the given [path] within [doc]. The path must be
   * format acording to [getNodePath].
   *
   * This function is sensitive to empty and adjacent Text nodes, so you
   * probably want to call doc.normalize() first!
   *
   * @param {string} path The path to the desired node
   * @param {Document|Object} doc
   * @param {function(Node|Object)} filter An optional function that excludes
   *     nodes from the path when it returns `false`.
   *
   * @returns {Node|Object}
   */
  function getNodeFromPath(path, doc, filter) {
    var doc = doc || document;
    var segments = path.split('/');

    var node = domUtils.getDocumentElement(doc);
    var i = 0;
    while (i < segments.length && node) {
      var children = Array.prototype.slice.call(node.childNodes);
      var segment = segments[i].split(':');
      var nodeName = segment[0];
      var index = parseInt(segment[1], 10);
      if (index >= children.length) {
        throw new RangeError(
            `Invalid index: ${index} is out of range for length ` +
            `${children.length}`);
      }
      let j = 0;
      for (let child of children) {
        if (filter && !filter(child)) {
          continue;
        }
        if (j === index) {
          node = child;
          break;
        }
        j += 1;
      }
      if (!node || node.nodeName.toUpperCase() != nodeName) {
        throw new Error(`Expected node name ${nodeName} but was ` +
            `${node.nodeName}`);
      }
      i++;
    }
    return node;
  }

  return {
    getNodePath: getNodePath,
    getNodeFromPath: getNodeFromPath,
  };

});
