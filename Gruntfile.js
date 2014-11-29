module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   jshint: {
      files: ['Gruntfile.js', 'assets/js/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'index.html'],
      tasks: ['jshint']
    },
    connect: {
      server: {
        options: {
          livereload: true,
          base: './',
          appName: '8000'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'assets/css/style.min.css': ['assets/css/*.css', '!assets/css/style.min.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('serve', ['connect:server', 'cssmin', 'watch']);
};