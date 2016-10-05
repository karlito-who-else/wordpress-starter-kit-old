'use strict';

import cache from 'gulp-cached';
import debug from 'gulp-debug';
import dss from 'gulp-dss';
import gulp from 'gulp';
import remember from 'gulp-remember';
import size from 'gulp-size';

import * as config from '../config';
import * as helper from '../helper';

const namespace = helper.getNamespace(__filename);

let sourceFiles = config.files.source.styles;

export function task(done) {
  return gulp.src(sourceFiles, {
    since: gulp.lastRun(namespace)
  })
  .pipe(cache(namespace))
  .pipe(debug({
    title: namespace
  }))
  .pipe(dss({
    // template: 'node_modules/gulp-dss/templates/default/'
    template: `${config.directory.source.theme}/styleguide/templates/default/`
  }))
  .pipe(remember(namespace))
  .pipe(gulp.dest(config.directory.destination.styleguide))
  .pipe(size({title: namespace}))
  .on('error', helper.reportError)
  .on('end', done);
}

export function watch(done) {
  return helper.defineWatcher(namespace, sourceFiles, task);
}

task.displayName = namespace;
task.description = 'Generate styleguide using DSS';

export default task;
