// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.
//
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
  var str1 = s1.split('');
  var str2 = s2.split('');
  var newArray = [];
  for (var i = 0; i < str1.length; i++) {
      if (!newArray.includes(str1[i]))
        newArray.push(str1[i]);
    }
  for for (var i = 0; i < str2.length; i++) {
    if (!newArray.includes(str2[i]))
      newArray.push(str2[i]);
  }
    return newArray
  };
