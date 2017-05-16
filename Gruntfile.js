'use strict';

const BUILD_FOLDER = '_build';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      build: [BUILD_FOLDER]
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            '*.html'
          ],
          dest: BUILD_FOLDER
        }]
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'copy'
  ]);
}
