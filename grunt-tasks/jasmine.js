module.exports = function(grunt) {
  'use strict';
  grunt.config('jasmine', {
    pivotal: {
      src: 'src/list-paginator.js',
      options: {
        specs: 'spec/*_spec.js',
        helpers: 'spec/*_helper.js'
      }
    }
  });

  grunt.registerTask('jasmine', function() {
    grunt.task.run(['jasmine']);
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
};

