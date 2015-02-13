/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/*
 * Copied from https://github.com/Polymer/polymer/blob/0.8-preview/src/lib/module.html
 * with slight modifications:
 * - Removed enclosing IIFE
 * - Renamed module to modulate
 * - Prefixed "private" parts with _
 */
function _withDependencies(task, depends) {
  depends = depends || [];
  if (!depends.map) {
    depends = [depends];
  }
  return task.apply(this, depends.map(marshal));
}

function modulate(name, dependsOrFactory, moduleFactory) {
  var module = null;
  switch (arguments.length) {
    case 0:
      return;
    case 2:
      // dependsOrFactory is `factory` in this case
      module = dependsOrFactory.apply(this);
      break;
    default:
      // dependsOrFactory is `depends` in this case
      module = _withDependencies(moduleFactory, dependsOrFactory);
      break;
  }
  _modules[name] = module;
};

function marshal(name) {
  return _modules[name];
}

var _modules = {};

var using = function(depends, task) {
  _withDependencies(task, depends);
};
