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
let path = require('path');

/**
 * Creates an Express app to handle Designer's server API.
 */
function makeApiApp(designerConfig) {
  let app = express();

  app.post('/bowerInstall', (req, res) => {
    console.log('starting bower install');
    bower.install();
    console.log('bower install done');
    res.send('OK');
  });

  let demoDir = path.normalize(path.join(__dirname, '../../demo'));

  app.use('/files', files.makeFileListingApp(demoDir));

  return app;
}

module.exports = makeApiApp;
