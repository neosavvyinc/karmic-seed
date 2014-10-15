var coreScripts = [
        'core/src/main/**/*.js',
        'core/src/test/**/*-spec.js'
    ],
    webScripts = [
        'web/src/main/**/*.js',
        'web/src/test/**/*-spec.js'
    ];

module.exports = {
    options: {
        configFile: 'karma.conf.js'
    },
    core: {
        options: {
            singleRun: true,
            files: coreScripts
        }
    },
    web: {
        options: {
            files: webScripts
        }
    },
    single: {
        options: {
            singleRun: true,
            files: coreScripts.concat(webScripts)
        }
    }
}
