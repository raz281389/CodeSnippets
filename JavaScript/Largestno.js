function largestOfFour(arr) {
  var array =[""];
for (var i= 0; i < arr.length; i++)
    {
      var check = arr[i];
       var xy =0;
      for (var j = 0; j< check.length; j++)
        {
          if (xy < check[j])
            {
              xy = check[j];
            }
             array [i]= xy;
        }
    }
  return array;
}
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
