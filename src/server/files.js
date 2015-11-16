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
let fs = require('fs');
let http = require('http');
let path = require('path');
let parseUrl = require('url').parse;
let polyserve = require('polyserve');

/**
 * Simple file listing service.
 *
 * @param {string} filesDir The root directory to list files from
 */
function makeFileListingApp(filesDir) {

  let app = express();

  app.get('/*', (req, res) => {

    let url = parseUrl(req.path);
    let requestedPath = decodeURIComponent(url.pathname);
    let filePath = path.join(filesDir, requestedPath);

    fs.lstat(filePath, (err, stat) => {
      if (err) {
        let code = (err.code === 'ENOENT') ? 404 : 500;
        res.status(code).end();
        return;
      }

      let statJson = statToJson(requestedPath, stat);

      if (stat.isDirectory()) {
        statJson.files = fs.readdirSync(filePath)
          .filter((f) => !f.startsWith('.') && f !== 'bower_components')
          .map((f) => {
            let childPath = path.join(filePath, f);
            let requestedChildPath = path.join(requestedPath, f);
            return statToJson(requestedChildPath, fs.lstatSync(childPath));
          });
      }
      res.type('json');
      res.send(statJson);
    });

  });

  return app;
}

function statToJson(path, stat) {
  // ensure that all directory paths have a trailing /
  // URLs with and without trailing / are different resources
  // and causes relative paths to be resolved differently
  if (stat.isDirectory() && !path.endsWith('/')) {
    path = path + '/';
  }
  return {
    path: path,
    isDirectory: stat.isDirectory(),
    isFile: stat.isFile(),
    isLink: stat.isSymbolicLink(),
  };
};

module.exports = {
  makeFileListingApp,
};
