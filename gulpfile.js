var gulp = require('gulp');
var data = require('gulp-data');
var twig = require('gulp-twig-with-data');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var prettify = require('gulp-html-prettify');
var webpack = require("webpack");
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');

var connect = require('gulp-connect');
var open = require("gulp-open");
var port = process.env.port || 3031;

gulp.task('webpack', function() {
  return gulp.src('./src/js/*.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('compile', function() {
  return gulp.src(['./src/templates/*.twig', '!**/templates/**/_*.twig'])
    .pipe(plumber())
    .pipe(data(require('./src/data/data.js')))
    .pipe(twig())
    .pipe(prettify({
      indent_char: ' ',
      indent_size: 2
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('less', function() {
  return gulp.src(['./src/less/*.less', '!./src/less/_*.less'])
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./dist/assets/css'))
});

gulp.task('assets', function() {
  return gulp.src('./src/assets/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('open', function() {
  gulp.src('./dist/index.html')
    .pipe(open('', {
      url: 'http://localhost:' + port,
    }));
});

// live reload server
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: port,
    livereload: true
  });
});

// live reload css
gulp.task('reload:css', function() {
  gulp.src('./dist/assets/**/*.css')
    .pipe(connect.reload());
});

// live reload js
gulp.task('reload:js', function() {
  gulp.src('./dist/assets/**/*.js')
    .pipe(connect.reload());
});

// live reload html
gulp.task('reload:html', function() {
  gulp.src('./dist/*.html')
    .pipe(connect.reload());
});

// watch files for live reload
gulp.task('watch', function() {
  gulp.watch('./dist/assets/**/*.css', ['reload:css']);
  gulp.watch('./dist/assets/**/*.js', ['reload:js']);
  gulp.watch('./dist/*.html', ['reload:html']);
  gulp.watch('./src/less/*.less', ['less']);
  gulp.watch(['./src/**/*.twig', './src/**/*.json'], ['compile']);
  gulp.watch('./src/js/**/*.jsx', ['webpack']);
});

gulp.task('build', [
  'less',
  'assets',
  'compile',
  'webpack'
]);

gulp.task('serve', [
  'build',
  'connect',
  'open',
  'watch'
]);

gulp.task('default', ['build']);
