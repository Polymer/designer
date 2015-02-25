/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

var bower = require('bower');
var bowerInstall = require('bower/lib/commands/install');
// var common = require('./common');
var Logger = require('bower-logger');
var StandardRenderer = require('bower/lib/renderers/StandardRenderer');

var levels = Logger.LEVELS;

function install() {
  // common.ensureDataDir();
  var logger = new Logger();
  var renderer = new StandardRenderer('install', {color: true});

  logger
      .on('end', function (data) {
        renderer.end(data);
      })
      .on('error', function (err)  {
        renderer.error(err);
        // process.exit(1);
      })
      .on('log', function (log) {
        if (levels[log.level] >= levels.info) {
          renderer.log(log);
        }
      })
      .on('prompt', function (prompt, callback) {
        renderer.prompt(prompt)
        .then(function (answer) {
          callback(answer);
        });
      });

  bowerInstall(logger, [], {}, {});
}

module.exports = {
  install: install
}
