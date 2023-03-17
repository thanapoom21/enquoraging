/**
 *
 * @author Thanapoom Phithakjarukorn
 */

import { readFile } from "fs/promises";

const quotesData = JSON.parse(
  await readFile(new URL("../data/data.json", import.meta.url))
);

// import { createRequire } from "module"
// const requireJSON = createRequire(import.meta.url)
// const quotesData = requireJSON("../data/data.json")

const randomIndex = Math.floor(Math.random() * quotesData.length);

/**
 * return a random quote string.
 */
export function getRandomQuote() {
  return quotesData[randomIndex].quote;
}

/**
 *
 * Set the default author value to true, { author: true }, it returns a whole object.
 *
 */
export default function getQuote(options = { author: true }) {
  let resultOption =
    options && options.author ? { author: quotesData[randomIndex].author } : {};

  return {
    quote: quotesData[randomIndex].quote,
    ...resultOption,
  };
}
