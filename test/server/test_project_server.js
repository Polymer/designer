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
let http = require('http');
let path = require('path');
let project = require('../../src/server/project');

let demoDir = path.normalize(path.join(__dirname, '../../demo'));

project.makeProjectServer(demoDir, 8888)
  .then((server) => {
    let port = server.address().port;
    console.log('server started on port', port);
    console.log('serving', demoDir);
  });
