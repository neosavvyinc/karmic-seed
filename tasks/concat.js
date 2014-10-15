module.exports = {
    options: {
        sourceMap: true,
        sourceMapStyle: 'inline'
    },
    libs: {
        options: {
            sourceMap: false
        },
        src: [
            'core/src/lib/angular/angular.js',
            'core/src/lib/angular-ui-router/angular-ui-router.js'
        ],
        dest: 'target/lib/lib.concat.js'
    },
    core: {
        src: ['core/src/main/core.js', 'core/src/main/**/*.js'],
        dest: 'target/core/core.concat.js'
    },
    web: {
        src: ['web/src/main/web.js', 'web/src/main/**/*.js'],
        dest: 'target/web/web.concat.js'
    }
}
