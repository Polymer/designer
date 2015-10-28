/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/rework-utils', ['css'], function(rework) {
  'use strict';

  const colonRegex = /:\s*/;

  return {

    /**
     * Find the rule matching `selector` and `offset` (relative index of all
     * rules with identical selectors).
     *
     * @param {Rework.AST.Stylesheet} parsedSheet
     * @param {string} selector
     * @param {number} offset
     * @return {Rework.AST.Rule}
     */
    getRule(parsedSheet, selector, offset) {
      return parsedSheet.stylesheet.rules.find(function(rule) {
        // TODO(nevir): Actually honor offset, and multiple selectors.
        return rule.selectors[0] === selector;
      });
    },

    /**
     * @param {Rework.AST.Rule} rule
     * @param {string} key
     * @return {Rework.AST.Declaration}
     */
    getProperty(rule, key) {
      return rule.declarations.find(function(declaration) {
        return declaration.property === key;
      });
    },

    /**
     * Given a Rework-parsed `rule` and the `source` corresponding to it, update
     * the value of a particular property to `value`.
     *
     * We _could_ be using Rework's stringification logic to update values, but
     * it is much less intrusive to make the minimal edit for the user, rather
     * than potentially reformatting their entire stylesheet.
     *
     * @param {string} source
     * @param {Rework.AST.Rule} rule
     * @param {string} key
     * @param {string} value
     * @return {string}
     */
    replaceProperty(source, rule, key, value) {
      let property = this.getProperty(rule, key);
      let start = this.sourceOffset(source, property.position.start);
      let end = this.sourceOffset(source, property.position.end);

      let propertySource = source.substr(start, end - start);
      let colonMatch = colonRegex.exec(propertySource);
      console.assert(colonMatch, 'Got an invalid CSS property assignment:', propertySource);
      let valueStart = start + colonMatch.index + colonMatch[0].length;

      // TODO(nevir): We should consider just returning a patch/diff so that we
      // can perform all sorts of fun operations w/ it.
      return source.substr(0, valueStart) + value + source.substr(end);
    },

    /**
    * Given a Rework-parsed `rule` and the `source` corresponding to it, update
    * the value of a particular property to `value`.
    *
    * We _could_ be using Rework's stringification logic to update values, but
    * it is much less intrusive to make the minimal edit for the user, rather
    * than potentially reformatting their entire stylesheet.
    *
    * @param {string} source
    * @param {Rework.AST.Rule} rule
    * @param {string} key
    * @param {string} value
    * @return {string}
    */
   renameProperty(source, rule, oldPropertyName, newPropertyName) {
     let property = this.getProperty(rule, oldPropertyName);
     let start = this.sourceOffset(source, property.position.start);
     let end = this.sourceOffset(source, property.position.end);

     let propertySource = source.substr(start, end - start);
     let colonMatch = colonRegex.exec(propertySource);
     console.assert(colonMatch, 'Got an invalid CSS property assignment:', propertySource);
     let propertyEnd = start + colonMatch.index;

     return source.substr(0, start) + newPropertyName + source.substr(propertyEnd);
   },

   /**
   * Given a Rework-parsed `rule` and the `source` corresponding to it, set
   * the value of `property` to `value`.
   *
   * @param {string} source
   * @param {Rework.AST.Rule} rule
   * @param {string} property
   * @param {string} value
   * @return {string} The new source string
   */
  setProperty(source, rule, property, value) {
    let ruleEnd = this.sourceOffset(source, rule.position.end);

    // TODO(justinfagnani): smarter line-break and indentation aware insert
    // let declarations = rule.declarations;
    // let lastDeclarationEnd = declarations
    //     ? declarations[declarations.length - 1].position.end
    //     : ruleEnd;

    return source.substr(0, ruleEnd - 1) + `${property}: ${value};` + source.substr(ruleEnd - 1);
  },

    /**
     * Rework's positions deal in lines and columns, but we generally want to
     * deal in character offsets. This'll convert 'em for ya.
     *
     * @param {string} source
     * @param {Rework.Position} position
     * @return {number} The character offset
     */
    sourceOffset(source, position) {
      let offset = 0;
      let line = 1;
      while (line < position.line) {
        let nextLineStart = source.indexOf('\n', offset);
        console.assert(nextLineStart !== -1, 'position:', position, 'is out of bounds:', source);
        line += 1;
        offset = nextLineStart + 1;
      }

      return offset + position.column - 1;
    },

  };
});
