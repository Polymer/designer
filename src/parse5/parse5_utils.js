/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/parse5/parse5-utils', function() {

  function getAttributeIndex(element, name) {
    for (var i = 0; i < element.attrs.length; i++) {
      if (element.attrs[i].name === name) {
        return i;
      }
    }
    return null;
  }

  function getAttribute(element, name) {
    var i = getAttributeIndex(element, name);
    if (i != null) {
      return element.attrs[i].value;
    }
    return null;
  }

  function setAttribute(element, name, value) {
    var i = getAttributeIndex(element, name);
    if (i != null) {
      element.attrs[i].value = value;
    } else {
      element.attrs.push({name: name, value: value});
    }
  }

  return {
    getAttributeIndex: getAttributeIndex,
    getAttribute: getAttribute,
    setAttribute: setAttribute,
  };

});
