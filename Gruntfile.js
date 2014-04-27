module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-nuget');
  grunt.registerTask('default', ['nugetpack']);
  grunt.initConfig({
    nugetpack: {
        dist: {
            src: ['flight.nuspec', 'flight-standalone.nuspec'],
            dest: 'dist/'
        }
    }/*,
	nugetpush: {
        dist: {
            src: 'dist/*.nupkg',

            options: {
                apiKey: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
            }
        }
    }*/
  });
};