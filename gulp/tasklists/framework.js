'use strict';

import gulp from 'gulp';

import * as helper from '../helper';

import * as tasks from '../task';
import * as tasksWatch from '../task-watch';

const namespace = helper.getNamespace(__filename);

export const tasklist = gulp.parallel(
  tasks.frameworkGulp,
  tasks.frameworkJson,
  tasks.frameworkYaml,
  function(done) {
    done();
  }
);

export const watch = gulp.parallel(
  tasksWatch.frameworkGulp,
  tasksWatch.frameworkJson,
  tasksWatch.frameworkYaml,
  function(done) {
    done();
  }
);

tasklist.displayName = namespace;
tasklist.description = 'Lint JavaScript configuration files for gulp, JSON and YAML configuration files';

export default tasklist;
