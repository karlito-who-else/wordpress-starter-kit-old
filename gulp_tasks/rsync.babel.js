'use strict';

import debug from 'gulp-debug';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import rsync from 'gulp-rsync';

import config from './_config.babel.js';
import reportError from './_report-error.babel.js';

let sourceFiles = config.files.destination.all;

gulp.task('rsync', () => {
  return gulp.src(sourceFiles, {
    dot: true
  })
  .pipe(plumber({
    errorHandler: reportError
  }))
  .pipe(debug({
    title: 'rsync:'
  }))
  .pipe(rsync({
    root: config.path.destination.base,
    hostname: '',
    username: '',
    destination: config.path.deploy.base,
    incremental: true,
    exclude: []
  }))
  .pipe(plumber.stop())
  .on('error', reportError);
});
