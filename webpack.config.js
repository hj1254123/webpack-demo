const path = require('path')

module.exports = {
    // 这里指定入口文件的位置
    entry: './src/index.js',
    output: {
        // 出口文件名
        filename: 'main.js',
        // 输出位置
        path: path.resolve(__dirname, 'dist')
    }
}
