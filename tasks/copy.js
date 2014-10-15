module.exports = {
    core: {
        files: [
            {
                expand: true,
                cwd: 'core/src/main/',
                src: [
                    '**/*'
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
                    '**/*'
                ],
                dest: "target/web/"
            }
        ]
    }

}