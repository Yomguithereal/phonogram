/**
 * Phonogram French
 * =================
 *
 * The phonogram phonetic encoding algorithm for the French language.
 */
import exceptions from './exceptions';
import {POETIC_RULES} from './rules';
import {isGreekCh} from './heuristics';
import {createPoetic} from '../factories';

const hasher = (index, letter, word) => {

  if (letter === 'c' && word[index + 1] === 'h') {
    if (isGreekCh(word))
      return 'greekCh';
    else
      return 'c';
  }

  return letter;
};

const poetic = createPoetic({
  rules: POETIC_RULES,
  exceptions,
  hasher
});

export {poetic};
