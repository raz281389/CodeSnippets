function repeatStringNumTimes(str, num) {
  // repeat after me
  var string="";
  for(i=0;i<num;i++){
    if (num>0){
      string+=str;
    }
    else{
      string="";
    }
  }
  return string;
}

repeatStringNumTimes("abc", -2);
