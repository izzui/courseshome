module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['app/**/*.html', 'app/**/*.css', 'app/**/*.js'],
            options: {
                livereload: true
            }
        }
    });

    grunt.registerTask('default', ['watch']);
}