/**
 * Phonogram Code Abstract
 * ========================
 *
 * Class used to build the phonetic code while applying the substitution
 * rule but also keeping track of the applied substitutions so one could
 * hypothetically go back to the original chain. This is necessary, for
 * instance, if one wants to use the phonetic representation of a given
 * string to syllabify it.
 */

/**
 * Phonogram Code class.
 *
 * @constructor
 * @param {string} word - The word to encode.
 */
export default class PhonogramCode {
  constructor(word = '') {

    // Properties
    this.word = word;
    this.normalizedWord = word.toLowerCase();
    this.mapping = [];

    for (let i = 0, l = this.normalizedWord.length; i < l; i++) {
      const character = this.normalizedWord[i];
      this.mapping.push([character, character]);
    }

    // Apply some generic normalization
    let match;

    if (match = /æ/.exec(this.normalizedWord))
      this.replaceAt(match.index, 'ae');

    if (match = /œ/.exec(this.normalizedWord))
      this.replaceAt(match.index, 'oe');
  }

  /**
   * Method used to replace the character at index.
   *
   * @param  {number}        index       - Pattern to find.
   * @param  {string}        replacement - Replacement if pattern is found.
   * @return {PhonogramCode}             - Returns itself for chaining.
   */
  replaceAt(index, replacement = '') {
    this.mapping[index][1] = replacement;
  }

  /**
   * Method used to apply a substitution rule and keeping track of it within
   * the state of the code.
   *
   * @param  {number}  offset      - Starting offset.
   * @param  {RegExp}  pattern     - Pattern to find.
   * @param  {string}  replacement - Replacement if pattern is found.
   * @return {object}              - Potential match information.
   */
  replace(offset, pattern, replacement = '') {
    const match = pattern.exec(this.normalizedWord.slice(offset));

    if (!match)
      return null;

    // Solving matches in reverse order
    const index = match.index + offset,
          limit = index + match[0].length;

    for (let i = index; i < limit; i++)
      this.replaceAt(i, i === index ? replacement : '');

    return match;
  }

  /**
   * Method used to retrieve the produced code.
   *
   * @return {string} - The code.
   */
  get() {
    let code = '';

    for (let i = 0, l = this.mapping.length; i < l; i++)
      code += this.mapping[i][1];

    return code;
  }
}

/**
 * Static method of the PhonogramCode class used to create a code from
 * an already existing mapping (typically exceptions).
 *
 * @param  {string}        word    - The word.
 * @param  {array}         mapping - Pre-existing mapping.
 * @return {PhonogramCode}
 */
PhonogramCode.from = function(word, mapping) {
  const code = new PhonogramCode(word);
  code.mapping = mapping;

  return code;
};
