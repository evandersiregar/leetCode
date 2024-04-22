/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArr = [];
    for (let a = 0; a < arr.length; a++) {
        if(fn(arr[a], a)) {
            newArr.push(arr[a]);
        }
    }
    return newArr;
};