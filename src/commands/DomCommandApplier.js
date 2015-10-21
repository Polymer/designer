/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/commands/DomCommandApplier', [
      'polymer-designer/commands/CommandApplier',
      'polymer-designer/dom-utils',
      'polymer-designer/commands'],
    function(CommandApplier, domUtils, commands) {

  'use strict';

  const nodeIdProperty = domUtils.sourceIdAttribute;

  /**
   * Applies commands to DOM Documents, including embedded and linked
   * stylesheets.
   */
  class DomCommandApplier extends CommandApplier {

    constructor(doc) {
      super(doc);
      this.handlers = {
        'setAttribute': {
          checkApply(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            this.check(node.getAttribute(command.attribute) === command.oldValue);
          },

          apply(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            node.setAttribute(command.attribute, command.newValue);
          },

          checkUndo(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            this.check(node.getAttribute(command.attribute) === command.newValue);
          },

          undo(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            node.setAttribute(command.attribute, command.oldValue);
          },
        },

        'setTextContent': {
          checkApply(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            if (!node) return false;
            var hasElementChildren = node.children === 0;
            if (hasElementChildren) {
              console.warn(
                  'Not applying', command,
                  'because target node', node, 'has element children');
            }
            this.check(!hasElementChildren);
          },

          apply(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            node.textContent = command.newValue;
          },

          checkUndo(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            this.check(node.textContent === command.newValue);
          },

          undo(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            node.textContent = command.oldValue;
          },
        },

        'setTagName': {
          checkApply(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            this.check(node &&
                node.tagName.toLowerCase() === command.oldValue.toLowerCase());
          },

          apply(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            domUtils.renameNode(node, command.newValue);
          },

          checkUndo(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            this.check(node &&
                node.tagName.toLowerCase() === command.newValue.toLowerCase());
          },

          undo(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            domUtils.renameNode(node, command.oldValue);
          },
        },

        'moveElement': {
          checkApply(doc, command) {
            let el = this.getNode(doc, command.sourceId);
            let target = this.getNode(doc, command.targetSourceId);
            this.check(el != null && target != null &&
                (command.position == commands.InsertPosition.before ||
                 command.position == commands.InsertPosition.after));
          },

          apply(doc, command) {
            let el = this.getNode(doc, command.sourceId);
            let target = this.getNode(doc, command.targetSourceId);
            var container = target.parentNode;
            if (command.position == commands.InsertPosition.before) {
              container.insertBefore(el, target);
            } else if (command.position == commands.InsertPosition.after) {
              target = target.nextSibling;
              container.insertBefore(el, target);
            }
          },

          checkUndo(doc, command) {
            this.check(false);
          },
        },

        'newElement': {
          checkApply(doc, command) {
            // check that target exists
            this.check(this.getNode(doc, command.targetSourceId) != null);
          },

          apply(doc, command) {
            let el = doc.createElement(command.tagName);
            el.setAttribute('style', command.initialStyle);
            el.setAttribute(nodeIdProperty, command.sourceId);
            el.innerHTML = command.initialContent;
            let target = this.getNode(doc, command.targetSourceId);
            if (command.insertPosition === 'into') {
              target.appendChild(el);
            } else {
              var container = target.parentNode;
              if (command.position == commands.InsertPosition.before) {
                container.insertBefore(el, target);
              } else if (command.position == commands.InsertPosition.after) {
                target = target.nextSibling;
                container.insertBefore(el, target);
              }
            }
          },
        },

        'removeElement': {
          checkApply(doc, command) {
            this.check(this.getNode(doc, command.sourceId) != null);
          },

          apply(doc, command) {
            let node = this.getNode(doc, command.sourceId);
            node.remove();
          },
        },

      };
    }

    getNode(doc, sourceId) {
      return doc.querySelector(`[${nodeIdProperty}="${sourceId}"]`);
    }
  }

  // exports
  return DomCommandApplier;
});
