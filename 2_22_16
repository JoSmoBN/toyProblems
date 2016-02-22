

Array.prototype.sum = function() {
var result = 0;
for (var i=0; i<this.length; i++) {
  result += this[i];
}
  return result;
}

var arr = [1,2,3,4];
arr.sum();  //returns 10

var arr = [10, 28, 14, 33];
arr.sum(); //returns 85




//Your code goes here
Array.prototype.sum = function() {
  if (this.length === 0) { return 0; }
  return this.reduce( function(p, c) { return p + c; });
}


var arr = [1,2,3,4];
console.log(arr.sum());  //returns 10

var arr = [10, 28, 14, 33];
console.log(arr.sum()); //returns 85
