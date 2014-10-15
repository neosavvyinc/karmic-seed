module.exports = {
    options: {
        sourceMap: true,
        sourceMapStyle: 'inline'
    },
    core: {
        src: ['core/src/main/**/*.js'],
        dest: 'target/core/core.concat.js'
    },
    web: {
        src: ['target/core.js', 'web/src/main/**/*.js'],
        dest: 'target/web/web.concat.js'
    }
}
