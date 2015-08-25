module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'stylus:dev',
		'autoprefixer:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
