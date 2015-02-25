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
    ['CommandApplier', 'Path', 'parse5_utils'],
    function(CommandApplier, pathLib, parse5_utils) {

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
