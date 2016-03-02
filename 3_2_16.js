Youll be passed an array of objects - you must sort them in descending order based on the value of an arbitrarily specified property. For example, when sorted by a, this:

var listA = [
  {a: 1, b: 3},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 4, b: 12}
]

var listB = [
  {a: 4, b: 12},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 1, b: 3}
]

your function must take the form function sortList (sortBy, list)

The values will always be numbers, and the properties will always exist.


function sortList (sortBy, list) {
  return list.sort(function (a,b) {
    if (a[sortBy] == b[sortBy]) return 0;
    else if (a[sortBy] < b[sortBy]) return 1;
    else return -1;
  })
}
