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

  // Applying the rules
  for (let i = 0, l = POETIC_RULES.length; i < l; i++)
    code.replace(...POETIC_RULES[i]);

  return code.get();
}
