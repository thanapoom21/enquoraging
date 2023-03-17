import getQuote, { getRandomQuote } from "../lib/index.js";

const { quote, author } = getQuote();

console.log(`Here's a quote by "${author}": "${quote}"\n`);

console.log(`This is a random quote "${getRandomQuote()}"\n`);

console.log(getQuote({ author: false }));
