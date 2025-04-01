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

const quoteElement = document.getElementById("quotes");
const message = document.getElementById("message");
const typedValue = document.getElementById("typedValue");
const start = document.getElementById("start");

start.addEventListener("click", () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const chosenQuote = quotes[quoteIndex];
  words = chosenQuote.split(" ");
  wordIndex = 0;
  console.log(words);

  //UI updates
  const spanWords = words.map(function (word) {
    return `<span>${word}</span>`;
  });
  quoteElement.innerHTML = spanWords;
  quoteElement.childNodes[0].className = "highlight";
  message.innerText = "";

  typedValue.focus();
  startTime = new Date().getTime();
});
