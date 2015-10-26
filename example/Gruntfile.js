module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    htmlcs: {
      all: {
        src: ['src/**/*.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-htmlcs');

  grunt.registerTask('default', 'htmlcs');
};
