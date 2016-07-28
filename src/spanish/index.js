/**
 * Phonogram Spanish
 * ==================
 *
 * The phonogram phonetic encoding algorithm for the Spanish language.
 */
import {POETIC_RULES} from './rules';
import {isJotaX, isNahuatl} from './heuristics';
import {createPoetic} from '../factories';

const hasher = (index, letter, word) => {
  if (letter !== 'x')
    return letter;

  if (isJotaX(word))
    return 'jotaX';

  const nextLetter = word[index + 1];

  if (nextLetter === 'o' && isNahuatl(word))
    return 'nahuatlX';

  return 'x';
};

const poetic = createPoetic({
  rules: POETIC_RULES,
  hasher
});

export {poetic};

