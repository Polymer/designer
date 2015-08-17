/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var frameScript = require('./tools/frame-script');
var gulp = require('gulp');
var insert = require("gulp-insert");
var source = require('vinyl-source-stream');
var symlink = require('gulp-symlink');

// make files available at bower_components/polymer-designer/... so that
// relative html imports work when loaded from disk
gulp.task('symlink', function() {
  gulp.src('.').pipe(symlink('bower_components/polymer-designer', {
    force: true,
  }));
});

// builds the JS bundle that's injected into the editor iframe
gulp.task('frame-script', function() {
  gulp.src(frameScript.dependencies)
      .pipe(concat('frame.js'))
      .pipe(insert.prepend(frameScript.preamble))
      .pipe(insert.append(frameScript.postamble))
      .pipe(gulp.dest('./elements/designer-document/'));
});

gulp.task('browserify-css', function() {
  browserify({
    entries: './node_modules/css',
    standalone: 'css',
  }).bundle()
      .pipe(source('css.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./vendor'));
});

gulp.task('browserify-dom5', function() {
  browserify({
    entries: './node_modules/dom5',
    standalone: 'dom5',
  }).bundle()
      .pipe(source('dom5.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./vendor'));
});

gulp.task('browserify-hydrolysis', ['browserify-dom5'], function() {
  var b = browserify({
    entries: './node_modules/hydrolysis',
    standalone: 'hydrolysis',
  });
  b.external('vendor/dom5.js');
  b.bundle()
      .pipe(source('hydrolysis.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./vendor'));
});

gulp.task('browserify', [
    'browserify-css',
    'browserify-dom5',
    'browserify-hydrolysis']);

gulp.task('browser', ['browserify'], function() {
  // symlink src/hydrolysis-browser.html to vendor/hydrolysis.html
  gulp.src('src/hydrolysis/hydrolysis-browser.html')
      .pipe(symlink('vendor/hydrolysis.html', {force: true}));
});

gulp.task('electron', ['frame-script', 'symlink', 'browserify'], function() {
  // symlink src/hydrolysis-electron.html to vendor/hydrolysis.html
  gulp.src('src/hydrolysis/hydrolysis-electron.html')
      .pipe(symlink('vendor/hydrolysis.html', {force: true}));
});
