// The "wrapper" function
module.exports = function(grunt) {
  // Do grunt-related things in here


  // Project and task configuration
	grunt.initConfig({  
		pkg: grunt.file.readJSON('package.json'),

		/*
		* Grunt Sass
		* Compile Sass to CSS using node-sass
		* https://npmjs.com/package/grunt-sass
		*/
		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'css/styles.css' : 'assets/scss/styles.scss'
	            }
	        }
	    },

	    uglify: {
		    my_target: {
		      files: {
		        'js/scripts.min.js': ['node_modules/jquery/dist/jquery.js', 'assets/js/scripts.js']
		      }
		    }
		},

	    watch: {

		  sass: {

		    files: [
		    	'assets/scss/**/*.scss'
		    ],
		    tasks: [
		    	'sass'
		    ],
		    options: {
		      spawn: false,
		    },
		  },

		  scripts: {

		    files: [
		    	'assets/js/*.js'
		    ],
		    tasks: [
		    	'uglify'
		    ],
		    options: {
		      spawn: false,
		    },
		  },

		},

		
	});

  // Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

  // Custom tasks
  grunt.registerTask('default', ['watch']);

};
