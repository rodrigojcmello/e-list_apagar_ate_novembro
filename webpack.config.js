const webpack = require('webpack');
const html = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: './src/index.jsx',
    output: {
        filename: 'pacote.min.js',
        path: __dirname + '/cordova/www'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: { rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['stage-3', 'es2015', 'react']
            },
            include: __dirname + '/src'
        }
    ] },
    plugins: [
        new html({
            template: './src/index.html',
            inject: false
        })
    ]
};

if (process.env.NODE_ENV == 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    );
    config.plugins.push(new UglifyJSPlugin());
} else {
    config.devtool = 'cheap-module-eval-source-map';
}

console.log('### process.env.NODE_ENV');
console.log(process.env.NODE_ENV);

module.exports = config;
