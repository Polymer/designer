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
var fs = require('fs');
var path = require('path');
var polyserve = require('polyserve');
var send = require('send');
var frameScript = require('../../tools/frame-script');

var bowerComponentDir = 'bower_components';
var componentHeaders = {
  'Access-Control-Allow-Origin': '*'
};
var app = express();

// dynamically build frame.js for edit-refresh goodness
app.get('/polymer-designer/elements/designer-document/frame.js',
  function (req, res) {
    res.send(buildFrameScript());
  }
);

app.use('/', polyserve.makeApp(bowerComponentDir, null, componentHeaders));

/**
 * Dynamically build the frame.js script so that we have edit-refresh
 * development.
 */
function buildFrameScript() {
  var files = frameScript.dependencies.map(function(p) {
    return fs.readFileSync(p, {encoding: 'utf-8'});
  });
  return frameScript.buildFrameScript(files);
}

module.exports = app;
