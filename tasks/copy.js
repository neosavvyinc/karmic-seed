module.exports = {
    core: {
        files: [
            {
                expand: true,
                cwd: 'core/src/main/',
                src: [
                    '**/*.js'
                ],
                dest: "target/core/"
            }
        ]
    },
    web: {
        files: [
            {
                expand: true,
                cwd: 'web/src/main/',
                src: [
                    '**/*.js'
                ],
                dest: "target/web/"
            }
        ]
    }

}