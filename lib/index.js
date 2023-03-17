/**
 * 
 * @author Thanapoom Phithakjarukorn
 */

import { readFile } from 'fs/promises'
const arr = JSON.parse(
  await readFile(
    new URL('../data/data.json', import.meta.url)
  )
)

// import { createRequire } from 'module'
// const requireJSON = createRequire(import.meta.url)
// const arr = requireJSON('../data/data.json')

/**
 * 
 * Uncaught TypeError TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING]: Module "file:///Users/thanapoomphithakjarukorn/Desktop/enquoraging/data/data.json" needs an import assertion of type "json"
 * import arr from '../data/data.json'
 */

/**
 * 
 * Uncaught ReferenceError ReferenceError: require is not defined in ES module scope, you can use import instead
 * const arr = require('../data/data.json')
 */

let randomIndex = Math.floor(Math.random() * arr.length)

/**
 * return a random quote string.
 */
let getRandomQuote = () => {
  return arr[randomIndex].quote
}

/**
 * return an object with quote and author.
 */
// let getRandomQuoteWithAuthor = () => {
//   return {
//     quote: arr[randomIndex].quote,
//     author: arr[randomIndex].author,
//   }
// }

/**
 * 
 * Set the default author value to true, { author: true }, it returns whole object.
 * 
 */
let getQuote = (options = { author: true }) => {
  let resultOption = options && options.author ? { author: arr[randomIndex].author } : {}

  return {
    quote: arr[randomIndex].quote,
    ...resultOption
  };
};

export { getQuote, getRandomQuote }