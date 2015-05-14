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
      'polymer-designer/path',
      'polymer-designer/commands'],
    function(CommandApplier, domUtils, pathLib, commands) {

  'use strict';

  // TODO(justinfagnani): move to common location
  const nodeIdProperty = '__designer_node_id__';

  function getNode(doc, sourceId) {
    return doc.querySelector(`[${nodeIdProperty}="${sourceId}"]`);
  }

  var commandHandlers = {
    'setAttribute': {
      canApply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return node.getAttribute(command.attribute) === command.oldValue;
      },

      apply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        node.setAttribute(command.attribute, command.newValue);
      },

      canUndo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return node.getAttribute(command.attribute) === command.newValue;
      },

      undo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        node.setAttribute(command.attribute, command.oldValue);
      },
    },

    'setTextContent': {
      canApply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        if (!node) return false;
        var hasElementChildren = node.children === 0;
        if (hasElementChildren) {
          console.warn(
              'Not applying', command,
              'because target node', node, 'has element children');
        }
        return !hasElementChildren;
      },

      apply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        node.textContent = command.newValue;
      },

      canUndo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return node.textContent === command.newValue;
      },

      undo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        node.textContent = command.oldValue;
      },
    },

    'moveElement': {
      canApply: function(doc, command) {
        let el = getNode(doc, command.sourceId);
        let target = getNode(doc, command.targetSourceId);
        // var target = pathLib.getNodeFromPath(command.targetPath, doc);
        return el != null && target != null &&
            (command.position == commands.InsertPosition.before ||
             command.position == commands.InsertPosition.after);
      },

      apply: function(doc, command) {
        let el = getNode(doc, command.sourceId);
        let target = getNode(doc, command.targetSourceId);
        var container = target.parentNode;
        if (command.position == commands.InsertPosition.before) {
          container.insertBefore(el, target);
        } else if (command.position == commands.InsertPosition.after) {
          target = target.nextSibling;
          container.insertBefore(el, target);
        }
      },

      canUndo: function(doc, command) {
        return false;
      },
    },
  };

  /**
   * Applies commands to DOM Documents, including embedded and linked
   * stylesheets.
   */
  function DomCommandApplier(doc) {
    CommandApplier.call(this, doc);
    this.handlers = commandHandlers;
  }
  DomCommandApplier.prototype = Object.create(CommandApplier.prototype);
  DomCommandApplier.prototype.constructor = DomCommandApplier;

  // exports
  return DomCommandApplier;
});
