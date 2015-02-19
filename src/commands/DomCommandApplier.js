/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

modulate('DomCommandApplier', ['CommandApplier', 'Path'],
    function(CommandApplier, pathLib) {

  var getNodeFromPath = pathLib.getNodeFromPath;

  var commandHandlers = {
    'setAttribute': {
      canApply: function(doc, command) {
        var node = getNodeFromPath(command.path, doc);
        return node.getAttribute(command.attribute) === command.oldValue;
      },

      apply: function(doc, command) {
        var node = getNodeFromPath(command.path, doc);
        node.setAttribute(command.attribute, command.newValue);
      },

      canUndo: function(doc, command) {
        var node = getNodeFromPath(command.path, doc);
        return node.getAttribute(command.attribute) === command.newValue;
      },

      undo: function(doc, command) {
        var node = getNodeFromPath(command.path, doc);
        node.setAttribute(command.attribute, command.oldValue);
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
