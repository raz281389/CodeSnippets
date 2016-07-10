function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
 
  arr.push(num);
  arr.sort(function(a,b) {
  
  return a - b;
});
  //arr.sort();
  //return arr;
  return arr.indexOf(num);
}

getIndexToIns([5, 3, 20, 3], 5);
