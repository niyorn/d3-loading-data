module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/stylesheet.css': 'css/sass/stylesheet.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      autoprefixer: {
        files: '**/*.scss',
        tasks: ['autoprefixer']
      }
    },
    autoprefixer: {
      no_dest_single: {
        src: 'css/stylesheet.css'
      },
    },

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['watch']);
}
