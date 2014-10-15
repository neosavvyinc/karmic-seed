module.exports = {
    core: {
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
