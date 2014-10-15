var coreScripts = [
        'core/src/main/**/*.js',
        'core/src/test/**/*-spec.js'
    ],
    webScripts = [
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
            files: libScripts.concat(coreScripts)
        }
    },
    web: {
        options: {
            files: libScripts.concat(webScripts)
        }
    },
    single: {
        options: {
            singleRun: true,
            files: libScripts.concat(coreScripts, webScripts)
        }
    }
}
