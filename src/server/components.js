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

var bowerComponentDir = 'bower_components';
var componentHeaders = {
  'Access-Control-Allow-Origin': '*'
}
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
  // files must be in dependency order
  var paths = [
    'bower_components/imd/imd.js',
    'src/dom-utils/dom-utils.js',
    'src/path/path.js',
    'src/css/css.js',
    'src/commands/commands.js',
    'src/commands/CommandApplier.js',
    'src/commands/DomCommandApplier.js',
    'src/protocol/Request.js',
    'src/async/async.js',
    'src/text/PositionWalker.js',
    'src/text/CursorManager.js',
    'src/protocol/ServerConnection.js',
    'src/protocol/DocumentServer.js',
  ];
  var files = paths.map(function(p) {
    return fs.readFileSync(p, {encoding: 'utf-8'})
  });

  var frameScript = '(function() {\n' +
    files.join('\n') +
    'define(["polymer-designer/protocol/ServerConnection", "polymer-designer/protocol/DocumentServer"], function(ServerConnection, DocumentServer) {\n' +
    '  "use strict";\n' +
    '  window.Polymer = { dom: "shadow" };\n' +
    '  var connection = new ServerConnection(window);\n' +
    '  new DocumentServer(connection);\n' +
    '});\n' +
    '})();';
  return frameScript;
}

module.exports = app;
