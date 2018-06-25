var webpack = require('webpack');

module.exports = {
    entry: './client/main.js',
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/, /public/],
            },
            {
                test: /\.css$/,
                loaders: 'style!css',
                exclude: [/node_modules/, /public/]
            },
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
    ]
};
