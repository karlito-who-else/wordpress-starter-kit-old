'use strict';

import cache from 'gulp-cached';
import debug from 'gulp-debug';
import gulp from 'gulp';
// import phpcs from 'gulp-phpcs';
import remember from 'gulp-remember';
import size from 'gulp-size';

import * as config from '../config';
import * as helper from '../helper';

const namespace = helper.getNamespace(__filename);

let sourceFiles = config.files.source.templates;

export function task(done) {
  return gulp.src(sourceFiles, {
      since: gulp.lastRun(namespace)
    })
    .pipe(cache(namespace))
    .pipe(debug({
      title: namespace
    }))
    .pipe(phpcs({
      bin: 'src/vendor/bin/phpcs',
      standard: 'PSR2',
      warningSeverity: 0
    }))
    .pipe(phpcs.reporter('log'))
    .pipe(gulp.dest(config.directory.destination.templates))
    .pipe(remember('templates'))
    .pipe(size({title: 'templates'}))
    .on('error', helper.reportError)
    .on('end', done);
}

export function watch(done) {
  return helper.defineWatcher(namespace, sourceFiles, task, true);
}

task.displayName = namespace;
task.description = 'Process markup templates';

export default task;
