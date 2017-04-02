function unique(arr) {
    return arr.filter(function(item, index, array) {
        return array.indexOf(item, index + 1) === -1;
    })
}