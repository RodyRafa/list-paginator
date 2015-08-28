var jasmine = require('gulp-jasmine-phantom');
module.exports = function (gulp, plugins) {
  gulp.src(['spec/list-paginator_spec.js', 'src/list-paginator.js'])
    .pipe(jasmine({
      integration: true
    }));
};


