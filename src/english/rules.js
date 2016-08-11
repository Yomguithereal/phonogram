/**
 * Phonogram English rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of English words.
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
export const WALL = `[^${VOWELS}]{2}`;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // Before a wall, "a" is pronounced *a*
    [`a(?=${WALL})`, 'a'],

    // Free, "a" is pronounced *ɛj*
    [null, 'ɛj']
  ],

  //-- (e)
  //----------------------------------------------------------------------------
  e: [

    // Final "e" is seldom pronounced
    [/e$/, ''],

    // "e" is pronounced *i*
    [null, 'i']
  ],

  //-- (j)
  //----------------------------------------------------------------------------
  j: 'dʒ',

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // "oo" is pronounced *u*
    ['oo', 'u']
  ],

  //-- (z)
  //----------------------------------------------------------------------------
  z: [

    // "zz" is squeezed
    ['zz', 'z']
  ]
});
