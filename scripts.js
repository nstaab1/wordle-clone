function test2() {
  console.log("Javascript is working");
}

const validateWord = () => {
  let correctWord = "guess";
  let test = document.getElementById("wordle-word").value;
  for (i = 0; i < test.length; i++) {
    if (test[i] == correctWord[i]) {
      console.log("Correct letter at index " + i);
    } else {
      for (j = 0; j < correctWord.length; j++) {
        if (test[i] == correctWord[j]) {
          console.log(
            "letter is in  correct word but not in right place " + test[i]
          );
        }
      }
    }
  }
};
