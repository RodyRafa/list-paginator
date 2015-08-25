module.exports = function (gulp, plugins) {
  gulp.src('spec/test.js')
    .pipe(plugins.jasmine());
};
