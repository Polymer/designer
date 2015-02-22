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
var http = require('http');
var path = require('path');
var parseUrl = require('url').parse;
var send = require('send');

function startServer() {
  console.log('Starting Polymer Designer Server on port 8080');
  var app = express();
  var server = http.createServer(app);
  // TODO: allow port to be set with flag, fallback to other ports
  var port = 8080;

  app.get('/', function (req, res) {
    res.send('<h1>Polymer Designer Server</h1>\n' +
      'Try the <a href="/component/designer2/elements/designer-playground/demo.html">' + 
      'Designer Playground</a>');
  });

  app.get('/component/*', function (req, res) {

    var url = parseUrl(req.url, true);

    var bowerFile = fs.readFileSync('bower.json');
    var bowerJson = JSON.parse(bowerFile);
    var bowerPackageName = bowerJson.name;
    var bowerComponentDir = 'bower_components';

    // Serve designer2 files from . and other components from bower_components
    var splitPath = url.pathname.split(path.sep).slice(2);
    splitPath = splitPath[0] == bowerPackageName
       ? splitPath.slice(1)
       : [bowerComponentDir].concat(splitPath);
    var filePath = splitPath.join(path.sep);

    // The designer-stage frame has a null origin, so we need to
    // allow cross-origin requests for imports to work
    res.append('Access-Control-Allow-Origin', '*');

    if (filePath == 'elements/designer-stage/frame.js') {
      res.send(buildFrameScript());
    } else {
      send(req, filePath).pipe(res);
    }
  });

  server = app.listen(port);
}

/**
 * Dynamically build the frame.js script so that we have edit-refresh
 * development.
 */
function buildFrameScript() {
  // files must be in dependency order
  var paths = [
    'elements/designer-stage/modulate.js',
    'src/path/path.js',
    'src/commands/commands.js',
    'src/commands/CommandApplier.js',
    'src/commands/DomCommandApplier.js',
    'elements/designer-stage/FrameManager.js',
  ];
  var files = paths.map(function(p) {
    return fs.readFileSync(p, {encoding: 'utf-8'})
  });

  var frameScript = '(function() {\n' +
    files.join('\n') + 
    'using(["FrameManager"], function(fm) {\n' +
    '  new fm.FrameManager().listen();\n' +
    '});\n' +
    '})();';
  return frameScript;
}

module.exports = {
  startServer: startServer
};
