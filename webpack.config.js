var webpack = require('webpack');

module.exports = {

    entry: {
    'polyfills': [
        'core-js/es6',
        'core-js/es7/reflect',
        'zone.js/dist/zone'
    ],
        'app': __dirname +'/src/main.ts'
    },
    output: {
        path: __dirname +'/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.component.ts$/,
                use: [
                    'angular2-template-loader',
                    'ts-loader'
                ]
            },
            {
                test: /\.ts$/,
                exclude: /\.component.ts$/,
                use: [{
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'raw-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'raw-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'to-string-loader',
                    'style-loader',
                    'raw-loader',
                    'sass-loader'
                    
                ]
            }
    ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css']
    },
    plugins: [
    new webpack.optimize.CommonsChunkPlugin({
            name: 'polyfills'
        }),
    new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        })
  ]
};
