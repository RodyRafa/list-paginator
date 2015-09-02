module.exports = function(grunt) {
  'use strict';
  grunt.config('jshint', {
    "files": [
      "Gruntfile.js",
      "grunt-tasks/**/*.js",
      "src/list-paginator.js",
    ],
    "options": {
      "bitwise": true,
      "eqeqeq": true,
      "forin": true,
      "freeze": true,
      "latedef": false,
      "mocha": true,
      "noarg": true,
      "node": true,
      "nonbsp": true,
      "strict": true,
      "undef": true,
      "unused": true,
      "globals": {
        "$": true,
        "alert": true,
        "jQuery": true,
        "QUnit": true,
        "expect": true,
        "window": true,
        "document": true,
        "console": true,
        "module": true,
        "nsShoppingCartAjaxService": true,
        "sizeSelect": true,
        "nsEmailAjaxService": true,
        "nsCpfAjaxService": true,
        "nsAddressAjaxService": true,
        "nsShippingAjaxService": true
      }
    }
  });

  grunt.registerTask('jshint', function() {
    grunt.task.run(['jshint']);
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
