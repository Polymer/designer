/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/protocol/ServerConnection',
    ['polymer-designer/async', 'polymer-designer/protocol/request'],
    (async, Request) => {
  'use strict';

  class ServerConnection {

    /**
     * @param {EventTarget} target The object to listen for message events on.
     */
    constructor(target) {
      this.target = target;
      this.otherWindow = null;
      this._token = null;
      this._handlers = new Map();

      /**
       * @type {Promise} A Promise that resolves when the connection is ready to
       * be used.
       */
      this.ready = new Promise((resolve, reject) => {

        var handshakeListener = (event) => {
          if (event.data == null ||
              event.data.message == null ||
              event.data.message.messageType !== 'handshake') {
            reject(new Error('Invalid message before handshake complete'));
          } else {
            this.otherWindow = event.source;
            this._token = event.data.token;
            this.target.removeEventListener('message', handshakeListener);
            this.target.addEventListener('message', this._onMessage.bind(this));
            this.otherWindow.postMessage({messageType: 'handshakeReply'}, '*');
            resolve();
          }
        };

        this.target.addEventListener('message', handshakeListener);

      });
    }

    _onMessage(event) {
      var id = event.data.id;
      var message = event.data.message;
      var handler = this._handlers.get(message.messageType);

      if (handler == null) {
        console.error('No handler for message type: ' +
            message.messageType, message);
      } else {
        handler(new Request(this, id, message));
      }
    }

    /**
     * @param {string} messageTYpe
     * @param {Function} handler
     */
    on(messageType, handler) {
      this._handlers.set(messageType, handler);
    }

    send(message) {
      console.assert(this._token != null);
      this.otherWindow.postMessage({
        token: this._token,
        message: message}, '*');
    }

    reply(request, message) {
      console.assert(this._token != null);
      this.otherWindow.postMessage({
        token: this._token,
        id: request.id,
        message: message}, '*');
    }

  }

  return ServerConnection;

});
