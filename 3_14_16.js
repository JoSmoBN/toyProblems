// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
//
// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
function order(s) {
  var words = s.split(' ');
  var orderedWords = [];

  for (var num = 1; num < words.length + 1; num++) {
    for (var i in words) {
      if (words[i].search(num) >= 0) {
        orderedWords.push(words[i]);
      }
    }
  }

  return orderedWords.join(' ');
};

console.log(orderUp("is2 Thi1s T4est 3a"));

//another, shorter way

function orderUp(str) {
  return str.split(' ').sort(function(a, b) {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}

console.log(orderUp("is2 Thi1s T4est 3a"));
