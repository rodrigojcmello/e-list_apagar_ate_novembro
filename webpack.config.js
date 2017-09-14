const webpack = require('webpack');
const html = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: './src/index.jsx',
    output: {
        filename: 'pacote.min.js',
        path: `${ __dirname }/cordova/www`
    },
    resolve: { extensions: ['.js', '.jsx'] },
    module: { rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['stage-3', 'es2015', 'react'],
                cacheDirectory: true,
                sourceMaps: process.env.NODE_ENV === 'production' ? false : true
            },
            exclude: /node_modules/
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'file-loader?name=cordova/www/assets/img/[name].[ext]'
        },
        {
            test: /\.css$/,
            loader: [ 'style-loader', 'css-loader?name=cordova/www/assets/[ext]/[name].[ext]' ]
        },
        {
            test: /\.sss$/,
            loader: [
                'style-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        parser: 'sugarss',
                        plugins: (loader) => [
                            require('precss')(),
                            require('autoprefixer')(),
                            require('postcss-calc')(),
                            process.env.NODE_ENV === 'production' ?
                                require('cssnano')() : () => {}
                        ]
                    }
                }
            ]
        }
    ] },
    plugins: [
        new html({
            template: process.env.NODE_ENV === 'production' ? './src/index_prod.html' : './src/index_dev.html',
            inject: false
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            Component: ['react', 'Component'],
            store: 'store'
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
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
