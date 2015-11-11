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

let bower = require('../bower/bower.js');
let express = require('express');
let files = require('./files');
let http = require('http');
// let http = require('q-io/http');
let path = require('path');

let demoDir = path.normalize(path.join(__dirname, '../../demo'));

/**
 * Creates an Express app to handle Designer's server API.
 */
function makeApiApp() {
  let app = express();

  app.post('/bowerInstall', (req, res) => {
    console.log('starting bower install');
    bower.install();
    console.log('bower install done');
    res.send('OK');
  });

  app.put('/openProject', (req, res) => {

    // create new file and ls server
    let projectDirectory = req.query.path;
    let fullPath = path.join(demoDir, projectDirectory);

    let filesApp = files.makeFileServingApp(fullPath);
    let fileServer = http.createServer(filesApp);

    let portDeferred = new Deferred();
    fileServer.listen(0, () => portDeferred.resolve(fileServer.address().port));

    portDeferred.promise.then((port) => {
      res.type('json');
      res.send({
        port,
        directory: projectDirectory,
      });
    });
  });

  // "global" (within ./demo/) listing service to choose project directory
  app.use('/files', files.makeFileListingApp(demoDir));

  return app;
}

// TODO(justinfagnani): repent for this act of copy and paste! Either 1) make
// async a CJS module and browserify, or 2) Bite the bullet and start using
// ES6 modules via Babel.
class Deferred {

  constructor () {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

}

module.exports = {
  makeApiApp,
};
