# 常用方法

## 函数节流与函数防抖

函数节流常用于浏览器中某些计算比较昂贵的操作，比如DOM操作；如果在浏览器的resize事件，scroll事件中操作DOM就会降低程序性能，甚至引起浏览器崩溃。使用函数节流与函数防抖可以有效的限制操作的频率。

### 函数防抖
函数防抖是指在一段不间断时间内只执行一次操作的机制，如果在这个时间段内连续出发了操作，那么只会执行最后一次触发的操作。例如，当用户在textarea里不断输入内容时候，你不想用户每输入一个字符就执行一些操作，只有当用户输入完成后才操作，如ajax提交数据。又或者当用户提交表单时候，在较短时间内连续点击提交按钮，多次提交表单；为了避免这种情况就可以使用函数防抖。

```javascript

function debounce(method, wait){
    var timer = null;
    return function(){
        var args = arguments, ctx = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            method.apply(ctx, args);
        },wait)
    }
}

var count  = 0;

function foo(){
    count += 1;
    console.log(count);
}

window.addEventListener('resize', debounce(foo, 1000), false);
```
### 函数节流
函数节流是用户在一段不间断时间内操作，而程序只会以一定频率执行。例如：当用户滚动滚动条时候，发生scroll事件，我们程序的顶部搜索栏需要做一些变化；图片的懒加载等需要根据滚动条滚动的值做相关计算。而scroll事件触发的非常频繁，如果不限制它的频率就会引发性能问题。

```javascript
function throttle(method, wait, duration){
    var timer = null, start = new Date();
    return function(){
        var ctx = this, args = arguments, 
            current = new Date();
        clearTimeout(timer);
        if(current - start >= duration){
            // 如果达到了规定的触发时间间隔，触发 handler
            method.apply(ctx, args);
            start = current;
        }else{
             // 没达到触发间隔，重新设定定时器
            timer = setTimeout(function(){
                method.apply(ctx, args);
            }, wait);
        }
    }
}
```
更加系统的解释请移步<a target="_blank" href="http://drupalmotion.com/article/debounce-and-throttle-visual-explanation">debounce-and-throttle-visual-explanation</a>

## display属性的值和介绍
1.none 关闭一个元素的显示，对布局没有影响，后代也不显示 <br/>
2.inline 该元素生成一个或者多个行内元素盒 <br/>
3.block 该元素生成一个元素盒 <br/>
4.list-item 该元素生成一个容纳内容和单独的列表行内元素盒的块元素盒 <br/>
5.inline-block 该元素生成一个块元素盒，该块状盒随着周围内容流动，如同他是一个单独的行内盒子 <br/>
6.tabel 该元素的作用就像tabel元素，定义了一个块盒子 <br/>
7.inline-tabel 本身是块盒子，但是可以随内容流动 <br/>
8.flex  （css3） 伸缩盒模型， 块级元素，但是拥有独立的渲染上下文 <br/>
9.inline-flex （css3) 伸缩盒模型， 行内元素，拥有独立的渲染上下文 <br/>
10.grid 网格，栅格模型， 表现的像块级元素，但是根据栅格模型的规则渲染 <br/>
11.inline-grid, 栅格模型， 表现的像行级元素，但是根据栅格模型的规则渲染 <br/>
## 响应式布局的方法
**核心是利用css3的媒体查询规则，利用一套样式表，来定义设备的表现方式。
成为响应式布局的条件** <br/>
1.网站必须建立灵活的网格基础 <br/>
2.引用到网站的图片必须是可伸缩的 <br/>
3.不同的显示风格，需要通过在Media Query上设计不同的样式 <br/>

**响应式设计的术语** <br/>
1.流体网格 <br/>
它参考了流体设计中的网格系统，将每个网格格子使用百分比单位来控制网格大小，
它的好处是让网格大小随时根据屏幕尺寸大小做出相应的比例缩放 <br/>
2.弹性图片 <br/>
是指不给图片设置固定的尺寸，而是根据流体网格进行缩放，用于适应各种各种网格的尺寸
    img{ max-width ： 100%} <br/>
3.媒体查询 <br/>
```css
@media screen and (max-width : 900px){

}
@media screen and (min-width : 600px) and (max-width : 900px){

}
@meida not print and (max-width : 1200px){

}
@media only print and (max-width : 1200px){

}
```
## boxx-sizing
事先定义盒模型的尺寸解析方式
+ box-sizing : content-box | border-box | inherit
+ content-box : 让元素维持w3c的标准盒模型。element height/width = border + + padding + height/width;
+ box-sizing  : 让元素维持IE中传统的盒模型。元素的宽度和高度等于 元素内容的宽度和高度。
+ inherit     ： 继承父元素的盒模型方式。

## css3动画
**animation** :  <br/>
1.animation-name : 动画名称 <br/>
2.animation-duration ： 动画播放时间 <br/>
3.animation-timing-function : 动画的播放方式 <br/>
4.animation-delay ： 动画的播放开始时间 <br/>
5.animation-iteration-count ： 动画循环播放的次数 <br/>
6.animation-direction : 动画播放的方向 <br/>
7.animation-play-state : 动画播放的状态 <br/>
8.animation-fill-mode : 动画的时间外属性 <br/>

@keyframe  
@keyframe name{

}

动画名称指向关键帧名称，关键帧的单位只接受百分比值。

## 移动端调试方法
### 安卓机器
1.pc，mobile端同时拥有最新版的chrome浏览器 <br/>
2.数据线连接手机和电脑 <br/>
3.电脑端chrome地址栏输入chrome://inspect/#devices 或者 设置选项 => 更多工具 => 检查设备 => 点击inspect <br/>

### 苹果机器
1.手机端和苹果电脑端的Safari浏览器 <br/>
2.数据线连接电脑 <br/>
3.手机 设置=> Safari => 高级 => web检查器打开 <br/>
4.Mac  偏好设置 => 高级 => 开发勾选 <br/>

## 移动端微信兼容性问题
1.当我们需要监听scroll事件时候，安卓和苹果中的微信处理该事件是不同的，
安卓是实时的计算scrollTop的位置，苹果是在手指离开屏幕，滚动条不在滚动时候
计算scrollTop位置，这在项目需要实时计算scroll值得时候就会有问题。需要我们
改变思路。 <br/>
2.有一些css只有添加了浏览器前缀时候才会生效，这可以通过gulp或者webpack或者
其他工具实现 <br/>

## doctype作用与类型
doctype是用来告诉浏览器应该使用哪种标准来加载网页并显示，如果不使用doctype，浏览器就无法知道HTML或者XHTML的类型，会严重影响布局。
常用的类型有
```html
1.html5 ： <!DOCTYPE html>
2.HTML 4.01 Strict：<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 
3.HTML 4.01 Transitional ： <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
4.HTML 4.01 Frameset ： <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

## 严格模式和混杂模式如何区分，有何意义
> doctype不存在或者格式不正确就会导致文档以混杂模式显示文档，
严格模式是以该浏览器的最高标准运行，支持更多特性
混杂模式，页面以宽松的向后兼容的方式显示，模拟老式浏览器的工作方式防止老的站点无法正常工作。

## gulp-connect原理
1.在本地开启一个websocket服务 <br/>
2.使用node fs模块监听文件的修改 <br/>
3.当文件修改保存后，websocket发出文件修改的通知 <br/>
4.浏览器自动刷新，加载最新文件 <br/>

## 为什么要跨域，跨域是什么
1.只要协议，域名，端口号有一个不同，都会被当做不同的域，而他们之间的请求就是跨域操作 <br/>
2.当我们需要使用第三方服务时候，我们就需要跨域操作 <br/>
3.现在常用的跨域方法是JSONP方法与CORS。 <br/>

## 不使用for循环，输出长度为100，值为数组项下标的数组
```javascript
Array.apply(null, {length : 100}).map((item, index) => index);

[...Array(101).join('a')].map((item, index) => index);

Array.from({length : 100}).map((item, index) => index);

Array.from(Array(101).join('a')).map((item, index) => index);

Array(100).fill('a').map((item, index) => index);

[...Array(100)].map((item, index) => index);
```
## new 关键字的过程
```javascript
function Foo(){}
new Foo();
```
>1.创建一个新对象 <br/>
>2.将构造函数的作用域赋给新对象（this指向了这个新对象） <br/>
>3.执行构造函数中的代码（为新对象添加属性） <br/>
>4.返回这个新对象 <br/>


## 判断变量类型
### 判断基本类型string, number, boolean, undefined, null,使用typeof 判断基本类型
```javascript
typeof "aaa" // => "string"
typeof 123 // => "number"
typeof true // => "boolean"
typeof undefined // => "undefined"
typeof null // => "object"
```

## 判断变量是函数
```javascript
function isFunc(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
}
```
## 判断变量是数组
```javascript
arr instanceof Array //在iframe里面不准确
function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
}
```

## call， apply的区别，作用
### call， apply 都是用来改变函数的执行环境的，利用他们可以实现借用某个方法 如
```javascript
Math.max.apply(null, [1, 2, 3, 4]); // => 4
// 区别在于接受的参数不同，apply接受数组或者类数组
// call接受的参数必须一个一个的传进去
```

## jsonp
```javascript
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
```

## 事件代理
事件代理， 有这种情况，我们要给一系列的列表项添加点击事件
最简单的做法就是给每个都添加，但是这样会增加内存消耗，尤其是在
移动端内存比较小更加严重。所以为了减小内存使用，可以在他们的父级上添加一个事件用于处理.
这其中利用了事件流模型，事件流模型分为三个阶段
1.事件捕获阶段 2.处在目标上阶段 3.事件冒泡阶段
可以利用事件冒泡的机制，实现事件代理。
```