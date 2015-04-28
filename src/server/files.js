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
var polyserve = require('polyserve');
var send = require('send');

var filesDir = path.normalize(path.join(__dirname, '../../demo'));
var bowerDir = 'bower_components';
var packageName = 'polymer-designer-demos';
var componentDir = path.join(filesDir, bowerDir);

// match /packageName or /packageName/.*
var packageRegex = new RegExp('/' + packageName + '(?=$|/(.*))');

var app = express();

var componentHeaders = {
  'Access-Control-Allow-Origin': '*'
}
app.use('/files', polyserve.makeApp(bowerDir, null, componentHeaders, './demo'));

app.get('/ls/*', function(req, res) {

  var url = parseUrl(req.path);
  var requestedPath = path.normalize(
      decodeURIComponent(url.pathname.substring(3)));
  var packageMatch = requestedPath.match(packageRegex);
  var filePath;

  if (packageMatch !== null) {
    if (packageMatch[1]) {
      filePath = path.join(filesDir, packageMatch[1]);
    } else {
      filePath = filesDir;
    }
  } else {
    filePath = path.join(bowerDir, requestedPath);
  }

  fs.lstat(filePath, function(err, stat) {
    if (err) {
      var code = (err.code === 'ENOENT') ? 404 : 500;
      res.status(code).end();
      return;
    }

    var statJson = statToJson(requestedPath, stat);

    if (stat.isDirectory()) {
      var files = fs.readdirSync(filePath);
      statJson.files = files.map(function(f) {
        return statToJson(f, fs.lstatSync(path.join(filePath, f)));
      });
      // add the root package to the top level
      if (requestedPath === '/') {
        statJson.files.push(
            statToJson(
              'polymer-designer-demos',
              fs.lstatSync(filesDir)));
      }
    }
    res.type('json');
    res.append('Access-Control-Allow-Origin', '*');
    res.send(statJson);
  });

});

function statToJson(path, stat) {
  return {
    path: path,
    isDirectory: stat.isDirectory(),
    isFile: stat.isFile(),
    isLink: stat.isSymbolicLink(),
  };
}

module.exports = {
  app: app,
};
