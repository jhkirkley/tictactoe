module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      sample: {
        src: ['js/*.js']
      }
    },
    jasmine: {
        src: ['js*.js'],
        options: {
            specs: ['tests/tests.js'],
            vendor: ['lodash.min.js'],
            styles: 'css/style.css',
            template: ['tests/runner.tmpl']
        }
    },

    connect: {
      dev: {
        options: {
          base: './',
          port: 3000,
          livereload: true
        }
      }
    },
    watch: {
      www: {
        files: ['index.html', 'js/*.js', 'css/style.css'],
        options: {
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', []);
};
