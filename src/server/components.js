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

let express = require('express');
let frameScript = require('../../tools/frame-script');
let fs = require('fs');
let path = require('path');
let polyserve = require('polyserve');
let send = require('send');

let bowerComponentDir = 'bower_components';
let componentHeaders = {
  'Access-Control-Allow-Origin': '*'
};

let app = express();

// dynamically build frame.js for edit-refresh goodness
app.get('/polymer-designer/elements/designer-document/frame.js',
  function (req, res) {
    res.send(buildFrameScript());
  }
);

app.use('/', polyserve.makeApp({
  componentDir: bowerComponentDir,
  componentHeaders: componentHeaders,
  root: process.cwd(),
}));

/**
 * Dynamically build the frame.js script so that we have edit-refresh
 * development.
 */
function buildFrameScript() {
  var files = frameScript.dependencies.map(
      (p) => fs.readFileSync(p, {encoding: 'utf-8'}));
  return frameScript.buildFrameScript(files);
}

module.exports = app;
