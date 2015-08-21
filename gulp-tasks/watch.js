module.exports = function (gulp, plugins) {
  var path = './src/*.js';
  plugins.watch(path, function() {
    plugins.runJshint();
    gulp.src(path)
      .pipe(plugins.watch(path))
      .pipe(gulp.dest('dist'));
  })
};
