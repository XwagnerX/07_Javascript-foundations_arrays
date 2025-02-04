
/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

/**
 * Filters an array of words and returns only the words that have a length of 5 or more characters.
 *
 * @param {string[]} wordsList - An array of words to be filtered.
 * @returns {string[]} An array containing words that are 5 or more characters long.
 */

// function getLongWords(wordsList) {
//     const longWords = [];
//     for (let i = 0; i < wordsList.length; i++) {
//       if (wordsList[i].length > 5) {
//         longWords.push(wordsList[i]);
//       }
//     }
//     return longWords;
//   }
  

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];


function getLongWords(wordsList) {
    return wordsList.filter(word => word.length > 5);
}
module.exports = getLongWords;