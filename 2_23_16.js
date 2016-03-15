/*
'anane' === 1
'adak' === 2

amazonCounting(1) // 'anane'
amazonCounting(2) // 'adak'
amazonCounting(13) // 'adak adak adak adak adak adak anane'

No trailing spaces!
*/

function amazonCounting(n) {
    var count = [];
    for (var i = 2; i <= n; i+=2) {
      count.push("adak");
    }
    if (n % 2 != 0) { count.push("anane"); }

    return count.join(" ");
}


//recursion

function simpleRecursion(num) {
  num++
  if(num<=10) {
    return simpleRecursion(num);
  }
  return num;
}

function amazonCounting(num) {
  switch num {
    case 0:
      return '';
    case 1:
      return 'anane';
    case 2:
      return 'adak';
    default:
      return 'adak ' + amazonCounting(n-2);
  }
}
