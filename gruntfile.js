// The "wrapper" function
module.exports = function(grunt) {
  // Do grunt-related things in here


  // Project and task configuration
	grunt.initConfig({  
		pkg: grunt.file.readJSON('package.json'),
	});

  // Loading Grunt plugins and tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');

  // Custom tasks

};

