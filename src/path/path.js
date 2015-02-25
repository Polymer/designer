/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 modulate('Path', ['Parse5', 'dom-utils'], function(Parse5, domUtils) {

  /**
   * Returns the path to [node] in [doc]. A path is a slash-separated list
   * of segments, each of which is the node name and the the index into its
   * parent nodes childNodes (for error detection).
   *
   * This function is sensitive to empty and adjacent Text nodes, so you
   * probably want to call doc.normalize() first!
   */
  function getNodePath(node, doc) {
    var doc = doc || document;
    // if (node.ownerDocument != doc) {
    //   throw new Error('node is not in the given document');
    // }
    var path = [];
    while (node && node.parentNode && node.parentNode !== doc) {
      var children = Array.prototype.slice.call(node.parentNode.childNodes);
      var index = children.indexOf(node);
      path.push(`${node.nodeName.toUpperCase()}:${index}`);
      node = node.parentNode;
    }
    return path.reverse().join('/');
  }

  function getNodeFromPath(path, doc) {
    var doc = doc || document;
    var segments = path.split('/');

    var node = domUtils.getDocumentElement(doc);
    var i = 0;
    while (i < segments.length && node) {
      var children = node.childNodes;
      var segment = segments[i].split(':');
      var nodeName = segment[0];
      var index = segment[1];
      if (index >= children.length) {
        throw new RangeError(
            `Invalid index: ${index} is out of range for length ${children.length}`);
      }
      node = children[index];
      if (!node || node.nodeName.toUpperCase() != nodeName) {
        throw new Error(`Expected node name ${nodeName} but was ${node.nodeName}`);
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
