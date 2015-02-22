/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 modulate('parse5_utils', function() {
  function getAttributeIndex(el, name) {
    for (var i = 0; i < el.attrs.length; i++) {
      if (el.attrs[i].name === name) {
        return i;
      }
    }
    return null;
  }

  function getAttribute(el, name) {
    var i = getAttributeIndex(el, name);
    if (i) {
      return el.attrs[i].value;
    }
    return null;
  }

  function setAttribute(el, name, value) {
    var i = getAttributeIndex(el, name);
    if (i) {
      el.attrs[i].value = value;
    } else {
      el.attrs.push({name: name, value: value});
    }
  }

  return {
    getAttributeIndex: getAttributeIndex,
    getAttribute: getAttribute,
    setAttribute: setAttribute,
  };

});
