// params parent children
function extend(parent, child) {
    var i, child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            child[i] = parent[i];
        }
    }
    return child;
}

function extendDeep(parent, child) {
    var i, child = child || {},
        toString = Object.prototype.toString,
        arrTypeStr = '[object Array]';
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] === 'object') {
                child[i] = (toString.call(parent[i]) === arrTypeStr) ? [] : {};
                extendDeep(parent[i], child[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }
    return child;
}

var extendObj = extend({
    name: 'kris'
}, {
    age: 18
});
console.log(extendObj);

var extendDeepObj = extendDeep({
    colors: ['red', 'blue']
}, {
    gender: 'male'
});
console.log(extendDeepObj);