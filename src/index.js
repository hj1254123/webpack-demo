// 这是ES6的语法，导入了lodash，并赋值给了 _
import _ from 'lodash'
import print from './print.js'

function component() {
    var element = document.createElement('div')
    // 这里就可以使用了
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    var but = document.createElement('button')
    but.innerHTML = '点击我查看console'
    but.onclick = print
    element.appendChild(but)
    return element
}


// 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
let element = component();
document.body.appendChild(element);

// 这里为了告诉webpack，在print改变时接受更新的模块
// 没有这段的话，会通过刷新页面的方式更新，而不是热加载
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('print更新');
        // 删除原来的
        document.body.removeChild(element);
        // 调用函数重新渲染
        element = component();
        // 添加到body中
        document.body.appendChild(element);
    })
}
