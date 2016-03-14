Explanation:

    square() must return a copy of the array, containing all values squared, the original array must not be changed
    cube() must return a copy of the array, containing all values cubed, the original array must not be changed
    average() must return the average of all array values, average() on an empty array must return NaN
    sum() must return the sum of all array values
    even() must return an array of all even numbers, the original array must not be changed
    odd() must return an array of all odd numbers, the original array must not be changed

var numbers = [1, 2, 3, 4, 5];


Array.prototype.square = function () {
  return this.map(function(n) {
    return n*n;
  });
}

Array.prototype.cube = function () {
  return this.map(function(n) {
    return n*n*n;
  });
}

Array.prototype.average = function () {
  return this.sum() / this.length;
}

Array.prototype.sum = function () {
  return this.reduce(function(a, b) {
    return a + b;
  }, 0);
}

Array.prototype.even = function () {
  return this.filter(function(item) {
    return 0 == item % 2;
  });
}

Array.prototype.odd = function () {
  return this.filter(function(item) {
    return 0 != item % 2;
  });
}


numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
numbers.square(); // must return [1, 4, 9, 16, 25]
