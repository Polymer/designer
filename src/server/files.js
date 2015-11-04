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

var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var parseUrl = require('url').parse;
// var polyserve = require('polyserve');
var send = require('send');

// var filesDir = path.normalize(path.join(__dirname, '../../demo'));
// var bowerDir = 'bower_components';
// var packageName = 'polymer-designer-demos';
// var componentDir = path.join(filesDir, bowerDir);

// match /packageName or /packageName/.*
// var packageRegex = new RegExp('/' + packageName + '(?=$|/(.*))');

function makeFilesApp(filesDir) {

  let app = express();

  // var componentHeaders = {
  //   'Access-Control-Allow-Origin': '*',
  // };

  // app.use('/files', polyserve.makeApp(bowerDir, null, componentHeaders, './demo'));

  app.get('/*', (req, res) => {

    let url = parseUrl(req.path);
    let requestedPath = decodeURIComponent(url.pathname.substring(1));
    let filePath = path.join(filesDir, requestedPath);

    fs.lstat(filePath, (err, stat) => {
      if (err) {
        let code = (err.code === 'ENOENT') ? 404 : 500;
        res.status(code).end();
        return;
      }

      let statJson = statToJson(requestedPath, stat);

      if (stat.isDirectory()) {
        let files = fs.readdirSync(filePath);
        statJson.files = files.map((f) => {
          let childPath = path.join(filePath, f);
          let requestedChildPath = path.join(requestedPath, f);
          return statToJson(requestedChildPath, fs.lstatSync(childPath));
        });
        // // add the root package to the top level
        // if (requestedPath === '/') {
        //   var f = 'polymer-designer-demos';
        //   var childPath = path.join(filePath, f);
        //   var requestedChildPath = path.join(requestedPath, f);
        //   statJson.files.push(
        //       statToJson(requestedChildPath, fs.lstatSync(filesDir)));
        // }
      }
      res.type('json');
      // res.append('Access-Control-Allow-Origin', '*');
      res.send(statJson);
    });

  });

  return app;
}

function statToJson(path, stat) {
  return {
    path: path,
    isDirectory: stat.isDirectory(),
    isFile: stat.isFile(),
    isLink: stat.isSymbolicLink(),
  };
}

module.exports = {
  makeFilesApp: makeFilesApp,
};
