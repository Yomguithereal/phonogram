/**
 * Phonogram English rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of English words.
 */
import {compileRules, INITIAL} from '../helpers';

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

    // "eight" is pronounced *ɛjt*
    ['eight', 'ɛjt'],

    // "ea" before "s" is pronounced *ɛ*
    [/ea(?=s)/, 'ɛ'],

    // Else it is pronounced *i*
    [/ea/, 'i'],

    // "ew" is pronounced *ju*
    [/ew/, 'ju'],

    // "ee" is pronounced *i*
    [/ee/, 'i'],

    // Final "er" is pronounced *ə*
    [/er$/, 'ə'],

    // Final "e" is seldom pronounced
    [/e$/, ''],

    // "e" is pronounced *i*
    [null, 'i']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // Final "ire" is pronounced *ajə*
    [/ire$/, 'ajə'],

    // "ie" is pronounced *i*
    ['ie', 'i'],

    [null, 'i']
  ],

  //-- (j)
  //----------------------------------------------------------------------------
  j: 'dʒ',

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // "o" before "th" is pronounced *ʌ*
    [/o(?=th)/, 'ʌ'],

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

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // "th" between two vowels is pronounced *ð*
    [`th(?=[${VOWELS}])`, 'ð', `[${VOWELS}]$`],

    // At the end of the word or before a consonant, "th" is pronounced *θ*
    [`th(?=$|[^${VOWELS}])`, 'θ'],

    // Else it is simply pronounced *t*
    [null, 't']
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // "ue" is pronounced *u*
    ['ue', 'u']
  ],

  //-- (w)
  //----------------------------------------------------------------------------
  w: [

    // "wr" before a vowel is pronounced *r*
    [`wr(?=[${VOWELS}])`, 'r'],

    // "w" is pronounced *w*
    [null, 'w']
  ],

  //-- (y)
  //----------------------------------------------------------------------------
  y: 'i',

  //-- (z)
  //----------------------------------------------------------------------------
  z: [

    // "zz" is squeezed
    ['zz', 'z']
  ]
});
