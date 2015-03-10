/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// Ideally, we would be able to just run the following...
//
//   browserify -e node_modules/parse5 -s parse5 -o vendor/parse5.js
//
// ...but browserify -> browser-pack -> umd don't actually provide a name to the
// defined module (they assume a loader and implicit name).
//
// So...
define('vendor/parse5', require('parse5'));
