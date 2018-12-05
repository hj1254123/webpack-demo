// 这是ES6的语法，导入了lodash，并赋值给了 _
import _ from 'lodash'

function componetn() {
    var element = document.createElement('div')
    // 这里就可以使用了
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
}
document.body.appendChild(componetn())
