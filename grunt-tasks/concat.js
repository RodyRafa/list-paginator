module.exports = function(grunt) {
  'use strict';
  grunt.config('concat', {
    "libs": {
      "src": [
        "src/umd/head.js",
        "src/list-paginator.js",
        "src/umd/foot.js"
      ],
      "dest": "dist/list-paginator.js",
    }
  });

  grunt.registerTask('concat', function() {
    grunt.task.run(['concat']);
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
