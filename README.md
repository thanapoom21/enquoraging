# Enquoraging

A simple NPM Package which returns motivational quotes. You can call the function and display it in your website or app. 

## Getting Started

```
npm install --save enquoraging
```

## Basic Usage

```js
import getQuote, { getRandomQuote } from "enquoraging";

console.log(getQuote());
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