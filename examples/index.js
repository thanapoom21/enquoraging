import getQuote, { getRandomQuote, getQuoteArrayLength, getQuoteByIndex } from "../lib/index.js";

const { quote, author } = getQuote();
const randomQuote = getRandomQuote();
const totalQuoteCount = getQuoteArrayLength();
const { quote: quoteWithoutAuthor } = getQuote({ author: false });
const { quote: quoteByIndex, author: authorByIndex, isAlive, age } = getQuoteByIndex(10);

console.log(`Here's a quote by "${author}": "${quote}"\n`);

console.log(`This is a random quote "${randomQuote}"\n`);

console.log(`Here is the quote object without the author "${quoteWithoutAuthor}"\n`);

console.log(`How many quotes are there? -> ${totalQuoteCount}\n`);

console.log(`"${quoteByIndex}" \nby "${authorByIndex}"\nThis is the one I want.\n`);

if (isAlive) {
  console.log(`${authorByIndex} is alive and well`);
} else {
  console.log(`${authorByIndex} was ${age} years old. He has passed away.`);
}
