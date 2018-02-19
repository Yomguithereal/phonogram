/**
 * Phonogram factories
 * ====================
 *
 * Miscellaneous factory functions used to create the various phonetic encoding
 * functions for each of the target languages.
 */
import PhonogramCode from './PhonogramCode';

// TODO: possibility to speed up when pattern is not a regular expression
// TODO: INITIAL can speed up
// TODO: maybe run lookbehind before on last slice to boost and avoid more slice

/**
 * Function factory returning the phonetic encoding function for poetic
 * rulesets.
 *
 * @param  {object}   options            - Options:
 * @param  {object}   options.rules      - Ruleset.
 * @param  {function} options.hasher     - Hasher to perform the ruleset lookup.
 * @param  {object}   options.exceptions - Optional exceptions.
 * @return {function}                    - The created function.
 */
export function createPoeticCode(options) {
  const RULES = options.rules,
        EXCEPTIONS = options.exceptions || {},
        hasher = typeof options.hasher === 'function' ? options.hasher : null;

  /**
   * Phonetic encoding function taking a string and returning its phonetic
   * representation.
   *
   * @param  {string}        string - Target string.
   * @param  {object}        params - Optional parameters.
   * @return {PhonogramCode}        - The resulting code.
   */
  return function poeticCode(string, params) {
    const code = new PhonogramCode(string, typeof params === 'object' && params.trace === true),
          normalizedWord = code.normalizedWord;

    // Checking whether the normalized word exists as an exception
    const exception = EXCEPTIONS[normalizedWord];

    if (exception)
      return PhonogramCode.fromException(normalizedWord, exception);

    // Looping on each letter
    for (let i = 0, l = normalizedWord.length; i < l; i++) {
      const letter = normalizedWord[i];

      // Hashing if necessary
      const key = hasher ? hasher(i, letter, normalizedWord) : letter,
            patterns = RULES[key];

      if (!patterns)
        continue;

      for (let j = 0, m = patterns.length; j < m; j++) {
        const [
          pattern,
          replacement,
          lookbehind,
          negative = false
        ] = patterns[j];

        // If pattern is "null", we just need to apply the replacement
        // TODO: add to debug
        if (!pattern) {
          code.replaceAt(i, replacement);
          break;
        }

        // Handling potential lookbehind
        if (lookbehind) {
          const test = lookbehind.test(normalizedWord.slice(0, i));

          if (negative) {
            if (test)
              continue;
          }
          else {
            if (!test)
              continue;
          }
        }

        // Applying substitution
        const match = code.replace(i, pattern, replacement, lookbehind, negative);

        if (match) {
          i += match[0].length - 1;
          break;
        }
      }
    }

    return code;
  };
}

/**
 * Poetic factory returning the string encoding itself rather than the
 * code instance.
 */
export function createPoetic(encode) {
  return function poetic(string) {
    const code = encode(string);

    return code.toString();
  };
}
