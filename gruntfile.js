module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.initConfig({
        jshint: {
            all: ['js/**/*js']
        },
        watch: {
        files: ['index.html', 'js/**/*js'],
        tasks: [],
        options: {
        livereload: {
        host: 'localhost',
        port: 9000
        // you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
              },
        debounceDelay: 250,

                  },
         jasmine: {
             src: './js/toe.js',
             options: {
                 specs: './tests/tests.js'
             }
         }


        },
        jscs: {
        all: [
            'Gruntfile.js', 'js/**/*js'
        ],
        options: {
            config: '.jscsrc'
        }
    },
    });
};
