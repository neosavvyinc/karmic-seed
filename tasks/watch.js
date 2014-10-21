module.exports = {
    options: { },
    core: {
        files: ['core/src/main/**/*.js'],
        tasks: [
            'concat:core',
            'symlink:core',
            'concat:web'
        ]
    },
    web: {
        files: ['web/src/main/**/*.js'],
        tasks: ['concat:web']
    }
}
