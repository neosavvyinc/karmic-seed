module.exports = {
    core: {
        // TODO 
        // likely rework this to symlink full core directory to web or mobile
        // so that core template files and other assets are available.
        // 
        // an alternative I like is to use the grunt-angular-templates plugin 
        // to pre-add templates to the $templateCache
        files: [
            {
                src: 'target/core/core.concat.js',
                dest: 'target/web/core.concat.js'
            },
            {
                src: 'target/core/core.concat.js',
                dest: 'target/mobile/core.concat.js'
            }
        ]
    },
    lib: {
        files: [
            {
                src: 'target/lib/lib.concat.js',
                dest: 'target/web/lib.concat.js'
            },
            {
                src: 'target/lib/lib.concat.js',
                dest: 'target/mobile/lib.concat.js'
            }
        ]
    }
}
