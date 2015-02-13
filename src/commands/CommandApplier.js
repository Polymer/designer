/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

modulate('CommandApplier', function() {

  /**
   * Applies commands to documents, including embedded and linked
   * stylesheets.
   * 
   * @abstract
   */
  function CommandApplier(doc) {
    this.doc = doc;      
  }

  CommandApplier.prototype = {

    apply: function(command) {
      var handler = this.handlers[command.commandType];
      if (handler.canApply(this.doc, command)) {
        handler.apply(this.doc, command);
      } else {
        throw new Error("Can't apply command " + command);
      }
    },

    undo: function(command) {
      var handler = this.handlers[command.commandType];
      if (handler.canUndo(this.doc, command)) {
        handler.undo(this.doc, command);
      } else {
        throw new Error("Can't undo command " + command);
      }
    },

  };

  // exports
  return {
    CommandApplier: CommandApplier,
  };

});
