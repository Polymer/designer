/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

'use strict';

let api = require('./api');
let components = require('./components');
let express = require('express');
let path = require('path');
let send = require('send');

function startServer(serverPort, filesPort) {
  let app = express();
  serverPort = parseInt(serverPort || 8080, 10);

  console.log(`Starting Polymer Designer Server on port ${serverPort}`);

  app.get('/', (req, res) => {
    send(req, path.join(__dirname, 'index.html')).pipe(res);
  });

  app.use('/api', api.makeApiApp());

  app.use('/components', components);

  app.listen(serverPort);
}

module.exports = {
  startServer,
};
