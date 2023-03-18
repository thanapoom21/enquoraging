# Enquoraging

A simple NPM Package which returns motivational quotes. You can call the function and display it in your website or app. This repo is publish as an NPM package [here](<(https://www.npmjs.com/package/enquoraging)>).

## Getting Started

You can download it from NPM registry as a package. By the following command:

```
npm install --save enquoraging
```

## Basic Usage

ES module is implemented in this repo for future use. ESM offers several benefits over CommonJS, including tree shaking, static analysis, and support for asynchronous loading.

```js
import getQuote, { getRandomQuote } from "enquoraging";

// You'll get a random quote with author
console.log(getQuote());
// You'll get a random quote
console.log(getRandomQuote());
```

`getQuote()` method returns an object containing `quote` & `author` property.

`getRandomQuote()` method returns only quote from a specific author.

```json
{
  "quote": "Imagination is more important than knowledge.",
  "author": "Albert Einstein"
}
```

<!-- ## Contributing

Contributors are welcome.  -->
