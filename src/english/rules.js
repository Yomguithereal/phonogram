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

    // Initial "any" is pronounced *ɛni*
    [/any/, 'ɛni', INITIAL],

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
    [/a(?=ry)/, 'ɛ'],

    // Before a consonant & followed by a "e", "a" is pronounced *ɛj*
    [/a(?=[cgklmnpt]e)/, 'ɛj'],
    [/a(?=mi)/, 'ɛj', /./],

    // Before a wall, "a" is pronounced *a*
    [`a(?=${WALL}|o)`, 'a'],

    // Else, "a" is pronounced *ɛ*
    [null, 'ɛ']
  ],

  //-- (b)
  //----------------------------------------------------------------------------
  b: [

    // "bble" is pronounced *bʌl*
    ['bble', 'bʌl'],

    // Double "b" is squeezed
    ['bb', 'b'],

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

    // "ch" before a consonant is pronounced *k*
    [`ch(?=[^${VOWELS}])`, 'k'],

    // "ch" is pronounced *tʃ*
    ['ch', 'tʃ'],

    // "ck" is pronounced *k*
    ['ck', 'k'],

    // Before some vowels, "c" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    [null, 'k']
  ],

  //-- (d)
  //----------------------------------------------------------------------------
  d: [

    // "ddle" is pronounced *dʌl*
    ['ddle', 'dʌl'],

    // "dd" is squeezed
    ['dd', 'd'],

    [null, 'd']
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
    [/en(?=s?$)/, 'ʌn', /[dtv]$/],

    // Final "e" is seldom pronounced
    [/e$/, ''],
    [/es$/, 's', /t$/],
    [/es$/, 'iz', /(?:sh|[cs])$/],
    [/es$/, 'z'],

    // Final "el" is pronounced *ʌl*
    [/el(?=s?$)/, 'ʌl'],

    // Sometimes, final "ed" does not pronounced "e"
    [/ed$/, 'd', /(ll|[gnr])$/],

    // Sometimes, in the middle of a word, the "e" can be silent
    [/e(?=s.)/, '', /[mt]/],

    // "ew" is pronounced *ju* or *u*
    ['ew', 'ju', /(?:[^k]|^)(?:ph|[bdfmn])/],
    ['ew', 'u'],

    // "eye" is pronounced *aj*
    ['eye', 'aj'],

    // "ee" is pronounced *i*
    ['ee', 'i'],

    // Final "ey" is pronounced *ɛ* after some consonants
    [/ey$/, 'ɛ', /(?:th|[bhv])/],

    // "ea" is sometimes pronounced *ɛ*
    ['ea', 'ɛ', /(?:[bdpt]r|[hw])/],

    // "ea|ey" is pronounced *i*
    [/e[ay]/, 'i'],

    // "eipt" is pronounced *it*
    ['eipt', 'it'],

    // "eir" is pronounced *ɛr*
    ['eir', 'ɛr'],

    // "ei" is pronounced *i*
    ['ei', 'i'],

    // Before doubled consonants, "e" is pronounced *ɛ*
    [`e(?=([^${VOWELS}])\\1)`, 'ɛ'],

    // Sometimes "e" is pronounced *ɛ*
    [`e(?=qu(?!a)|st|[kln]|c[^${VOWELS}]|m(?![${VOWELS}])|ts?$)`, 'ɛ'],

    // Before "r", "e" is pronounced *ʌ*
    [/e(?=r(?!o))/, 'ʌ'],

    // Before "n" and some other consonants, "e" is pronounced *ɛ*
    [/en(?=[dt])/, 'ɛn'],

    // Else, "e" is pronounced *i*
    [null, 'i']
  ],

  //-- (f)
  //----------------------------------------------------------------------------
  f: [

    // Final "ful" is pronounced *ful*
    [/ful$/, 'ful'],

    // "ff" is squeezed
    ['ff', 'f'],

    [null, 'f']
  ],

  //-- (g)
  //----------------------------------------------------------------------------
  g: [

    // "gh" is pronounced *g*
    ['gh', 'g'],

    // "gr" before "e" is pronounced *gʌr*
    [/gr(?=es?$)/, 'gʌr'],

    // "gg" before "e" is pronounced *dʒ*
    [/gg(?=e)/, 'dʒ'],

    // "gg" is pronounced *g*
    ['gg', 'g'],

    // "gu" before some vowels
    [/gu(?=a)/, 'gw'],

    // Before some vowels "g" is pronounced *dʒ*
    [/geo(?=r)/, 'dʒɔ'],
    [/g(?=[ey](?!d))/, 'dʒ'],

    // Else "g" is pronounced *g*
    [null, 'g']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // Initial "i" before some consonants is pronounced *i*
    [/i(?=n)/, 'i', INITIAL],

    // Final "ify" is pronounced *ifaj*
    [/ify$/, 'ifaj'],

    // Final "il" is pronounced *ʌl* after "v"
    [/il$/, 'ʌl', 'v'],

    // Final "ies" is pronounced *ajz*
    [/ies$/, 'ajz'],

    // Final "igh" is pronounced *aj*
    [/igh(?=s?$)/, 'aj'],

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
    [`i(?=gr|[^${VOWELS}]e|o(?!u))`, 'aj'],

    // "i" before some vowels is pronounced *j*
    [/i(?=a|ou)/, 'j'],

    // "i" before some consonants is pronounced *ʌ*
    [/i(?=rst|rth|rd|r$)/, 'ʌ'],

    // "ie" is pronounced *i*
    ['ie', 'i'],

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

    // Final "ought" is prounounced *ɔt*
    [/ought(?=s?$)/, 'ɔt'],

    // Final "o" is pronounced *o*
    [/o$/, 'o'],

    // "oft(en)" is pronounced *ɔf*
    [/oft(?=en)/, 'ɔf'],

    // "one" is sometimes pronounced *wan*
    [/one/, 'wan', `(?:^$|[${VOWELS}]$)`],

    // "ouse" is pronounced *aʊs* sometimes
    [/ous(?=[ei])/, 'aʊs', /[hm]/],

    // "ou" before "t" is pronounced *aʊ*
    [/ou(?=t)/, 'aʊ'],

    // "ous" is pronounced *ʌs*
    [/ous/, 'ʌs'],
    [/ou(?=ce)/, 'ɔ'],

    // "oin" is generally pronounced *ɔjn*
    [/oin(?!g)/, 'ɔjn', 'her', NEGATIVE],

    // "ounge" is sometimes pronounced *aʊdʒ*
    [/ounge/, 'aʊdʒ', /(?:scr|l)$/],

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

    // In "rh", the "h" is silent
    ['rh', 'r'],

    [null, 'r']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // Final "shire" is pronounced *ʃʌr*
    [/shire$/, 'ʃʌr', /.$/],

    // Final "sm" is pronounced *zʌm* after some vowels
    [/sm$/, 'zʌm', /[ai]/],

    // "sc" before an "i" is pronounced *s*
    [/sc(?=i)/, 's'],

    // Double "s" is squeezed
    ['ss', 's'],

    // After some consonants, "s" is pronounced *z*
    ['s', 'z', /g$/],

    // "stle" is pronounced "sʌl"
    [/stle(?=s?$)/, 'sʌl'],
    [/stl/, 'sl'],

    // "sh" is pronounced *ʃ*
    ['sh', 'ʃ'],

    // Plural "s" is sometimes pronounced *z*
    [/s$/, 'z', /(?:eye|ew|gh|[bdlmnr])$/],

    // "between" two vowels, "s" is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${A + I + O + U}]$`],

    [null, 's']
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // Final "th" is pronounced *θ*
    [/th$/, 'θ'],

    // Initial "th" for various words
    [/th(?=(?:emselves|emself|yself|eirs?|ese|ine|ose|at|ee|em|ey|is|y)$)/, 'ð', INITIAL],

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

    // "ush" after "b" and "p" is pronounced *u*
    [/u(?=sh)/, 'u', /[bp]/],

    // "ussi" before "a" is pronounced *ʌʃ*
    [/ussi(?=a)/, 'ʌʃ'],

    // "uss" after some consonants is pronounced *u*
    [/u(?=ss)/, 'u', /[pw]/],

    // "ue" is pronounced *u* or *ju*
    ['ue', 'ju', /[bch]$/],
    ['ue', 'u'],

    // "u" is pronounced *ju* after a non-initial "p"
    ['u', 'ju', /.p$/],

    // Before "m" or "n", "u" is pronounced *ʌ*
    [/u(?=[mn])/, 'ʌ'],

    [null, 'ʌ']
  ],

  //-- (w)
  //----------------------------------------------------------------------------
  w: [

    // "warwick" is pronounced *worik*
    ['warwick', 'worik'],

    // "wh" is pronounced *w*
    ['wh', 'w'],

    // "wr" is pronounced *r*
    ['wr', 'r'],

    [null, 'w']
  ],

  //-- (y)
  //----------------------------------------------------------------------------
  y: [

    // Final "ye" is pronounced *aj*
    [/ye$/, 'aj'],

    // In a three letters or less word, "y" is pronounced *aj*
    [/y$/, 'aj', /^.{1,2}$/],

    // Before another vowel, "y" is pronounced *j*
    [/y(?=m[aei]|[ais])/, 'aj'],
    [`y(?=[${VOWELS}])`, 'j'],

    // As a vowel, "y" is pronounced *i*
    [null, 'i']
  ],

  //-- (z)
  //----------------------------------------------------------------------------
  z: [

    // "zzle" is prounced *zʌl*
    ['zzle', 'zʌl'],

    // "zz" is squeezed
    ['zz', 'z'],

    [null, 'z']
  ]
});
