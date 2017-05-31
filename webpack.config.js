//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
let webpack = require('webpack');
let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let glob = require('glob')

module.exports = {
  devtool: 'eval-source-map', // source-map,eval-source-map 配置生成Source Maps，选择合适的选项 FALSE 关闭 否则打包体积大
  entry: __dirname + "/src/js/main.js", //已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public", //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  module: { //在配置文件里添加JSON loader
    loaders: [{
      test: /\.json$/,
      loader: "json-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["react", "es2015"]
        }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'autoprefixer-loader?{browsers:["last 2 version"]}']
        }) //'style-loader!css-loader?modules'//添加对样式表的处理 注：感叹号的作用在于使同一文件能够使用不同类型的loader
    }, {
      test: /\.scss/,
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'autoprefixer-loader?{browsers:["last 2 version"]}', 'sass-loader?outputStyle=expanded']
      })
    }, {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  plugins: [
    new webpack.BannerPlugin("Copyright akira 2017."), //js版权声明插件
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(), //热交换
    new ExtractTextPlugin("./css/style.css"), //分离css
    // new webpack.optimize.OccurenceOrderPlugin(),//为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    // new webpack.optimize.UglifyJsPlugin(),//压缩JS代码；
  ],
  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    // colors: true,//终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true //热交换
  }
}