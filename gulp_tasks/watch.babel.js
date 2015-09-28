'use strict';

import gulp from 'gulp';

import {config, browserSync} from './_config.babel.js';

gulp.task('watch', [
  'browser-sync'
], () => {
  gulp.watch(config.files.locales, ['locales'], browserSync.reload);
  gulp.watch(config.files.markup, ['markup'], browserSync.reload);
  gulp.watch(config.files.scripts, ['scripts'], browserSync.reload);
  gulp.watch(config.files.styles, ['styles']);
});
