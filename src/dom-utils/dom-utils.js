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

  return {
    isDescendant: isDescendant,
    getDocumentElement: getDocumentElement,
  };

});
