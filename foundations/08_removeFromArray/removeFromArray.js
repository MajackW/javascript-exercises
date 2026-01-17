const removeFromArray = function(arr, ...toRemove) {
    newArray = arr.filter((n) => !toRemove.includes(n));
    return(newArray);
}
// Do not edit below this line
module.exports = removeFromArray;
