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
            files: coreScripts,
            coverageReporter: {
                dir: 'target/coverage/core/'
            }
        }
    },
    web: {
        options: {
            files: webScripts,
            coverageReporter: {
                dir: 'target/coverage/web/'
            }
        }
    },
    single: {
        options: {
            singleRun: true,
            files: coreScripts.concat(webScripts),
            coverageReporter: {
                dir: 'target/coverage/combined/'
            }
        }
    }
}
