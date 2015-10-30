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
var files = require('./files');
var api = require('./api');
var components = require('./components');

function startServer(serverPort, filesPort) {
  var app = express();
  var designerConfig;

  serverPort = parseInt(serverPort || 8080, 10);
  filesPort = parseInt(filesPort || (serverPort + 1), 10);

  designerConfig = {
    server: {
      port: serverPort
    },
    files: {
      port: filesPort
    }
  };

  console.log('Starting Polymer Designer Server on port ' + designerConfig.server.port);
  console.log('Serving files on port ' + designerConfig.files.port);

  app.get('/', (req, res) => {
    send(req, path.join(__dirname, 'index.html')).pipe(res);
  });

  app.use('/api', api(designerConfig));

  app.use('/components', components);

  var server = app.listen(designerConfig.server.port);
  files.app.listen(designerConfig.files.port);
}

module.exports = {
  startServer: startServer
};
