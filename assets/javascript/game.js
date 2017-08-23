var secretWord = "";

var guessCount;
var hiddenLetters = new Array();

function startGame() {
  console.clear(); // Clears the console so we don't get confused between executions
  secretWord = pickSecretWord(); // This function picks a secret word and displays it in console

  // Create an array of "hidden" letters the same length as the secret word, fill it with the '_' char
  for (var i = 0; i < secretWord.length; i++) {
    hiddenLetters[i] = "_";
  }


  guessCount = 10;
  document.getElementById('guessCount').innerHTML = "Guesses remaining: " + guessCount;
  drawWord(); // This function outputs the hidden word for the user
  document.getElementById('result').innerHTML = "";
  document.getElementById('input').style.display = 'block';
  document.getElementById('button').style.display = 'none';
  document.getElementById('input').focus();
}

function guess() {
  // Get the users guess from the textbox
  var userGuess = document.getElementById('input').value;

  // Clear the textbox ready for the next guess
  document.getElementById('input').value = "";
  console.log(userGuess)
    // Check if the letter they guessed is in the word
  isGuessInSecretWord(userGuess);

  // Display how many guesses they have left
  document.getElementById('guessCount').innerHTML = "Guesses remaining: " + guessCount;

  // Check to see if they won.
  checkWin();
}

function pickSecretWord() {
  var var animals = ["elephant", "grasshopper", "chimpanzee", "hummingbird", "porcupine", "salamander", "crocodile"]; // Create an array of words
  var secretWordSelector = Math.floor((Math.random() * animals.length)); // Pick a random word from the array
  console.log("Secret word: " + wordList[secretWordSelector]) // Output the selected word to the console for easy testing
  return wordList[secretWordSelector]; // Return the secret word.
}

function isGuessInSecretWord(theGuess) {
  var isInWord = false;
  for (var i = 0; i < secretWord.length; i++) {
    if (theGuess == secretWord.charAt(i)) {
      hiddenLetters[i] = theGuess;
      isInWord = true;
      drawWord();
    }
  }
  if (isInWord == false) {
    guessCount--;
  }
}

function drawWord() {
  document.getElementById('hiddenWord').innerHTML = "";
  for (var i = 0; i < secretWord.length; i++) {
    document.getElementById('hiddenWord').innerHTML += hiddenLetters[i] + " ";
  }
}


function checkWin() {
  if (hiddenLetters.join('') == secretWord) {
    document.getElementById('input').style.display = 'none';
    document.getElementById('button').style.display = 'block';
    document.getElementById('result').innerHTML = "You win!";
  }
  if (guessCount <= 0) {
    document.getElementById('input').style.display = 'none';
    document.getElementById('button').style.display = 'block';
    document.getElementById('result').innerHTML = "Too many guesses. You lose!";
  }
}