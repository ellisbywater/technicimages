const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        '/api': {
            proxy: 'http://localhost:3000/'
        }  
    } 
}