/**
 * Phonogram Spanish
 * ==================
 *
 * The phonogram phonetic encoding algorithm for the Spanish language.
 */
import {POETIC_RULES} from './rules';
import PhonogramCode from '../PhonogramCode';

/**
 * Constants.
 */
const DIACRITICS = {
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u'
};

// NOTE: maybe abstract this part if needed later
// TODO: jsdoc
// NOTE: this is the same as the French version but includes some preprocessing
// notably: dropping diacritics & applying a heuristic to check if the
// word seems nahuatl or catalan
export function poetic(word) {
  const code = new PhonogramCode(word);

  //-- 1) Replacing diacritic
  for (let i = 0, l = word.length; i < l; i++) {
    const deburred = DIACRITICS[word[i]];

    if (deburred)
      code.replaceAt(i, deburred);
  }

  // Looping on each letter
  for (let i = 0, l = word.length; i < l; i++) {
    const letter = word[i],
          rules = POETIC_RULES[letter];

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
        if (!lookbehind.test(word.slice(0, i)))
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

  return code.get();
}
