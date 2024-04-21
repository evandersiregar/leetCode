/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = [];
    for (let a = 0; a < arr.length; a++) {
        newArr[a] = fn(arr[a], a);
    }
    return newArr;
};