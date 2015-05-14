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
      'polymer-designer/path',
      'dom5',
      'polymer-designer/commands'],
    function(CommandApplier, pathLib, dom5, commands) {

  'use strict';

  // TODO(justinfagnani): move to common location
  const nodeIdProperty = '__designer_node_id__';

  // var getNodeFromPath = pathLib.getNodeFromPath;
  function getNode(doc, id) {
    return dom5.query(doc, dom5.predicates.hasAttrValue(nodeIdProperty, id));
  }

  var commandHandlers = {
    'setAttribute': {
      canApply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return dom5.getAttribute(node, command.attribute) == command.oldValue;
      },

      apply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        dom5.setAttribute(node, command.attribute, command.newValue);
      },

      canUndo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return dom5.getAttribute(node, command.attribute) == command.newValue;
      },

      undo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        dom5.setAttribute(node, command.attribute, command.oldValue);
      },
    },

    'setTextContent': {
      canApply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        // Don't apply if there are element children.
        return !node.childNodes.some(function(child) {
          return child.nodeName !== '#text';
        });
      },

      apply: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        dom5.setTextContent(node, command.newValue);
      },

      canUndo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        return dom5.getTextContent(node) === command.newValue;
      },

      undo: function(doc, command) {
        let node = getNode(doc, command.sourceId);
        dom5.setTextContent(node, command.oldValue);
      },
    },

    'moveElement': {
      canApply: function(doc, command) {
        let el = getNode(doc, command.sourceId);
        let target = getNode(doc, command.targetSourceId);
        return el != null && target != null &&
            (command.position === commands.InsertPosition.before ||
             command.position === commands.InsertPosition.after);
      },

      apply: function(doc, command) {
        let el = getNode(doc, command.sourceId);
        let target = getNode(doc, command.targetSourceId);

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

      canUndo: function(doc, command) {
        return false;
      },
    },
  };

  /**
   * Applies commands to DOM Documents, including embedded and linked
   * stylesheets.
   */
  function ParsedHtmlCommandApplier(doc) {
    CommandApplier.call(this, doc);
  }
  ParsedHtmlCommandApplier.prototype = Object.create(CommandApplier.prototype);
  ParsedHtmlCommandApplier.prototype.constructor = ParsedHtmlCommandApplier;

  ParsedHtmlCommandApplier.prototype.handlers = commandHandlers;

  // exports
  return ParsedHtmlCommandApplier;
});
