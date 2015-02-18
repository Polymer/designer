/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * Command factories for document editing.
 *
 * Commands themselves are simple JSON objects so that they can be
 * serialized over postMessage.
 */
modulate('Commands', function() {

  // exports
  return {

    setAttribute: function(path, attribute, oldValue, newValue) {
      return {
        messageType: 'command',
        commandType: 'setAttribute',
        path: path,
        attribute: attribute,
        oldValue: oldValue,
        newValue: newValue,
      };
    },

    // selectElement: function(x, y) {
    //   return {
    //     messageType: 'command',
    //     commandType: 'selectElement',
    //     x: x,
    //     y: y,
    //   };
    // },

    // selectionMove: function(bounds, cursor) {
    //   return {
    //     messageType: 'command',
    //     commandType: 'selectionMove',
    //     bounds: bounds,
    //     cursor: cursor,
    //   };
    // },

    /**
     * [path] and [selector] are used to find the CSS declaration to edit,
     * which may be:
     *   - a path to a <style> tag, + the selector of a rule
     *   - an element path + style attribute
     *   - a file path?
     */
    setCssProperties: function(path, selector, properties) {
      return {
        messageType: 'command',
        commandType: 'setCssProperties',
        path: path,
        selector: selector,
        properties: properties,
      };
    }
  };
});
