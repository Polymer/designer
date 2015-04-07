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

var app = express();

app.get('*', function(req, res, next) {

  var url = parseUrl(req.path);
  var dir = decodeURIComponent(url.pathname);
  var filePath = path.normalize(path.join(__dirname, '../../demo', dir));

  fs.stat(filePath, function(err, stat) {
    if (err) {
      if (err.code === 'ENOENT') {
        return next();
      }
      err.status = 500;
      return next(err);
    }

    res.append('Access-Control-Allow-Origin', '*');
    
    if (stat.isDirectory()) {
      fs.readdir(filePath, function(err, files) {
        if (err) {
          return next(err);
        }
        var stats = files.map(function(f) {
          // oh, for Promises. sync instead
          var stat = fs.statSync(path.join(filePath, f));
          return {
            'path': f,
            'isDirectory': stat.isDirectory(),
          };
        });
        res.send(stats);
      });
    } else {
      send(req, filePath).pipe(res);
    }

  });

});

module.exports = app;
