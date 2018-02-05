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
export const VOWELS_WITHOUT_E = A + I + O + U + Y;

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

    // Final "augh(a)n" is pronounced *ɔn*
    [/augha?n$/, 'ɔn'],

    // Before "w(e)", "a" is pronounced *o*
    [/awe?/, 'o'],

    // Before "ll", "a" is pronounced *ɔ*
    [/a(?=ll|ls?$)/, 'o'],

    // Before "ai" & "ay" is pronounced *ɛj*
    [/ay$/, 'ɛ'],
    [/ai(?=r)/, 'ɛ'],
    [/a[iy]/, 'ɛj'],

    // Before "nd", "a" is pronounced *ɛ*
    [/a(?=nd|ry)/, 'ɛ'],

    // Before a consonant & followed by a "e", "a" is pronounced *ɛj*
    [/a(?=[cgklmnpt]e)/, 'ɛj'],

    // Before a wall, "a" is pronounced *a*
    [`a(?=${WALL})`, 'a'],

    // Else, "a" is pronounced *ɛ*
    [null, 'ɛ']
  ],

  //-- (b)
  //----------------------------------------------------------------------------
  b: [

    // Final "ble" is pronounced *bʌl*
    [/bl(?=es?$)/, 'bʌl'],

    [null, 'b']
  ],

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // "cester" is pronounced *stʌr*
    ['cester', 'stʌr'],

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
    [/er(?=s?$)/, 'ʌr'],

    // Final "ese" is pronounced *iz*
    [/ese$/, 'iz'],

    // Final "ern" is prounounced *ʌrn*
    [/ern(?=s?$)/, 'ʌrn'],
    [/en(?=s?$)/, 'ʌn'],

    // Final "e" is seldom pronounced
    [/e$/, ''],
    [/es$/, 'z'],

    // Sometimes, in the middle of a word, the "e" can be silent
    [/e(?=s.)/, '', /[mt]/],

    // "ew" is pronounced *ju* or *u*
    ['ew', 'ju', /(?:[^k]|^)(?:ph|[bdfmn])/],
    ['ew', 'u'],

    // "ee" is pronounced *i*
    ['ee', 'i'],

    // "ea|ey" is pronounced *i*
    [/e[ay]/, 'i'],

    // "eipt" is pronounced *it*
    ['eipt', 'it'],

    // "ei" is pronounced *i*
    ['ei', 'i'],

    // Before a final "t", "e" is prounounced *ɛ*
    [/e(?=ts?$)/, 'ɛ'],

    // Before doubled consonants, "e" is pronounced *ɛ*
    [/e(?=ll|rr|ss|tt)/, 'ɛ'],

    // Before some consonants, "e" is pronounced *ɛ*
    [/e(?=st|[ln])/, 'ɛ'],

    // Before "r", "e" is pronounced *ʌ*
    [/e(?=r)/, 'ʌ'],

    // Before "n" and some other consonants, "e" is pronounced *ɛ*
    // TODO: valid?
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
    [/geo(?=r)/, 'dʒɔ'],
    [/g(?=[ey])/, 'dʒ'],

    // Else "g" is pronounced *g*
    [null, 'g']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // Initial "i" before some consonants is pronounced *i*
    [/i(?=n)/, 'i', INITIAL],

    // Final "ind" is pronounced *ajnd* after some consonants
    [/ind/, 'ajnd', /(?:bl|gr|[bfkm])$/],

    // Final "ire" is pronounced *ajʌr*
    [/ire(?=s?$)/, 'ajʌr'],

    // "ight" is pronounced *ajt*
    ['ight', 'ajt'],

    // "ious" is pronounced *jʌs*
    ['ious', 'jʌs'],

    // Before a consonant and a vowel, "i" is pronounced *aj*
    [/i(?=ves?$)/, 'i', /[lt]/],
    [`i(?=[^${VOWELS}]e|o(?!u))`, 'aj'],

    // "i" before some vowels is pronounced *j*
    [/i(?=a|ou)/, 'j'],

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

  //-- (m)
  //----------------------------------------------------------------------------
  m: [

    // Double "m" is squeezed
    ['mm', 'm'],

    [null, 'm']
  ],

  //-- (n)
  //----------------------------------------------------------------------------
  n: [

    // Double "n" is squeezed
    ['nn', 'n'],

    [null, 'n']
  ],

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // Final "omb" is pronounced *umb* after some letters
    [/omb(?=s?$)/, 'umb', /[tw]/],

    // Final "o" is pronounced *o*
    [/o$/, 'o'],

    // "ous" is pronounced *ʌs*
    ['ous', 'ʌs'],

    // "ou" before "n" is pronounced *ʌ*
    [/ou(?=n)/, 'ʌ'],

    // "ow" is pronounced *o*
    ['ow', 'o'],

    // "oa" is pronounced *o*
    ['oa', 'o'],

    // "oo" is pronounced *o* if in "door" words
    ['oo(?=r)', 'ɔ', /^d/],

    // "oo" is pronounced *u*
    ['oo', 'u'],

    // "oy" is pronounced *ɔj*
    ['oy', 'ɔj'],

    // Before a wall, "o" is pronounced *ɔ*
    [/o(?=gr)/, 'o'],
    [`o(?=${SOFT_WALL}|[mr])`, 'ɔ', /e$/, NEGATIVE],

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

  //-- (r)
  //----------------------------------------------------------------------------
  r: [

    // Double "r" is squeezed
    ['rr', 'r'],

    [null, 'r']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // "sc" before an "i" is pronounced *s*
    [/sc(?=i)/, 's'],

    // Double "s" is squeezed
    ['ss', 's'],

    // "stle" is pronounced "sʌl"
    [/stle(?=s?$)/, 'sʌl'],
    [/stl/, 'sl'],

    // "sh" is pronounced *ʃ*
    ['sh', 'ʃ'],

    // Plural "s" is sometimes pronounced *z*
    [/s$/, 'z', `(?:[bdnr]|ew)$`],

    // "between" two vowels, "s" is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${VOWELS_WITHOUT_E}]$`],

    [null, 's']
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // Initial "th" for various words
    [/th(?=(?:is|at|ese|ose)$)/, 'ð', INITIAL],

    // Initial "thom"
    [/th(?=om)/, 't', INITIAL],

    // Initial "th" is usually pronounced *θ*
    [/th/, 'θ', INITIAL],

    // Final "two" is pronounced *tu*
    [/two$/, 'tu'],

    // "tch" is pronounced *tʃ*
    ['tch', 'tʃ'],

    // "tion" is pronounced *ʃʌn*
    ['tion', 'ʃʌn'],

    [null, 't']
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // Leading "u" is sometimes pronounced *ju*
    [/u(?=niqu|nivers)/, 'ju', INITIAL],

    // "u" between some letters is pronounced *ju*
    // TODO

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

    // Before another vowel, "y" is pronounced *j*
    [`y(?=[${VOWELS}])`, 'j'],

    // As a vowel, "y" is pronounced *i*
    [null, 'i']
  ]
});
