function mutation(arr) {
  var a = arr[0].toLowerCase();
  var b = arr[1].toLowerCase();
  for (var i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) == -1)
      return false;
      
  }
  return true;
}

mutation(["hello", "hey"]);
