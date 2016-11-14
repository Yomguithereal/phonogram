/**
 * Phonogram English rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of English words.
 */
import {compileRules} from '../helpers';

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
export const WALL = `(?:[^${VOWELS}][^${E}]|[^${VOWELS}]{2}|[^${VOWELS}]?$)`;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // Before a wall, "a" is pronounced *a*
    [`a(?=${WALL})`, 'a'],

    // Else, "a" is pronounced *ɛj*
    [null, 'ɛj']
  ],

  //-- (e)
  //----------------------------------------------------------------------------
  e: [

    // Final "e" is seldom pronounced
    [/e$/, ''],

    // Before a final "t", "e" is prounounced *ɛ*
    [/e(?=ts?$)/, 'ɛ'],

    // Before "tr", "e" is pronounced *e*
    [/e(?=tr)/, 'e'],

    // Else, "e" is pronounced *i*
    [null, 'i']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // Before a wall, "i" is pronounced *i*
    [`i(?=${WALL})`, 'i'],

    // Else, "i" is pronounced *aj*
    [null, 'aj']
  ],

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // Before a wall, "o" is pronounced *ɔ*
    [`o(?=${WALL})`, 'ɔ'],

    // Else, "o" is pronounced *oʊ*
    [null, 'oʊ']
  ],

  //-- (y)
  //----------------------------------------------------------------------------
  y: [

    // As a vowel, "y" is pronounced *i*
    [null, 'i']
  ]
});

// myths -> simplification
// ə -> er for harmonization
// drop ʊ for harmonization
