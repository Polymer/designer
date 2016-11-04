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

// assign sequential IDs to all elements in the document
function addSourceIds(sourceDocument, templateId) {
  let nextSourceId = 1;
  dom5.query(sourceDocument, (node) => {
    // if (!dom5.getAttribute(node, 'designer-exclude')) {
      dom5.setAttribute(node, '__designer_node_id__', `${nextSourceId++}`);
    // }
  });
}

function injectFrameScript(sourceDocument) {
  let fs = buildFrameScript();
  let scriptTag = dom5.constructors.element('script');
  dom5.setAttribute(scriptTag, 'designer-exclude', '');

  dom5.setTextContent(scriptTag, fs);
  let head = dom5.query(sourceDocument, dom5.predicates.hasTagName('head'));
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
    dom5.insertBefore(sourceDocument, firstNonDoctype, scriptTag);
  }
}

function generateTemplateDocument(sourceDocument, templateSourceId) {
  if (templateSourceId == null) {
    return;
  }

  let template = dom5.query(sourceDocument,
      dom5.predicates.hasAttrValue('__designer_node_id__', templateSourceId));
  // TODO(justinfagnani): need to check that template is not nested, and do more
  // interesting things if it's not

  if (template) {
    // templates should always have one child - their content fragment
    let content = template.childNodes[0];
    let contentClone = dom5.cloneNode(content);

    // mark cloned nodes as editable. other nodes won't be
    let templateNodes = [];
    dom5.nodeWalkAll(sourceDocument, (node) => {
      if (dom5.isElement(node)) {
        dom5.setAttribute(node, 'designer-exclude', '');
      }
    });

    // this empties the document fragment
    dom5.insertBefore(template.parentNode, template, contentClone);
  }
  return sourceDocument;
}

let frameScriptInterceptor = interceptor((req, res) => {

  let contentTypeHeader = res.get('Content-Type');
  let injectFrameScriptParam = req.query['inject_frame_script'];
  let editTemplateParam = req.query['edit_template'];
  let addSourceIdsParam = req.query['add_source_ids'];

  let doEditTemplate = editTemplateParam != null;
  let doInjectFrameScript = (injectFrameScriptParam != null) || doEditTemplate;
  let doAddSourceIds = (addSourceIdsParam != null) || doInjectFrameScript;


  return {
    isInterceptable() {
      let isHtml = req.path.endsWith('.html');
      let mimeType = contentTypeHeader && contentType.parse(contentTypeHeader).type;
      let intercept = doAddSourceIds || doInjectFrameScript && isHtml;
      return intercept;
    },

    intercept(body, send) {
      // Create the source document. We need this even if we generate a synthetic
      // document
      let document = parse5.parse(body);
      if (doAddSourceIds) {
        addSourceIds(document, editTemplateParam);
      }

      if (doEditTemplate) {
        document = generateTemplateDocument(document, editTemplateParam);
      }

      if (doInjectFrameScript) {
        injectFrameScript(document);
      }

      let text = parse5.serialize(document);
      send(text);
    },
  }
});

/**
 * Creates an Express app to handle Designer's server API.
 *
 * @return {Promise<http.Server>}
 */
function makeProjectServer(projectDirectory, port) {

  console.log('making project server', projectDirectory);

  return new Promise((resolve, reject) => {
    port = port || 0;

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

    fileServer.listen(port, () => resolve(fileServer));
  });
}

module.exports = {
  makeProjectServer,
  generateTemplateDocument,
  addSourceIds,
};
