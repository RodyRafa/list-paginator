module.exports = function (gulp, plugins) {
  var msgOK = '\\o/ jshint ok!';
  return plugins.runJshint = function () {
     gulp.src('./src/*.js')
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter(console.log(msgOK)));
 }
};
