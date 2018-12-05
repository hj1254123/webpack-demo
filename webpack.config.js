const path = require('path')

module.exports = {
    // 这里指定入口文件的位置
    entry: './src/index.js',
    output: {
        // 出口文件名
        filename: 'main.js',
        // 输出位置
        path: path.resolve(__dirname, 'dist')
    },
    // 管理模块
    module: {
        // 指定规则
        rules: [{
                // 这里是匹配所有以 .css 结尾的文件
                test: /\.css$/,
                // use使用，以.css结尾的文件都会被提供给这两个loader
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 这些格式图片，交给file-loader
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}
