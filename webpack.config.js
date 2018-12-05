const path = require('path')
// 自动生成入口html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 构建时自动清理dist目录插件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 载入webpack
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    // 这里指定入口文件的位置，可以指定多个
    entry: {
        app: './src/index.js'
    },
    // 启动追踪源文件功能，即：报错后准确查看错误位置。注意：仅用于开发模式。
    devtool: 'inline-source-map',
    devServer: {
        inline: true, //打包后加入一个websocket客户端
        hot: true, //热加载
        contentBase: path.resolve(__dirname, 'dist'), //开发服务运行时的文件根目录
        host: '192.168.1.3', //主机地址
        port: 8081, //端口号
        compress: true //开发服务器是否启动gzip等压缩
    },
    // 配置组件
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    // 插件
    plugins: [
        // 构建时自动清理dist目录
        new CleanWebpackPlugin(['dist']),
        // 自动生成index.html
        new HtmlWebpackPlugin({
            title: '这是HTML的标题'
        }),
        // 这里调用webpack内置方法
        new webpack.HotModuleReplacementPlugin(),
        // 在热加载时直接返回更新文件名，而不是文件的id
        new webpack.NamedModulesPlugin()
    ],
    output: {
        // 出口文件名，[name]自动替换为文件变量名(即上面的,app和print)
        filename: '[name].bundle.js',
        // 输出位置
        path: path.resolve(__dirname, 'dist')
    }
}
