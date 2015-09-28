'use strict';

import debug from 'gulp-debug';
import gulp from 'gulp';
import plumber from 'gulp-plumber';

import config from './_config.babel.js';
import reportError from './_report-error.babel.js';

let sourceFiles = config.files.miscellaneous;
sourceFiles.concat(config.files.customStyles);
sourceFiles.concat(config.files.packages);
sourceFiles.concat(config.files.locales);

gulp.task('copy', () => {
  return gulp.src(sourceFiles, {
    dot: true
  })
  .pipe(plumber({
    errorHandler: reportError
  }))
  .pipe(debug({
    title: 'copy:'
  }))
  .pipe(plumber.stop())
  .pipe(gulp.dest(config.path.destination.base))
  .on('error', reportError);
});

gulp.task('copy:watch', function() {
  gulp.watch(sourceFiles, ['copy']);
});
