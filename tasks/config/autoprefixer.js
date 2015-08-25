/**
 * Prefixes css using autoprefixer
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *     https://github.com/gruntjs/grunt-autoprefixer
 */
module.exports = function(grunt) {

  grunt.config.set('autoprefixer', {
    dev: {
      options: {
        browsers: ['last 2 versions']
      },
      files: [{
        src: '.tmp/public/styles/*.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
};
