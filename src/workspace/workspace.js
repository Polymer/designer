/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 define('polymer-designer/workspace', ['uri'], (uriLib) => {
  'use strict';

  class Workspace {

    /**
     * @param type {string} 'local' or 'proxy'
     * @param root {string}
     * @param componentRoot {string}
     */
    constructor (type, root, componentRoot) {
      this.type = type;
      this.root = root;
      // this._rootParent = this._parentOf(root);
      this.componentRoot = componentRoot;
    }

    // resolve(urlString) {
    //   let url = new URL(urlString, this.root);
    //   if (!url.path.startsWith(this.root.path)) {
    //     // either component dir or invalid path
    //
    //   } else {
    //     // project file
    //     return url;
    //   }
    // }
    //
    // _parentOf(urlString) {
    //   let uri = new uriLib.URI(urlString).normalize();
    //   let segments = uri.segment();
    //   uri.segment(segments.slice(0, segments.length - 1));
    //   return uri.toString();
    // }
    //
    // _isSibling(urlOne, urlTwo) {
    //
    // }

  }

  return {
    Workspace: Workspace,
  };

});
