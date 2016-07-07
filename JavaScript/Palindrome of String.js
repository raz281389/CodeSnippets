
function palindrome(str) {
  str=str.toLowerCase();
  //str=str.replace(/\w+/g ,'');
  str=str.replace(/\s+/g ,'');
 str=str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g ,'');
  var strTest=str.split('').reverse().join('');
  strTest=strTest;
  strTest=strTest;
  if (strTest===str){
  // Good luck!
   // return strTest;
  return  true;
  }
  else
    return false;

}
palindrome("A man, a plan, a canal. Panama");
