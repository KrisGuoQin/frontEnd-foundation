// 函数防抖
// args : func, wait, ctx
// return : func
function debounce(func, wait, ctx) {
    let timer = null;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            func.call(ctx);
        }, wait);
    }
};

function a() {
    console.log('a');
}

window.addEventListener('resize', debounce(a, 500), false);