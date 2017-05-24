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
            '*.html',
            'img/**.{png,jpg}',
            'fonts/**.woff'
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
    },

    postcss: {
      style: {
        options: {
          processors: [
            require('autoprefixer')({
              browsers: [
                'last 1 version',
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'last 2 Opera versions',
                'last 2 Edge versions'
              ]
            })
          ]
        },
        src: '_build/css/style.css'
      }
    },

    csso: {
      style: {
        options: {
          report: 'gzip'
        },
        files: {
          '_build/css/style.min.css': '_build/css/style.css'
        }
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'less',
    'postcss',
    'csso'
  ]);
}
