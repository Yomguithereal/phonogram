/* eslint quote-props: 0 */
/**
 * Phonogram Italian rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of Italian words.
 */
import {compileRules, INITIAL, NEGATIVE} from '../helpers';

/**
 * Vowel definitions.
 */
export const A = 'a';
export const E = 'e';
export const I = 'i';
export const O = 'o';
export const U = 'u';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // "au" is pronounced *aʊ*
    ['au', 'aʊ'],

    [null, 'a']
  ],

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // "ch" is pronounced *k*
    ['ch', 'k'],

    // Before "e" or "i", "c" is pronounced *tʃ*
    [/c(?=[ei])/, 'tʃ'],

    [null, 'k']
  ],

  //-- (g)
  //----------------------------------------------------------------------------
  g: [

    // "gn" is pronounced *nj*
    ['gn', 'nj'],

    [null, 'ʒ']
  ],

  //-- (z)
  //----------------------------------------------------------------------------
  z: 'ts'
});
