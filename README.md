# Enquoraging

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/thanapoom21/enquoraging/pulls) [![npm](https://img.shields.io/npm/dy/inspirational-quotes.svg?logo=npm&color=yellow)](https://www.npmjs.com/package/enquoraging)

**A simple NPM Package which returns motivational quote objects. You can call the function and display it in your website or app.**

## Getting Started

```
npm install --save enquoraging
```

## Basic Usage

Currently, there are 2 methods that you can use to get an object with properties or a string of a random quote. 

```js
import getQuote, { getRandomQuote } from "enquoraging";

console.log(getQuote());
console.log(getRandomQuote());
```

`getQuote()` returns an object containing `quote` and `author` properties.

`getRandomQuote()` returns only a random quote without an author.

```json
{
  "quote": "Imagination is more important than knowledge.",
  "author": "Albert Einstein"
}
```

<!-- ## Contributing

Contributors are welcome.  -->
