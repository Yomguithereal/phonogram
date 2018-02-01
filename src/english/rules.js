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

// The wall is either:
//   1) a consonant followed by a non-e vowel
//   2) two consonants
//   3) the end of the word preceded by an optional vowel
export const WALL = `(?:[^${VOWELS}][^${E}]|[^${VOWELS}]{2}|[^${VOWELS}]?$)`;
export const SOFT_WALL = `(?:[^${VOWELS}]{2}|[^${VOWELS}]?$)`;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // Before "w(e)", "a" is pronounced *o*
    [/awe?/, 'o'],

    // Before "ll", "a" is pronounced *ɔ*
    [/a(?=ll)/, 'o'],

    // Before "ai" & "ay" is pronounced *ɛj*
    [/ay$/, 'ɛ'],
    [/a[iy]/, 'ɛj'],

    // Before a wall, "a" is pronounced *a*
    [`a(?=${WALL})`, 'a'],

    // Before a consonant & followed by a "e", "a" is pronounced *ɛj*
    [`a(?=[cklmnpt]e)`, 'ɛj'],

    // Else, "a" is pronounced *ɛ*
    [null, 'ɛ']
  ],

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // Initial "cu" is pronounced *kju*
    [/cu(?:e$)?/, 'kju', INITIAL],

    // "ch" is pronounced *tʃ*
    ['ch', 'tʃ'],

    // "ck" is pronounced *k*
    ['ck', 'k'],

    // Before some vowels, "c" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    [null, 'k']
  ],

  //-- (e)
  //----------------------------------------------------------------------------
  e: [

    // Final "er" is pronounced *ʌr*
    [/er$/, 'ʌr'],
    [/ers$/, 'ʌz'],

    // Final "ern" is prounounced *ʌrn*
    [/ern$/, 'ʌrn'],
    [/erns$/, 'ʌrnz'],

    // Final "e" is seldom pronounced
    [/e$/, ''],
    [/es$/, 'z'],

    // "ew" is pronounced *ju* or *u*
    ['ew', 'ju', /(?:[^k]|^)[bdfmn]/],
    ['ew', 'u'],

    // "ee" is pronounced *i*
    ['ee', 'i'],

    // "ea" is pronounced *i*
    ['ea', 'i'],

    // "eipt" is pronounced *it*
    ['eipt', 'it'],

    // "ei" is pronounced *i*
    ['ei', 'i'],

    // Before a final "t", "e" is prounounced *ɛ*
    [/e(?=ts?$)/, 'ɛ'],

    // Before some consonants, "e" is pronounced *ɛ* or *e*
    [/e(?=n)/, 'e', INITIAL],
    [/e(?=[lr])/, 'ɛ'],

    // Before "tr", "e" is pronounced *e*
    [/e(?=tr)/, 'e'],

    // Before "n" and some other consonants, "e" is pronounced *ɛ*
    [/en(?=[dt])/, 'ɛn'],

    // Else, "e" is pronounced *i*
    [null, 'i']
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

    // "gg" is pronounced *g*
    ['gg', 'g'],

    // Before some vowels "g" is pronounced *dʒ*
    [/g(?=y)/, 'dʒ'],

    // Else "g" is pronounced *g*
    [null, 'g']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // Final "ire" is pronounced *ajʌr*
    [/ire$/, 'ajʌr'],
    [/ires$/, 'ajʌrz'],

    // "ight" is pronounced *ajt*
    ['ight', 'ajt'],

    // "ious" is pronounced *jus*
    ['ious', 'jus'],

    // Before a consonant and a vowel, "i" is pronounced *aj*
    [`i(?=[^${VOWELS}]e|o(?!u))`, 'aj'],

    // "i" before some vowels is pronounced *j*
    [`i(?=a|ou)`, 'j'],

    // Else, "i" is pronounced *aj*
    [null, 'i']
  ],

  //-- (j)
  //----------------------------------------------------------------------------
  j: 'dʒ',

  //-- (k)
  //----------------------------------------------------------------------------
  k: [

    // "kn" is pronounced *n*
    ['kn', 'n'],

    [null, 'k']
  ],

  //-- (l)
  //----------------------------------------------------------------------------
  l: [

    // "ll" is squeezed
    ['ll', 'l'],

    [null, 'l']
  ],

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // Final "o" is pronounced *o*
    [/o$/, 'o'],

    // "ous" is pronounced *us*
    ['ous', 'us'],

    // "ow" is pronounced *o*
    ['ow', 'o'],

    // "oa" is pronounced *o*
    ['oa', 'o'],

    // "oo" is pronounced *u*
    ['oo', 'u'],

    // "oy" is pronounced *ɔj*
    ['oy', 'ɔj'],

    // Before a wall, "o" is pronounced *ɔ*
    [`o(?=${SOFT_WALL}|r)`, 'ɔ'],

    // Else, "o" is pronounced *o*
    [null, 'o']
  ],

  //-- (p)
  //----------------------------------------------------------------------------
  p: [

    // "ph" is pronounced *f*
    ['ph', 'f'],

    [null, 'p']
  ],

  //-- (q)
  //----------------------------------------------------------------------------
  q: [

    // Final "que" is pronounced *k*
    [/que$/, 'k'],

    // "qu" is pronounced *kw*
    ['qu', 'kw'],

    // Else "q" is pronounced *k*
    [null, 'k']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // "stle" is pronounced "søl"
    ['stle', 'sʌl'],

    // "sh" is pronounced *ʃ*
    ['sh', 'ʃ'],

    // "between" two vowels, "s" is pronounced *z*
    [/s$/, 'z', `(?:[${VOWELS}n]|ew)$`],
    [`s(?=[${VOWELS}])`, 'z', `[${VOWELS}]$`],

    [null, 's']
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // Final "two" is pronounced *tu*
    [/two$/, 'tu'],

    // "tion" is pronounced *ʃʌn*
    ['tion', 'ʃʌn'],

    [null, 't']
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // Leading "u" is sometimes pronounced *ju*
    [/u(?=niqu|nivers)/, 'ju', INITIAL],

    // "ue" is pronounced *ue*
    ['ue', 'u'],

    // Before "m" or "n", "u" is pronounced *ʌ*
    [/u(?=[mn])/, 'ʌ'],

    [null, 'ʌ']
  ],

  //-- (w)
  //----------------------------------------------------------------------------
  w: [

    // "wh" is pronounced *w*
    ['wh', 'w'],

    // "wr" is pronounced *r*
    ['wr', 'r'],

    [null, 'w']
  ],

  //-- (y)
  //----------------------------------------------------------------------------
  y: [

    // As a vowel, "y" is pronounced *i*
    [null, 'i']
  ]
});
