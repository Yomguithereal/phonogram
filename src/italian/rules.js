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
export const U = 'uù';
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

  //-- (b)
  //----------------------------------------------------------------------------
  b: [

    // "bb" is squeezed
    ['bb', 'b'],

    [null, 'b']
  ],

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // "ch" is pronounced *k*
    ['ch', 'k'],

    // Before "e" or "i", "c" is pronounced *tʃ*
    [/cc?i(?=a)/, 'tʃ'],
    [/cc?(?=[ei])/, 'tʃ'],

    // "cc" is squeezed
    ['cc', 'k'],

    [null, 'k']
  ],

  //-- (d)
  //----------------------------------------------------------------------------
  d: [

    // "dd" is squeezed
    ['dd', 'd'],

    [null, 'd']
  ],

  //-- (f)
  //----------------------------------------------------------------------------
  f: [

    // "ff" is squeezed
    ['ff', 'f'],

    [null, 'f']
  ],

  //-- (g)
  //----------------------------------------------------------------------------
  g: [

    // "gn" is pronounced *nj*
    ['gn', 'nj'],

    // "gl" before "i" is pronounced *l*
    [/gl(?=i)/, 'l'],

    // "gh" is pronounced *g*
    ['gh', 'g'],

    // "g" before some vowels is pronounced *ʒ*
    [`gg?i(?=[${VOWELS}])`, 'dʒ'],
    [/gg?(?=[ei])/, 'dʒ'],

    // "gg" is squeezed
    ['gg', 'g'],

    [null, 'g']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // Before another vowel but after a "r", "i" is pronounced *ij*
    [`i(?=[${VOWELS}])`, 'ij', /r$/],

    // Before another vowel, "i" is pronounced *j*
    [`i(?=[${VOWELS}])`, 'j'],

    [null, 'i']
  ],

  //-- (n)
  //----------------------------------------------------------------------------
  n: [

    // "nn" is squeezed
    ['nn', 'n'],

    [null, 'n']
  ],

  //-- (p)
  //----------------------------------------------------------------------------
  p: [

    // "pp" is squeezed
    ['pp', 'p'],

    [null, 'p']
  ],

  //-- (q)
  //----------------------------------------------------------------------------
  q: [

    // "qu" is pronounced *kw*
    ['qu', 'kw'],

    [null, 'k']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // "ss" is squeezed
    ['ss', 's'],

    [null, 's']
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // "tt" is squeezed
    ['tt', 't'],

    [null, 't']
  ],

  // (ù)
  //----------------------------------------------------------------------------
  ù: 'u',

  //-- (v)
  //----------------------------------------------------------------------------
  v: [

    // "vv" is squeezed
    ['vv', 'v'],

    [null, 'v']
  ],

  //-- (z)
  //----------------------------------------------------------------------------
  z: [

    // "zz" is pronounced *ts*
    ['zz', 'ts'],

    // Before some letters, "z" is pronounced *ts*
    [/z(?=[io])/, 'ts'],

    // Else is pronounced *dz*
    [null, 'dz']
  ]
});
