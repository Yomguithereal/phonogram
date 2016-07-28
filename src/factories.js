/**
 * Phonogram factories
 * ====================
 *
 * Miscellaneous factory functions used to create the various phonetic encoding
 * functions for each of the target languages.
 */
import PhonogramCode from './PhonogramCode';

/**
 * Function factory returning the phonetic encoding function for poetic
 * rulesets.
 *
 * @param  {object}   options        - Options:
 * @param  {object}   options.rules  - Ruleset.
 * @param  {function} options.hasher - Hasher to perform the ruleset lookup.
 * @return {function}                - The created function.
 */
export function createPoeticCode(options) {
  const RULES = options.rules,
        hasher = typeof options.hasher === 'function' ? options.hasher : null;

  /**
   * Phonetic encoding function taking a string and returning its phonetic
   * representation.
   *
   * @param  {string}        string - Target string.
   * @return {PhonogramCode}        - The resulting code.
   */
  return function(string) {
    const code = new PhonogramCode(string),
          normalizedWord = code.normalizedWord;

      // Looping on each letter
      for (let i = 0, l = normalizedWord.length; i < l; i++) {
        const letter = normalizedWord[i],
              rules = RULES[letter];

        if (!rules)
          continue;

        for (let j = 0, m = rules.length; j < m; j++) {
          const [pattern, replacement, lookbehind] = rules[j];

          // If pattern is "null", we just need to apply the replacement
          if (!pattern) {
            code.replaceAt(i, replacement);
            break;
          }

          // Handling potential lookbehind
          if (lookbehind) {
            if (!lookbehind.test(normalizedWord.slice(0, i)))
              continue;
          }

          // Applying substitution
          const match = code.replace(i, pattern, replacement);

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
export function createPoetic(options) {
  const encode = createPoeticCode(options);

  return function(string) {
    const code = encode(string);

    return code.get();
  };
}
