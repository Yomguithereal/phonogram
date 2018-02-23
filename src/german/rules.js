/* eslint quote-props: 0 */
/**
 * Phonogram German rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of German words.
 */
import {compileRules, INITIAL, NEGATIVE} from '../helpers';

/**
 * Vowel definitions.
 */
export const A = 'a';
export const E = 'e';
export const I = 'i';
export const O = 'o';
export const U = 'uü';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (ß)
  //----------------------------------------------------------------------------
  ß: 's',

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // "ue" is pronounced *y*
    ['ue', 'y'],

    [null, 'u']
  ],

  //-- (ü)
  //----------------------------------------------------------------------------
  ü: 'y'
});
