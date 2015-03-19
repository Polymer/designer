/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

define('polymer-designer/protocol/ClientConnection',
    ['polymer-designer/async', 'polymer-designer/protocol/request'],
    function(async, Request) {
  'use strict';

  class ClientConnection {

    /**
     * @param {EventTarget} target The object to listen for message events on.
     * @param {Window} otherWindow The window to postMessage to, which should
     *     host a PostMessageServerConnection.
     */
    constructor(target, otherWindow) {
      this.target = target;
      this.otherWindow = otherWindow;
      this._token = this._generateToken();
      this._requestId = 0;
      this._pendingRequests = new Map();
      this._handlers = new Map();

      /**
       * @type {Promise} A Promise that resolves when the connection is ready to
       * be used.
       */
      this.ready = new Promise(function(resolve, reject) {
        var handshakeListener = function(event) {
          if (event.source !== this.otherWindow ||
              event.data == null ||
              event.data.messageType != 'handshakeReply') {
            reject(new Error('Illegal message received during handshake'));
          }
          this.target.removeEventListener('message', handshakeListener);
          this._messageHandler = this._onMessage.bind(this);
          this.target.addEventListener('message', this._messageHandler);
          resolve();
        }.bind(this);
        this.target.addEventListener('message', handshakeListener);

        this.send({
          messageType: 'handshake',
          token: this._token,
        });

      }.bind(this));
    }

    disconnect() {
      this.target.removeEventListener('message', this._messageHandler);
    }

    _onMessage(event) {
      var id = event.data.id;
      var message = event.data.message;

      if (event.data.token !== this._token) {
        throw new Error('Invalid token');
      }

      if (id != null) {
        // reply
        var isError = event.data.replyType === 'error';
        var deferred = this._pendingRequests.get(id);
        if (deferred === null) {
          throw new Error('Invalid request id: ' + id);
        }

        this._pendingRequests.delete(id);
        if (isError === true) {
          deferred.reject(message);
        } else {
          deferred.resolve(message);
        }
        // TODO: timeout requests?
      } else {
        // notification
        var message = event.data.message;
        var handler = this._handlers.get(message.messageType);
        if (handler == null) {
          console.error('ClientConnection: No handler for message type: ' +
              message.messageType);
        }
        handler(new Request(this, id, message));
      }
    }

    /**
     * Adds a message handler for the specified message type. There can only be
     * one handler for a given message type. The last added handler removes any
     * previously added handlers.
     *
     * @param {string} messageType
     * @param {function(Request)} handler
     */
    on(messageType, handler) {
      if (_handlers.has(messageType)) {
        console.warn('ClientConnection: existing handler for message type ' +
            messageType);
      }
      this._handlers.set(messageType, handler);
    }

    /**
     * Sends a message to the server, and does not listen for a reply.
     *
     * @param {Object} message
     */
    send(message) {
      console.assert(this._token != null);
      this.otherWindow.postMessage({
        token: this._token,
        message: message}, '*');
    }

    /**
     * Sends a message to the server, and listens for a reply.
     *
     * @returns {Promise} A Promise that resolves when a reply is sent from
     *     the server.
     */
    request(message) {
      console.assert(this._token != null);
      this._requestId = (this._requestId + 1) % Number.MAX_SAFE_INTEGER;
      var deferred = new async.Deferred();
      this._pendingRequests.set(this._requestId, deferred);
      this.otherWindow.postMessage({
        token: this._token,
        id: this._requestId,
        message: message}, '*');
      return deferred.promise;
    }

    _generateToken() {
      var alphabet =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var token = '';
      for (var i = 0; i < 16; i++) {
        token += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
      return token;
    }

  }

  return ClientConnection;

});
