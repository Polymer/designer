/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

modulate('ParsedHtmlCommandApplier',
    ['CommandApplier', 'Path', 'parse5_utils', 'Commands'],
    function(CommandApplier, pathLib, parse5_utils, commands) {

  var getNodeFromPath = pathLib.getNodeFromPath;

  var commandHandlers = {
    'setAttribute': {
      canApply: function(doc, command) {
        var node = getNodeFromPath(command.path, doc);
        return parse5_utils.getAttribute(node, command.attribute) == command.oldValue;
      },

      apply: function(doc, command) {
        var node = getNodeFromPath(command.path, doc);
        parse5_utils.setAttribute(node, command.attribute, command.newValue);
      },

      canUndo: function(doc, command) {
        var node = getNodeFromPath(command.path, doc);
        return parse5_utils.getAttribute(node, command.attribute) == command.newValue;
      },

      undo: function(doc, command) {
        var node = getNodeFromPath(command.path, doc);
        parse5_utils.setAttribute(node, command.attribute, command.oldValue);
      },
    },

    'moveElement': {
      canApply: function(doc, command) {
        var el = pathLib.getNodeFromPath(command.path, doc);
        var target = pathLib.getNodeFromPath(command.targetPath, doc);
        return el != null && target != null &&
            (command.position === commands.InsertPosition.before ||
             command.position === commands.InsertPosition.after);
      },

      apply: function(doc, command) {
        var el = pathLib.getNodeFromPath(command.path, doc);
        var target = pathLib.getNodeFromPath(command.targetPath, doc);

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
