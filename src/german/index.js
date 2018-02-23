/**
 * Phonogram German
 * ==================
 *
 * The phonogram phonetic encoding algorithm for the German language.
 */
import exceptions from './exceptions';
import {POETIC_RULES} from './rules';
import {createPoetic, createPoeticCode} from '../factories';

const poeticCode = createPoeticCode({
  rules: POETIC_RULES,
  exceptions
});

const poetic = createPoetic(poeticCode);

export {poetic, poeticCode};
