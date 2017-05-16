'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      build: ['_build']
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            '*.html'
          ],
          dest: '_build'
        }]
      },
      normalize: {
        files: [{
          expand: true,
          cwd: 'node_modules/normalize.css/',
          src: ['normalize.css'],
          dest: '_build/css/'
        }]
      }
    },

    less: {
      build: {
        files: {
          '_build/css/style.css': 'less/style.less'
        }
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'less'
  ]);
}
