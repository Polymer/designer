/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('Request', function() {
  'use strict';

  class Request {

    constructor(connection, id, message) {
      this._connection = connection;
      this.id = id;
      this.message = message;
    }

    reply(message) {
      this._connection.reply(this, message);
    }

    replyError(message) {
      this._connection.replyError(this, message);
    }
  }

  return Request;

});
