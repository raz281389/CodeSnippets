
function longestWord(str) {
var array = ["a"];

  var string = str.split(' ');
  for (i = 0;i < string.length; i++) {
        if (string[i].length > array[0].length) {
            array.splice(0,1);
            array.push(string[i]);
        }
    }
    return array[0].length;
}

longestWord("What is the Longest word in this sentence");
