var webpack = require('webpack');

module.exports = {

    entry: {
        'polyfills': [
        'core-js/es6',
        'core-js/es7/reflect',
        'zone.js/dist/zone'
    ],
        'app': __dirname + '/src/main.ts'
    },
    output: {
        path: __dirname + '/dist',
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
                use: [
                    'eslint-loader',
                    'ts-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'raw-loader'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'to-string-loader',
                    'style-loader',
                    'raw-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'to-string-loader',
                    'style-loader',
                    'raw-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: ['./src/assets/scss/variables.scss', './src/assets/scss/mixins.scss']
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css', '.scss']
    },
    plugins: [
    new webpack.optimize.CommonsChunkPlugin({
            name: 'polyfills'
        }),
    new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        }),
    new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
    ),
  ]
};
