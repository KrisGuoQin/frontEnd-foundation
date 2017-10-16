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

