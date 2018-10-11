const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port: 8085,
        host: 'localhost',
        proxy: {
            '/api': {
                target: '',
                wx: true,
                changeOrigin: true
            }
        }
    }
}