var word = prompt("Plese insert here a word or frase to verify if is a palindrome");
var alphaExp = /^[a-zA-Z\s]*$/;

function palindrome(word) {
  if (word.match(alphaExp)) {
    word = word.toLowerCase().split(/\s/).join('');
    lengthWord = word.length
    for (var i = 0; i < (lengthWord/2); i++) {
      if (word[i] !== word[lengthWord - 1 - i]) {
        document.write("Is not a palindrome")
        return false
      }
      document.write("Is palindrome")
      return true
    }
  } else {
    alert("Only letters!")
    return false
  }
}

palindrome(word);
