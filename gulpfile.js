// gulpfile.js
var gulp = require('gulp');
var data = require('gulp-data');

gulp.task('compile', function() {
  'use strict';
  var twig = require('gulp-twig');
  return gulp.src(['./src/templates/**/*.twig', '!**/_*.twig'])
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
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compile']);
