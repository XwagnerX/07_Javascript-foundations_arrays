// const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' to return an array of countries with five characters or fewer
 *
 * expected: ["Italy"]
 */

/**
 * Filters countries to return only those with five characters or fewer.
 *
 * @param {string[]} countriesList - Array of country names
 * @returns {string[]} Array of country names with five characters or fewer
 */
function extractCountriesWithFiveCharactersOrFewer(countriesList) {
  return countriesList.filter(country => country.length <= 5);
}

module.exports = extractCountriesWithFiveCharactersOrFewer;
