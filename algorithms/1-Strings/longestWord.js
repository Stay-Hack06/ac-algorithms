/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

// function findLongestWord(str) {
//   var words = str.split(' ');
//   var longestWordLength = 0;
  
//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longestWordLength) {
//       longestWordLength = words[i].length;
//     }
//   }
  
//   return longestWordLength;
// }

function findShortestWord(str) {
  var words = str.split(' ');
  var shortestWordLength = Infinity;
  
  for (var i = 0; i < words.length; i++) {
    if (words[i].length < shortestWordLength) {
      shortestWordLength = words[i].length;
    }
  }
  
  return shortestWordLength;
}

function findLongestWord(str) {
  var words = str.split(' ');
  var longestWordLength = 0;
  var longestWord = '';
  
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length;
      longestWord = words[i];
    }
  }
  
  console.log('Longest Word:', longestWord);
  
  return longestWordLength;
}
