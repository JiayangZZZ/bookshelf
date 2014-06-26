module.exports = function(grunt) {

  grunt.initConfig({

    watch : {
      templates : {
        files : [
          '**/*.dot'
        ],

        tasks : ['dot']
      }
    },

    dot : {
      dist: {
        options: {
          variable : 'tmpl',
          root : __dirname + '/app',
          requirejs : true,
          node : true
        },
        src : [
          '**/*.dot'
        ],
        dest : 'public/templates/tmpl.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-dot-compiler');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
