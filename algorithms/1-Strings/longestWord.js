/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

// This function takes a string 'str' as input and finds the length of the longest word in the string.

function findLongestWord(str) {
  // Split the input string 'str' into an array of words using space (' ') as the separator and store it in the 'words' array.
  var words = str.split(' ');
  // Initialize a variable 'longestWordLength' to keep track of the length of the longest word found. Start with 0.

  var longestWordLength = 0;
  // Iterate through the 'words' array to find the longest word.
  for (var i = 0; i < words.length; i++) {
  // Check if the length of the current word is greater than the current 'longestWordLength'.
    if (words[i].length > longestWordLength) {
      // If it is longer, update 'longestWordLength' with the length of the current word.
      longestWordLength = words[i].length;
    }
  }
  // After the loop, 'longestWordLength' contains the length of the longest word in the input string.
  // Return this value as the result.
  return longestWordLength;
}

console.log('Longest Word:', longestWord);



function findShortestWord(str) {
  var words = str.split(' ');
  var shortestWord = words[0]; 

  for (var i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i]; 
    }
  }

  return shortestWord;
}


let text = "Witches will forever cast";
console.log("Shortest word:", findShortestWord(text));



