/**
 * Phonogram French
 * =================
 *
 * The phonogram phonetic encoding algorithm for the French language.
 */
import exceptions from './exceptions';
import {POETIC_RULES} from './rules';
import {createPoetic} from '../factories';

const poetic = createPoetic({
  rules: POETIC_RULES,
  exceptions
});

export {poetic};
