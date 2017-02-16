/**
 * Created by OgnjenVulic on 1/15/2017.
 */
var webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
// const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry:[
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'],
    externals:{
        jquery:'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery': 'jquery'
        }),
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Moves files
        // new TransferWebpackPlugin([
        //     {from: 'www'},
        // ], path.resolve(__dirname, 'src')),
    ],
    output: {
        path:__dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        root:__dirname,
        alias:{
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            openWeatherMap:'app/api/openWeatherMap.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx',
            applicationStyles:'app/styles/app.scss'
        },
        extensions:['','.js', '.jsx']
    },
    module:{
        loaders:[
            {
                loader:'babel-loader',
                query:{
                    presets:['react', 'es2015', 'stage-0']
                },
                test:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}