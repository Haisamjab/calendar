'use strict';

require('babel/register')({
  whitelist: ['es6.modules', 'es6.destructuring', 'es6.parameters', 'strict']
});


let gulp = require('gulp');
gulp.$ = require('gulp-load-plugins')();
let livereload = require('gulp-livereload');
let server = require('./server').http;


gulp.task('bundle:scripts', function() {
  gulp.src('src/scripts/**/*.js')
    .pipe(gulp.$.concat('app.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('bundle:styles', function() {
  gulp.src('src/styles/**/*.css')
    .pipe(gulp.$.concat('app.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('copy:views', function() {
  gulp.src('src/views/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function() {
  server.listen(3000);
});


gulp.task('default', [
  'bundle:scripts',
  'bundle:styles',
  'copy:views'
], function() {
  gulp.run('serve');
});
