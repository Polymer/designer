/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/commands/CommandApplier', () => {
  'use strict';

  /**
   * Applies commands to documents, including embedded and linked
   * stylesheets.
   *
   * @abstract
   */
  class CommandApplier {

    /**
     * @param {Document} doc
     */
    constructor(doc) {
      this.doc = doc;
    }

    apply(command) {
      var handler = this._getHandler(command);
      handler.checkApply.call(this, this.doc, command);
      handler.apply.call(this, this.doc, command);
    }

    undo(command) {
      var handler = getHandler(command);
      handler.checkUndo.call(this, this.doc, command);
      handler.undo.call(this, this.doc, command);
    }

    _getHandler(command) {
      let handler = this.handlers[command.commandType];
      if (handler == null) {
        throw new Error('Unknown command type:', command.commandType);
      }
      return handler;
    }

    check(pass, reason, command) {
      if (!pass) {
        throw new Error(`Can't apply command`, reason, command);
      }
    }
  }

  // exports
  return CommandApplier;

});
