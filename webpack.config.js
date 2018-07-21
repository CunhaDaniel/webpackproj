const webpack = require('webpack')

module.exports = {
    entry: './examples/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node-modules/,
            query:{
                presets:['es2015']
            }
        }]
    }
}