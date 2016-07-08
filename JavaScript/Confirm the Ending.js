
function confirmEnding(str, target) {
  
  if(str.substring(str.length-target.length)===target){
    
       return true;
//console.log(str.substr(target.length,target.length));
    }
  else{
    return false;
    //console.log(str.substr(-(target.length-1),target.length));
  }

}


confirmEnding("Bastian", "n");
