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
define('polymer-designer/commands', () => ({

  InsertPosition: {
    before: 'before',
    after: 'after',
    into: 'into',
  },

  setAttribute: (sourceId, attribute, oldValue, newValue) => ({
      commandType: 'setAttribute',
      sourceId,
      attribute,
      oldValue,
      newValue,
  }),

  setTextContent: (sourceId, oldValue, newValue) => ({
    commandType: 'setTextContent',
    sourceId,
    oldValue,
    newValue,
  }),

  setTagName: (sourceId, oldValue, newValue) => ({
    commandType: 'setTagName',
    sourceId,
    oldValue,
    newValue,
  }),

  /**
   * [path] and [selector] are used to find the CSS declaration to edit,
   * which may be:
   *   - a path to a <style> tag, + the selector of a rule
   *   - an element path + style attribute
   *   - a file path?
   */
  setCssProperties: (sourceId, selector, properties) => ({
    commandType: 'setCssProperties',
    sourceId,
    selector,
    properties,
  }),

  moveElement: (sourceId, targetSourceId, position) => ({
    commandType: 'moveElement',
    sourceId,
    targetSourceId,
    position,
  }),

  newElement: (targetSourceId, tagName, initialStyle, initialContent,
      insertPosition) => ({
    commandType: 'newElement',
    // this signifies that the command needs to request a
    // new sourceId. This is a pretty ad-hoc way to do this... :/
    sourceId: null,
    selectElement: true,
    targetSourceId,
    tagName,
    initialStyle,
    initialContent,
    insertPosition,
  }),

  removeElement: (sourceId) => ({
    commandType: 'removeElement',
    sourceId,
  }),

}));
