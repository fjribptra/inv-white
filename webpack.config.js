const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
