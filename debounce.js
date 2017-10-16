function debounce(method, wait) {
    var timer = null;
    return function() {
        var args = arguments,
            ctx = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            method.apply(ctx, args);
        }, wait)
    }
}

var count = 0;

function foo() {
    count += 1;
    console.log(count);
}

window.addEventListener('resize', debounce(foo, 1000), false);
window.addEventListener('resize', debounce(a, 500), false);