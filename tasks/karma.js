module.exports = {
    options: {
        configFile: 'karma.conf.js'
    },
    core: {
        options: {
            files: [
                'core/src/main/**/*.js',
                'core/src/test/**/*-spec.js'
            ]
        }
    },
    web: {
        options: {
            files: [
              'web/src/main/**/*.js',
              'web/src/test/**/*-spec.js'
            ]
        }
    }
}
