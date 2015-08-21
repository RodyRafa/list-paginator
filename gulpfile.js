var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('default', function () {
  return gulp.src(['src/umd/head.js', './src/list-paginator.js', './src/umd/foot.js'])
          .pipe(concat('list-paginator.js'))
          .pipe(gulp.dest('./dist/'));  
});

gulp.task('jshint', function() {
  return gulp.src('./src/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});
