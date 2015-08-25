module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'stylus:dev',
		'autoprefixer:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
