exports = module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      server: ['**/*.js','!node_modules/**/*','**/*.spec.js'],
      test: ['test/**/*.spec.js'],
      grunt: ['Gruntfile.js']
    },
    mochaTest: {
      all: {
        src: ['**/*.spec.js', '!node_modules/**/*']
      }
    },
    copy: {
      all: {
        files: [
          {src:['**/*','!**/*.spec.js', '!node_modules/**/*'], dest: 'build/', filter: 'isFile'}
        ]
      }
    },
    clean: ['build'],
    express: {
      dev: {
        options: {
          script: 'bin/www'
        }
      }
    },
    watch: {
      server: {
        files: ['**/*'],
        tasks: ['jshint','express'],
        options: {
          spawn: false
        }
      }
    },
    open: {
      all: {
        path: 'http://localhost:9000/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('keepalive', 'Keeping Grunt Alive', function() {
    this.async();
  });

  grunt.registerTask('serve', ['express','open','watch']);

  grunt.registerTask('build',['clean','jshint','mochaTest','copy']);
};