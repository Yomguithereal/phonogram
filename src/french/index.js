/**
 * Phonogram French
 * =================
 *
 * The phonogram phonetic encoding algorithm for the French language.
 */
import {POETIC_RULES} from './rules';
import PhonogramCode from '../PhonogramCode';

// NOTE: maybe abstract this part if needed later
// TODO: jsdoc
export function poetic(word) {
  const code = new PhonogramCode(word);

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
