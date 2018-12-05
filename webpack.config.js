const path = require('path')
// 自动生成入口html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 构建时自动清理dist目录插件
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    // 这里指定入口文件的位置，可以指定多个
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    // 插件
    plugins: [
        // 构建时自动清理dist目录
        new CleanWebpackPlugin(['dist']),
        // 自动生成index.html
        new HtmlWebpackPlugin({
            title: '这是HTML的标题'
        })
    ],
    output: {
        // 出口文件名，[name]自动替换为文件变量名(即上面的,app和print)
        filename: '[name].bundle.js',
        // 输出位置
        path: path.resolve(__dirname, 'dist')
    }
}
