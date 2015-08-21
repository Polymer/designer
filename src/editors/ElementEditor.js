/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/editors/ElementEditor', function() {
  'use strict';

  /**
   * Encapsulates various logic about how to handling editing of elements.
   *
   * Examples: elements will have different sets of inspectors, different icons
   *   in the pallete, different drag proxies, or default styling.
   *
   * For Polymer elements, we may want to load this information from the element
   *   folder, maybe by loading a file like designer.html (assuming we mitigate
   *   the security issues).
   */
  class ElementEditor {

    static getEditor(elementName) {
      // In the near future we'll do a lookup
      return new ElementEditor();
    }

    get inspectors() {
      return ['designer-default-inspector', 'designer-property-inspector'];
    }
  }

  return ElementEditor;

});
