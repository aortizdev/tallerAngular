module.exports = function(grunt) {
  grunt.initConfig({
    connect : {
      server : {
        options : {
          port : 9000,
          base : 'public/'
        }
      }
    },
    watch : {
      project : {
        files : ['public/**/*.html', 'public/**/*.js', 'public/**/*.css'],
        options : {
          livereload : true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['connect', 'watch']);
};