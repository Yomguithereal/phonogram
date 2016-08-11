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

    // "ate" is pronounced *ɛjt*
    ['ate', 'ɛjt']
  ],

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // "cious" is pronounced *ʃʌs*
    ['cious', 'ʃʌs'],

    // "ch" is pronounced *tʃ*
    ['ch', 'tʃ'],

    // Else it's pronounced *k*
    [null, 'k']
  ],

  //-- (e)
  //----------------------------------------------------------------------------
  e: [

    // "ea" before "s" is pronounced *ɛ*
    [/ea(?=s)/, 'ɛ'],

    // Else it is pronounced *i*
    [/ea/, 'i'],

    // "ee" is pronounced *i*
    [/ee/, 'i'],

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

  //-- (p)
  //----------------------------------------------------------------------------
  p: [

    // "ph" is pronounced *f*
    ['ph', 'f']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // Initial "s" is pronounced *s*
    ['s', 's', INITIAL],

    // "s" after a vowel & before a "u" is pronounced *ʒ*
    [/s(?=u)/, 'ʒ', `[${VOWELS}]$`],

    // "s" between two vowel is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${VOWELS}]$`]
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // "u" before a "r" or "s" is pronounced *ʌ*
    [/u(?=[rs])/, 'ʌ'],

    // "ue" is pronounced *u*
    ['ue', 'u']
  ],

  //-- (z)
  //----------------------------------------------------------------------------
  z: [

    // "zz" is squeezed
    ['zz', 'z']
  ]
});
