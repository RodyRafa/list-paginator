var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src(['src/umd/head.js', './src/list-paginator.js', './src/umd/foot.js'])
          .pipe(concat('list-paginator.js'))
          .pipe(gulp.dest('./dist/'));  
});
