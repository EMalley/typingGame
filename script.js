const quotes = [
  "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
  "There is nothing more deceptive than an obvious fact.",
  "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
  "I never make exceptions. An exception disproves the rule.",
  "What one man can invent another can discover.",
  "Nothing clears up a case so much as stating it to another person.",
  "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteElement = document.getElementById("quoteElement");
const messageElement = document.getElementById("messageElement");
const typedValueElement = document.getElementById("typedValueElement");
const start = document.getElementById("start");

start.addEventListener("click", () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const chosenQuote = quotes[quoteIndex];
  words = chosenQuote.split(" ");
  wordIndex = 0;
  console.log(words);

  //UI updates
  const spanWords = words.map(function (word) {
    return `<span>${word} </span>`;
  });
  quoteElement.innerHTML = spanWords.join("");
  quoteElement.childNodes[0].className = "highlight";
  messageElement.innerText = "";

  typedValueElement.focus();
  startTime = new Date().getTime();
});

typedValueElement.addEventListener("input", () => {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    const elapsedTime = new Date.getTime() - startTime;
    const message = `Congradulations! you finished typing in ${
      elapsedTime / 1000
    } seconds`;
    messageElement.innerHTML(message);
  } else if (typedValue.endsWith(" ") && typedValue.trim() === currentWord) {
    typedValueElement.value = " ";
    wordIndex++;
    //reset classname for elements in the quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = "";
    }
    //highlight the new word
    quoteElement.childNodes[wordIndex].className = "highlight";
  } else if (currentWord.startsWith(typedValue)) {
    typedValueElement.className = "";
  } else {
    // set error state
    typedValueElement.className = "error";
  }
});
