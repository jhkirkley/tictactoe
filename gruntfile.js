//Code example 04-linting
//Gruntfile.js
module.exports = function(grunt) {

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true
      },
      target1: ['Gruntfile.js', 'js/**/*.js']
    }
  });

  // Define the default task
  grunt.registerTask('default', ['jshint']);

};

//src/foo.js
if(7 == "7") alert(42);
