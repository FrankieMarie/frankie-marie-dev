module.exports = function (grunt) {
  grunt.initConfig({
      autoprefixer: {
          dist: {
              files: {
                  'build/main.css': 'main.css'
              }
          }
      },
      watch: {
          styles: {
              files: ['src/css/main.css'],
              tasks: ['autoprefixer']
          }
      }
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
};