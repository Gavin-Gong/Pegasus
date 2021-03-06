var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      // '@': resolve('src')
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'styles': resolve('src/assets/styles'),
      'components': resolve('src/components'),
      'api': resolve('src/api'),
      'theme': resolve('src/theme'),
      'mixins': resolve('src/mixins'),
      'pages': resolve('src/pages'),
      'muse-components': 'muse-ui/src'
    },

  },
  externals: {
    // "vue": "Vue",
    // "Router": "vue-router",
    // "Vuex": "vuex",
    echarts: 'echarts',
    axios: 'axios',
    vuex: {
        commonjs: 'vuex',
        commonjs2: 'vuex',
        amd: 'vuex',
        root: 'Vuex',
    },
    'vue-router': {
        commonjs: 'vue-router',
        commonjs2: 'vue-router',
        amd: 'vue-router',
        root: 'VueRouter',
    },
    'highlightjs': {
        commonjs: 'highlightjs',
        commonjs2: 'highlightjs',
        amd: 'highlightjs',
        root: 'hljs',
    },
    'marked': {
        commonjs: 'marked',
        commonjs2: 'marked',
        amd: 'marked',
        root: 'marked',
    },
    'simplemde': {
        commonjs: 'simplemde',
        commonjs2: 'simplemde',
        amd: 'simplemde',
        root: 'SimpleMDE',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /muse-ui.src.*?js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: 'vue/dist/vue.common.js',
    })
  ]
}
