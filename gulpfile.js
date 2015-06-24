var concat = require('gulp-concat');
var frameScript = require('./tools/frame-script');
var gulp = require('gulp');
var insert = require("gulp-insert");
var symlink = require('gulp-symlink');

gulp.task('symlink', function() {
  gulp.src('.').pipe(symlink('bower_components/polymer-designer', {
    force: true,
  }));
});

gulp.task('frame-script', function() {
  gulp.src(frameScript.dependencies)
      .pipe(concat('frame.js'))
      .pipe(insert.prepend(frameScript.preamble))
      .pipe(insert.append(frameScript.postamble))
      .pipe(gulp.dest('./elements/designer-document/'));
});

gulp.task('browser', function() {
  // symlink src/hydrolysis-browser.html to vendor/hydrolysis.html
  gulp.src('src/hydrolysis/hydrolysis-browser.html')
      .pipe(symlink('vendor/hydrolysis.html', {force: true}));
});

gulp.task('electron', function() {
  // symlink src/hydrolysis-browser.html to vendor/hydrolysis.html
  gulp.src('src/hydrolysis/hydrolysis-electron.html')
      .pipe(symlink('vendor/hydrolysis.html', {force: true}));
});
