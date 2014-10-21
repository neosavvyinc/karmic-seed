var coreScripts = [
        'core/src/main/core.js',
        'core/src/main/**/*.js',
        'core/src/test/**/*-spec.js'
    ],
    webScripts = [
        'web/src/main/web.js',
        'web/src/main/**/*.js',
        'web/src/test/**/*-spec.js'
    ],
    libScripts = [
        'core/src/lib/angular/angular.js',
        'core/src/lib/angular-mocks/angular-mocks.js'
    ];

module.exports = {
    options: {
        configFile: 'karma.conf.js'
    },
    core: {
        options: {
            singleRun: true,
            files:libScripts.concat(coreScripts),
            coverageReporter: {
                dir: 'target/coverage/core/'
            }
        }
    },
    web: {
        options: {
            files: libScripts.concat(webScripts),
            coverageReporter: {
                dir: 'target/coverage/web/'
            }
        }
    },
    single: {
        options: {
            singleRun: true,
            files: libScripts.concat(coreScripts, webScripts),
            coverageReporter: {
                dir: 'target/coverage/combined/'
            }
        }
    }
}
