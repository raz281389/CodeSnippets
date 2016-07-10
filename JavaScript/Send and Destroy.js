function destroyer(arr) {
   'use strict';//arguments.slice(1);//,arguments.length);
  var array =  Array.from(arguments).slice(1);

 for (var i = 0; i < array.length; i++) {
    arr = arr.filter(function (value) { 
      return value !== this;}, array[i]);
  }
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3],2, 3);
