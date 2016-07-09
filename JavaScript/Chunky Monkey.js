
function chunkArrayInGroups(arr, size) {
  var arrseg = [];
var newArray = [];
  
  for (var i = 0; i < arr.length;i+=size) {
    arrseg = arr.slice(i, i+size);
    newArray.push(arrseg);
    console.log(newArray);
  }
  return newArray;
}


chunkArrayInGroups(["a", "b", "c", "d"], 3);
