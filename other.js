// new 关键字的过程
// function Foo(){}
// new Foo();
// 1.创建一个新对象
// 2.将构造函数的作用域赋给新对象（this指向了这个新对象）
// 3.执行构造函数中的代码（为新对象添加属性）
// 4. 返回这个新对象


// 判断变量类型
// 判断基本类型string, number, boolean, undefined, null
// 使用typeof 判断基本类型
typeof "aaa" // => "string"
typeof 123 // => "number"
typeof true // => "boolean"
typeof undefined // => "undefined"
typeof null // => "object"


// 判断变量是函数
function isFunc(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
}
//判断变量是数组
arr instanceof Array //在iframe里面不准确
function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
}


// call， apply的区别，作用
// call， apply 都是用来改变函数的执行环境的，利用他们可以实现借用某个方法
// 如
Math.max.apply(null, [1, 2, 3, 4]); // => 4
// 区别在于接受的参数不同，apply接受数组或者类数组
// call接受的参数必须一个一个的传进去


// jsonp
function handleResponse(data) {
    // data to do
}

function sendJsonp(src) {
    var script = document.createElement('script');
    script.src = src + "?" + "callback=handleResponse";
    document.body.insertBefore(script, document.body.firstChild);
}
// 回调接收
handleResponse({
    code: 1,
    list: []
})



// 事件代理， 有这种情况，我们要给一系列的列表项添加点击事件
// 最简单的做法就是给每个都添加，但是这样会增加内存消耗，尤其是在
// 移动端内存比较小更加严重。所以为了减小内存使用，可以在他们的父级上添加一个事件用于处理
// 这其中利用了事件流模型，事件流模型分为三个阶段
// 1.事件捕获阶段 2.处在目标上阶段 3.事件冒泡阶段
// 可以利用事件冒泡的机制，实现事件代理。