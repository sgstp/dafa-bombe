const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const StyleLintPlugin = require('stylelint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require("path")

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = function (env) {
    var isProd = !!(env && env.prod);

    var config = {
        entry: {
            app: ["./src/app/main.ts"]
        },

        output: {
            path: resolve('dist'),
            publicPath: "/",
            filename: "app.js"
        },

        resolve: {
            extensions: ['.js', '.ts', '.html'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                "@": resolve('src')
            }
        },

        devtool: 'eval-source-map',

        module: {
            rules: [
                {
                    enforce: 'post',
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                // {
                //     test: /\.scss$/,
                //     use: ['sass-loader']
                // },
                {
                    enforce: 'post',
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.html$/,
                    loader: 'vue-template-loader',
                    exclude: resolve('src/index.html'),
                    options: {
                        scoped: true
                    }
                },
                {
                    test: /\.ts$/,
                    enforce: 'pre',
                    loader: 'tslint-loader',
                    include: [resolve('src'), resolve('tests')],
                    options: {
                        configFile: 'conf/tslint.json',
                        formatter: 'grouped',
                        formattersDirectory: 'node_modules/custom-tslint-formatters/formatters'
                    }
                },
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: resolve('tsconfig.json'),
                        useCache: true
                    }
                },
                // {
                //     test: /\.svg$/,
                //     loader: 'svg-inline-loader',
                //     options: {
                //         removeTags: true,
                //         removingTags: ['desc', 'defs', 'style'],
                //         removeSVGTagAttrs: true
                //     }
                // },
                {
                    test: /\.(png|jpe?g|gif|ttf|eot|ico|woff2?|svg)(\?.*)?$/,
                    // loader: 'url-loader',
                    // options: {
                    //     limit: 10000
                    // }
                    loader: 'file-loader'
                },
                {
                    test: /\.i18n$/,
                    loader: ['json-loader', 'yaml-loader'],
                    include: [resolve('src')]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: resolve('src/index.html'),
                inject: 'body',
                hash: true
            }),
            new StyleLintPlugin({
                configFile: 'conf/stylelint.json',
                emitErrors: false
            }),
            new CopyWebpackPlugin([
                {from: 'src/public', to: 'public' }
            ])
        ]
    };

    if (isProd) {

        // To get good stack traces without providing source code
        config.devtool = 'nosources-source-map';

        // To generate .gz files
        config.plugins.push(new CompressionPlugin());

        // To disable caching with awesome-typescript-loader
        config.module.rules.forEach(function (rule) {
            if (rule.loader == 'awesome-typescript-loader') {
                rule.options.useCache = false;
            }
        })

    }

    return config;
}
