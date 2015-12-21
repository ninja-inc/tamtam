'use strict'

var del = require('del')
var gulp = require('gulp')
var react = require('gulp-react')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var vinylPaths = require('vinyl-paths')
var runSequence = require('run-sequence')
var babelify = require('babelify')

// delete module.
// http://whiskers.nukos.kitchen/2014/12/08/gulp-del.html
gulp.task('cleanPublic', function() {
  return gulp.src('public/js/*js')
  				.pipe(vinylPaths(del))
});

//http://qiita.com/masato/items/35b0900e3a7282b33bf8
//http://www.cultofmetatron.io/gulp-browserify-and-famo-us-for-great-justice/
//reactify works for *.jsx -> *.js & ServerSideJS -> ClientSideJS
gulp.task('browserify', function(){
  return browserify('./browser.js')
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
  gulp.watch('./*/*.js', ['cleanPublic', 'browserify'])
});

// this module is like a main method of Java, so it is needed.
// write TODO task names.
gulp.task('default', function() {
  return runSequence('cleanPublic', 'watch', 'browserify');
})
