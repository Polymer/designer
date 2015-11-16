/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/editors/ElementEditor', () => {
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

    static getEditor(tagName) {
      if (builtIns.hasOwnProperty(tagName)) {
        return builtIns[tagName];
      }
      return new ElementEditor();
    }

    static getEditors() {
      return Object.keys(builtIns).map((k) => {
        return builtIns[k];
      });
    }

    constructor(tagName, initialStyle, initialContent) {
      this.tagName = tagName;
      this.initialStyle = initialStyle;
      this.initialContent = initialContent;
    }

    get inspectors() {
      return [
          'designer-default-inspector',
          'designer-attribute-inspector',
          'designer-property-inspector',
          'designer-style-inspector',
      ];
    }
  }

  class TemplateEditor extends ElementEditor {

    constructor() {
      super('template', '', 'template');
    }

    get inspectors() {
      return super.inspectors.concat('designer-template-inspector');
    }
  }

  let builtIns = {
    'div': new ElementEditor('div', 'height: 20px;', 'div'),
    'span': new ElementEditor('span', '', 'span'),
    'a': new ElementEditor('a', '', 'URL'),
    'section': new ElementEditor('section', 'height: 20px;', ''),
    'header': new ElementEditor('header', '', 'Header'),
    'footer': new ElementEditor('footer', '', 'Footer'),
    'template': new TemplateEditor(),
  };

  class BuiltinElementEditor extends ElementEditor {
    constructor(tagName) {
      super(tagName);
    }
  }

  return ElementEditor;

});
