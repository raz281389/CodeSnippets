
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length>num){
    if(num<3){
      str=str.substring(0,num);
  return str=str+"...";
    }
  str=str.substring(0,num-3);
  return str=str+"...";
  }
  else
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
