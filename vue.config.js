const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    css: {
        sourceMap: false
    },
    productionSourceMap:false,
    devServer: {
        port: 8085,
        host: 'localhost',
        proxy: {
            '/api': {
                target: 'http://218.6.173.219:8083',
                wx: true,
                changeOrigin: true
            }
        }
    }
}