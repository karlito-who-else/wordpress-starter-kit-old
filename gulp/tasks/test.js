'use strict';

// import gulp from 'gulp';
import notify from 'gulp-notify';
// import wct from 'web-component-tester';
import {test as wct} from 'web-component-tester';

import * as config from '../config';
import * as helper from '../helper';

const namespace = helper.getNamespace(__filename);

let sourceFiles = [
  `${config.directory.source.elements}/elements.html`
];
sourceFiles = sourceFiles.concat(config.files.source.elements);

export function task(done) {
  // wct.gulp.init(gulp);
  return wct({plugins: {local: {}, sauce: false}}, function(error) {
    if (error) {
      helper.reportError(error);
      done();
    } else {
      notify({'title': 'Build passed', 'message': 'Yay!'});
      done();
    }
  });
}

export function watch(done) {
  return helper.defineWatcher(namespace, sourceFiles, task);
}

task.displayName = namespace;
task.description = 'Test web components using Web Components Tester';

export default task;
