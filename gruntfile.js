/*var fs = require('fs');
module.exports = function(grunt) {
// Do grunt-related things in here

// Load the plugin that provides the "jshint" task.
grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.initConfig({

   jshint: {
      options: {
        jshintrc:'./.jshintrc'
      },
      target1: '*.js'
    }

  stringCheck: {
    file: './js/toe.js',
    string: 'console.log('
  }


});

grunt.registerTask('check', function() {
  if(grunt.file.exists('.jshintrc')) {
    grunt.task.run('jshint');
  }
});


  grunt.registerTask('stringCheck', function() {

    //fail if configuration is not provided
    grunt.config.requires('stringCheck.file');
    grunt.config.requires('stringCheck.string');

    //retrieve filename and load it
    var file = grunt.config('stringCheck.file');
    var contents = grunt.file.read(file);
    //retrieve string to search for
    var string = grunt.config('stringCheck.string');

    if(contents.indexOf(string >= 0))
      grunt.fail.warn('"' + string + '" found in "' + file + '"');
  });

  grunt.registerTask('log-deploy', function() {
    var message = 'Deployment on ' + new Date();
    fs.appendFileSync('logs/deploy.log', message + '\n');
    grunt.log.writeln('Appended "' + message + '"');
  });



  grunt.registerTask('default', ['stringCheck']);

};
*/
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
