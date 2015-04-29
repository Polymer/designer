/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/files', function() {
  'use strict';


  // * getIcon(node) : Element
  // * getName(node) : String
  // * getChildren(node) : Promise<Array<Object>>
  // * isLeaf(node) : Boolean

  class DemoFilesTreeControl {

    constructor (lsRoot, filesRoot) {
      this.lsRoot = lsRoot;
      this.filesRoot = filesRoot;
    }

    getInfo(path) {
      return fetch(this.lsRoot + path).then(function(response) {
        return response.json();
      });
    }

    loadFile(path) {
      return fetch(this.filesRoot + path).then(function(response) {
        return response.text();
      }).then(function(file) {
        return {
          file: file,
          href: this.filesRoot + path,
        };
      }.bind(this));
    }

    getIcon(node) {
      return node.isFile ? "editor:insert-drive-file" : "icons:folder";
    }

    getName(node) {
      return getFilename(node.path);
    }

    getChildren(node) {
      if (node.isFile) {
        return Promise.resolve(null);
      }
      return fetch(this.lsRoot + node.path)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          return json.files;
        });
    }

    isLeaf(node) {
      return node.isFile;
    }

    isLink(node) {
      return true;
    }

    onClick(node, event) {
      this.loadFile(node.path).then(function(fileData) {
        let loadEvent = new CustomEvent('file-data-load', {
          detail: fileData,
          bubbles: true,
        });
        event.target.dispatchEvent(loadEvent);
      }.bind(this));
    }

  }

  function getFilename(path) {
    let splitPath = path.split('/');
    return splitPath[splitPath.length - 1];
  }

  return {
    getFilename: getFilename,
    DemoFilesTreeControl: DemoFilesTreeControl,
  };

});
