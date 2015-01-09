var gulp = require('gulp');
var data = require('gulp-data');
var twig = require('gulp-twig-with-data');
var less = require('gulp-less');
var clean = require('gulp-clean');
var coalesce = require('gulp-coalesce');
var minifyCSS = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var prettify = require('gulp-html-prettify');
var webpack = require("webpack");

var connect = require('gulp-connect');
var open = require("gulp-open");
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var port = process.env.port || 3031;


var webpack = require('gulp-webpack');
gulp.task('webpack', function() {
  return gulp.src('./src/js/*.jsx')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('compile', function() {
  return gulp.src(['./src/*.twig', '!**/_*.twig'])
    .pipe(plumber())
    .pipe(data(function() {
      return {
        title: 'Gulp and Twig',
        benefits: [
          'Fast',
          'Flexible',
          'Secure'
        ]
      }
    }))
    .pipe(twig())
//    .pipe(coalesce())
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  return gulp.src('dist', {
      read: false
    })
    .pipe(clean());
});

gulp.task('css', function() {
  return gulp.src(['./src/assets/less/*.less', '!**/_*.less'])
    .pipe(less())
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('default', ['css', 'compile', 'webpack']);
