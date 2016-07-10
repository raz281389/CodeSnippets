function rot13(str){  
  var shift=13;
  var str1=[""],str2=[""];// LBH QVQ VG!
  for(i=0;i<str.length;i++){
    //str1+=str.charCodeAt(i)+',';
    //str1=str.charCodeAt(i);

    // Str2[i].fromCharCode(str1[i]);
        
  //for(j=0;j<str1.length;j++){
    //if(str1[j]>=65 && str1[j]<=90){
     var c = str.charCodeAt(i);
		if(c >= 65 && c <=  90){
          str2 += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
        }
		else{
          str2 += str.charAt(i);  
            }// Copy
    }
  
  return str2;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
