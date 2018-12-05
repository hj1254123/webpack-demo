// 这是ES6的语法，导入了lodash，并赋值给了 _
import _ from 'lodash'
// 这里引入css文件必须安装：npm install --save-dev style-loader css-loader
// 并配置webpack.config.js
import './style.css'

function componetn() {
    var element = document.createElement('div')
    // 这里就可以使用了
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')
    return element
}
document.body.appendChild(componetn())
