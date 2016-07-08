'use strict';

import config from '../config';
import gulp   from 'gulp';
import jshint from 'gulp-jshint';

gulp.task('lint', function() {
console.log(config.scripts.src);
  return gulp.src([config.scripts.src])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
