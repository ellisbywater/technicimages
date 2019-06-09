const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, '../production'),
    devServer: {
        '/api': {
            proxy: 'http://localhost:5000/'
        }  
    } 
}