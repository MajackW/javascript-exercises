//function that changes words separated by - to camelCase
function camelize(str){
    return str.split('-')
    .map((word, index) => 
        index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
}
//console.log(camelize("majack-wariaka"))

//function thatfilters an array where values >= a or <= b
function filterRange(arr, a, b){
    let filtered = arr.filter(integer => integer >= a && integer <= b);
    return filtered;
}
console.log(filterRange([1,2,3,4,5,6,7,8,9,10],1,7));