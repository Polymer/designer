/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/commands/ParsedHtmlCommandApplier',[
      'polymer-designer/commands/CommandApplier',
      'polymer-designer/dom-utils',
      'dom5',
      'polymer-designer/commands'],
    (CommandApplier, domUtils, dom5, commands) => {

  'use strict';

  const nodeIdProperty = domUtils.sourceIdAttribute;

  /**
   * Applies commands to DOM Documents, including embedded and linked
   * stylesheets.
   */
  class ParsedHtmlCommandApplier extends CommandApplier {

    constructor(doc) {
      super(doc);
      this.handlers = {
        'setAttribute': {
          checkApply: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            this.check(dom5.getAttribute(node, command.attribute) == command.oldValue);
          },

          apply: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            dom5.setAttribute(node, command.attribute, command.newValue);
          },

          checkUndo: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            this.check(dom5.getAttribute(node, command.attribute) == command.newValue);
          },

          undo: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            dom5.setAttribute(node, command.attribute, command.oldValue);
          },
        },

        'setTextContent': {
          checkApply: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            // Don't apply if there are element children.
            this.check(!node.childNodes.some((child) => {
              return child.nodeName !== '#text';
            }));
          },

          apply: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            dom5.setTextContent(node, command.newValue);
          },

          checkUndo: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            this.check(dom5.getTextContent(node) === command.newValue);
          },

          undo: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            dom5.setTextContent(node, command.oldValue);
          },
        },

        'setTagName': {
          checkApply: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            this.check(node &&
                node.tagName.toLowerCase() === command.oldValue.toLowerCase());
          },

          apply: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            node.tagName = node.nodeName = command.newValue;
          },

          checkUndo: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            this.check(node &&
                node.tagName.toLowerCase() === command.oldValue.toLowerCase());
          },

          undo: (doc, command) => {
            let node = this.getNode(doc, command.sourceId);
            node.tagName = node.nodeName = command.oldValue;
          },
        },

        'moveElement': {
          checkApply: (doc, command) => {
            let el = this.getNode(doc, command.sourceId);
            let target = this.getNode(doc, command.targetSourceId);
            this.check(el != null && target != null &&
                (command.position === commands.InsertPosition.before ||
                 command.position === commands.InsertPosition.after));
          },

          apply: (doc, command) => {
            let el = this.getNode(doc, command.sourceId);
            let target = this.getNode(doc, command.targetSourceId);

            var container = el.parentNode;
            var targetContainer = target.parentNode;

            var index = container.childNodes.indexOf(el);
            var targetIndex = targetContainer.childNodes.indexOf(el);

            // remove from old position
            container.childNodes.splice(index, 1);

            // add in new position
            if (targetContainer === container) {
              targetIndex--;
            }

            if (command.position === commands.InsertPosition.before) {
              targetContainer.childNodes.splice(targetIndex, 0, el);
            } else if (command.position === commands.InsertPosition.after) {
              targetContainer.childNodes.splice(targetIndex + 1, 0, el);
            }

          },

          checkUndo: (doc, command) => {
            this.check(false);
          },
        },

        'newElement': {
          checkApply(doc, command) {
            // throw new Error('not implemented');
            return true;
          },

          apply() {},
        },

        'removeElement': {
          checkApply(doc, command) {
            // throw new Error('not implemented');
            return true;
          },

          apply() {},
        },

      };
    }

    getNode(doc, id) {
      return dom5.query(doc, dom5.predicates.hasAttrValue(nodeIdProperty, id));
    }
  }

  // exports
  return ParsedHtmlCommandApplier;
});
