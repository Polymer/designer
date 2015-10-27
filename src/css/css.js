/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/css', [
   'polymer-designer/path',
   'polymer-designer/dom-utils'], function(pathLib, domUtils) {

  'use strict';

  return {

    /**
     * @typedef {Object} StyleRuleInfo
     * @property {string} selector The CSS selector for the rule.
     * @property {number} index The numerical index of the rule, relative to
     *     other rules with the same selector in the same stylesheet.
     * @property {string} text A textual form of the CSS rules.
     * @property {Object<string, string>} styles A map of CSS properties to
     *     their values (as strings).
     */

    /**
     * @typedef {Object} StyleSheetInfo
     * @property {string} ownerNodePath A pathlib path representing the
     *     `<style>` or `<link>` element that defines the stylesheet.
     * @property {string} stylesheetUrl The URL for the stylesheet, if relevant.
     * @property {Array<StyleRuleInfo>} rules The rules matching the element.
     */

    // Until http://dev.w3.org/csswg/cssom/#dom-getstyleutils-cascadedstyle

    /**
     * Finds all style rules matching an element (defined in its document).
     *
     * @param {HTMLElement} element
     * @return {Array<StyleSheetInfo>} The stylesheets and rules that match
     *     `element`.
     */
    collectStyles(element) {
      var results = [];

      var doc = element.ownerDocument;
      for (var i = 0, sheet; sheet = doc.styleSheets[i]; i++) {
        var rules = this.collectStyleRules(element, sheet.cssRules);
        if (!rules || !rules.length) continue;

        var sheetInfo = {rules: rules};
        if (sheet.ownerNode) {
          sheetInfo.ownerSourceId = domUtils.getSourceId(sheet.ownerNode);
        }
        if (sheet.href) {
          sheetInfo.stylesheetUrl = sheet.href;
        }

        results.push(sheetInfo);
      }
      return results;
    },

    /**
     * Selects style rules in `rules` that match `element`, and transforms them
     * to StyleRuleInfo objects.
     *
     * @param {HTMLElement} element
     * @param {Array<CSSRule>}
     * @return {Array<StyleRuleInfo>}
     */
    collectStyleRules(element, rules) {
      if (rules == null) return null;
      return Array.from(rules)
          .filter((r) => element.matches(r.selectorText))
          .map(this.getRuleInfo.bind(this));
    },

    getRuleInfo(rule) {
      return {
        selector: rule.selectorText,
        index: 0,  // TODO(nevir): Handle duplicate selectors!
        text: rule.cssText,
        // styles: this.getStyleProperties(rule.style),
      };
    },

    getStyleProperties(style) {
      var styles = {};
      for (var j = 0, property; property = style[j]; j++) {
        styles[property] = style[property];
      }
      return styles;
    },

    // TODO(justinfagnani): normalizeSelector(removeTransientPseudos : boolean)
  };

});
