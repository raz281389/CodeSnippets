function titleCase(str) {
  var string,array=[""];
  
  str=str.toLowerCase();
  str=str.split(' ');
  for(var i=0;i<str.length;i++){
    string= str[i].substring(1, str[i].length);
    array=array+str[i][0].toUpperCase() +string.toLowerCase()+" " ;
  
  }
return array.trim();
}


titleCase("This task took me a Whole day trying different codes");
