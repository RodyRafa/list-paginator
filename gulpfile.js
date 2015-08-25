var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('jshint', require('./gulp-tasks/jshint')(gulp, plugins));
gulp.task('stream', require('./gulp-tasks/watch')(gulp, plugins));
gulp.task('jasmine', require('./gulp-tasks/jasmine')(gulp, plugins));

gulp.task('default', ['jshint'], function () {
  return gulp.src(['src/umd/head.js', './src/list-paginator.js', './src/umd/foot.js'])
          .pipe(plugins.concat('list-paginator.js'))
          .pipe(gulp.dest('./dist/'));  
});

