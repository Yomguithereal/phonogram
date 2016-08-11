/**
 * Phonogram English
 * ==================
 *
 * The phonogram phonetic encoding algorithm for the English language.
 */
import {POETIC_RULES} from './rules';
import {createPoetic} from '../factories';

const poetic = createPoetic({
  rules: POETIC_RULES
});

export {poetic};
