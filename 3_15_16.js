/*
Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.
*/
var data = [1, 2, 3, 4, 5];

function rotate(array, n) {
  n = n % array.length
  return array.slice(-n).concat(array.slice(0, -n))
}

console.log(rotate(data, 1) )// => [5, 1, 2, 3, 4]
console.log(rotate(data, 2) )// => [4, 5, 1, 2, 3]
console.log(rotate(data, 3) )// => [3, 4, 5, 1, 2]
console.log(rotate(data, 4) )// => [2, 3, 4, 5, 1]
console.log(rotate(data, 5) )// => [1, 2, 3, 4, 5]

console.log(rotate(data, 0) )// => [1, 2, 3, 4, 5]

console.log(rotate(data, -1)) // => [2, 3, 4, 5, 1]
console.log(rotate(data, -2)) // => [3, 4, 5, 1, 2]
console.log(rotate(data, -3)) // => [4, 5, 1, 2, 3]
console.log(rotate(data, -4)) // => [5, 1, 2, 3, 4]
console.log(rotate(data, -5)) // => [1, 2, 3, 4, 5]

console.log(rotate(data, 7) )    // => [4, 5, 1, 2, 3]
console.log(rotate(data, 11))    // => [5, 1, 2, 3, 4]
console.log(rotate(data, 12478)) // => [3, 4, 5, 1, 2]
