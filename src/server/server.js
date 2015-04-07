/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

var express = require('express');
var path = require('path');
var send = require('send');

function startServer() {
  console.log('Starting Polymer Designer Server on port 8080');
  var app = express();
  // TODO: allow port to be set with flag, fallback to other ports
  var port = 8080;

  app.get('/', function(req, res) {
    send(req, path.join(__dirname, 'index.html')).pipe(res);
  });

  app.use('/api', require('./api'));

  app.use('/components', require('./components'));

  app.use('/files', require('./files'));

  server = app.listen(port);
}

module.exports = {
  startServer: startServer
};
