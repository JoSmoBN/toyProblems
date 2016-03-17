Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or .

You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

//without regex
function doubleCheck(str){
    str = str.toLowerCase();
    var len = str.length;
    for(var i = 1; i < len; i++) {
      if(str[i] === str[i - 1]) return true;
    }
    return false;
}

//with regex

function doubleCheck(str){
  return /(.)\1/i.test(str);
}


  doubleCheck("abca")
  //returns false

  doubleCheck("aabc")
  //returns true

  doubleCheck("a 11 c d")
  //returns true

  doubleCheck("AabBcC")
  //returns true

  doubleCheck("a b  c")
  //returns true

  doubleCheck("a b c d e f g h i h k")
  //returns false

  doubleCheck("2020")
  //returns false

  doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
  //returns false
