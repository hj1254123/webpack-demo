// 这是ES6的语法，导入了lodash，并赋值给了 _
import _ from 'lodash'
import print from './print.js'

function componetn() {
    var element = document.createElement('div')
    // 这里就可以使用了
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    var but = document.createElement('button')
    but.innerHTML = '点击我查看console'
    but.onclick = print
    element.appendChild(but)
    return element
}
document.body.appendChild(componetn())
