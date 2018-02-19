/**
 * Phonogram Spanish
 * ==================
 *
 * The phonogram phonetic encoding algorithm for the Spanish language.
 */
import exceptions from './exceptions';
import {O, POETIC_RULES} from './rules';
import {isJotaX, isNahuatl} from './heuristics';
import {createPoetic, createPoeticCode} from '../factories';

const O_SET = new Set(O);

const hasher = (index, letter, word) => {
  if (letter !== 'x')
    return letter;

  if (isJotaX(word))
    return 'jotaX';

  const nextLetter = word[index + 1];

  if (O_SET.has(nextLetter) && isNahuatl(word))
    return 'nahuatlX';

  return 'x';
};

const poeticCode = createPoeticCode({
  rules: POETIC_RULES,
  exceptions,
  hasher
});

const poetic = createPoetic(poeticCode);

export {poetic, poeticCode};
