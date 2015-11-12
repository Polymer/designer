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

let contentType = require('content-type');
let dom5 = require('dom5');
let express = require('express');
let frameScript = require('../../tools/frame-script');
let fs = require('fs');
let http = require('http');
var interceptor = require('express-interceptor');
let parse5 = require('parse5');
let polyserve = require('polyserve');


/**
 * Dynamically build the frame.js script so that we have edit-refresh
 * development.
 */
function buildFrameScript() {
  var files = frameScript.dependencies.map(
      (p) => fs.readFileSync(p, {encoding: 'utf-8'}));
  return frameScript.buildFrameScript(files);
}

let frameScriptInterceptor = interceptor((req, res) => ({

  isInterceptable() {
    let contentTypeHeader = res.get('Content-Type');
    let injectFrameScript = req.query['inject_frame_script'];
    return !!injectFrameScript &&
        (contentTypeHeader)
            ? contentType.parse(contentTypeHeader).type === 'text/html'
            : false;
  },

  intercept(body, send) {
    let parser = new parse5.Parser();
    let serializer = new parse5.Serializer();

    let doc = parser.parse(body);

    // assign sequential IDs to all elements in the document
    let nextSourceId = 1;
    dom5.query(doc, (node) => {
      dom5.setAttribute(node, '__designer_node_id__', `${nextSourceId++}`);
    });

    let fs = buildFrameScript();
    let scriptTag = dom5.constructors.element('script');
    dom5.setAttribute(scriptTag, 'designer-exclude', '');

    dom5.setTextContent(scriptTag, fs);
    let head = dom5.query(doc, dom5.predicates.hasTagName('head'));
    if (head) {
      // inject into <head>
      if (head.childNodes) {
        let firstChild = head.childNodes[0];
        dom5.insertBefore(head, firstChild, scriptTag);
      } else {
        dom5.append(head, scriptTag);
      }
    } else {
      // add to top of doc, below doctype
      let firstNonDoctype = dom5.nodeWalk(doc,
          (n) => n.nodeName !== '#documentType');
      dom5.insertBefore(doc, firstNonDoctype, scriptTag);
    }

    let text = serializer.serialize(doc);
    send(text);
  },

}));

/**
 * Creates an Express app to handle Designer's server API.
 *
 * @return {Promise<http.Server>}
 */
function makeProjectServer(projectDirectory) {

  return new Promise((resolve, reject) => {
    let app = express();

    app.use(frameScriptInterceptor);

    app.use('/files', polyserve.makeApp({
      componentDir: 'bower_components',
      root: projectDirectory,
      packageName: '__project__',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }));

    let fileServer = http.createServer(app);

    fileServer.listen(0, () => resolve(fileServer));
  });
}

module.exports = {
  makeProjectServer,
};
