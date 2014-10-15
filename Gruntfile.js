var path = require('path');

module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'tasks')
    });

    grunt.registerTask('default', [
        'clean:target',

        'bower',

        'copy:core',
        'copy:web',

        'karma:single',

        'concat:core',
        'concat:web'



    ]);
};
