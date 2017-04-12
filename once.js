// 传入函数参数，只执行一次
function once(fnName) {
    var ret = {};
    return function() {
        if (ret[fnName]) {
            return 'doned';
        } else {
            ret[fnName] = true;
            return fnName();
        }
    }
}

function a() {
    console.log('a');
}
let foo = once(a);
foo();
foo();