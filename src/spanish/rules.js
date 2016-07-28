/**
 * Phonogram Spanish rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of Spanish words.
 */
import {compileRules, INITIAL, NEGATIVE} from '../helpers';

/**
 * Vowel definitions.
 */
export const A = 'aá';
export const E = 'eé';
export const I = 'ií';
export const O = 'oó';
export const U = 'uúü';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (á)
  //----------------------------------------------------------------------------
  á: 'a',

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // "ch" before a "t" is pronounced *ʃ*
    [/ch(?=t)/, 'ʃ'],

    // "ch" is generally pronounced *tʃ*
    ['ch', 'tʃ'],

    // "c" before "e", "i" or "y" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    // Else, "c" is pronounced *k*
    [null, 'k']
  ],

  //-- (é)
  //----------------------------------------------------------------------------
  é: 'e',

  //-- (g)
  //----------------------------------------------------------------------------
  g: [

    // "gua" is pronounced *gwa*
    ['gua', 'gwa'],

    // "gü" is pronounced *gw*
    ['gü', 'gw'],

    // "gu" is pronounced *g*
    ['gu', 'g'],

    // "g" before "e", "i" or "y" is pronounced *x*
    [`g(?=[${E + I + Y}])`, 'x']
  ],

  //-- (h)
  //----------------------------------------------------------------------------
  h: [

    // "h" should be kept for syllabification reason after some prefixes
    [`h(?=[${VOWELS}])`, 'h', /^(?:contra|tras|enre|que|des|re)$/],

    // Else, the "h" is silent
    [null, '']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // "i" before a vowel (not y) is pronounced *j*
    [`i(?=[${A + E + U + O}])`, 'j']
  ],

  //-- (í)
  //----------------------------------------------------------------------------
  í: 'i',

  //-- (j)
  //----------------------------------------------------------------------------
  j: 'x',

  //-- (l)
  //----------------------------------------------------------------------------
  l: [

    // "ll" is pronounced *j*
    ['ll', 'j']
  ],

  //-- (ñ)
  //----------------------------------------------------------------------------
  ñ: 'nj',

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // Initial "oa" is pronounced *wa*
    ['oa', 'wa', INITIAL]
  ],

  //-- (ó)
  //----------------------------------------------------------------------------
  ó: 'o',

  //-- (p)
  //----------------------------------------------------------------------------
  p: [

    // Initial "ps" is pronounced *s*
    ['ps', 's', INITIAL],

    // Archaic "ph" is pronounced *f*
    ['ph', 'f']
  ],

  //-- (q)
  //----------------------------------------------------------------------------
  q: [

    // "q" & "qu" is pronounced *k*
    [/qu?/, 'k']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // "sh" is generally pronounced *ʃ*
    ['sh', 'ʃ', /^(?:tra|de)$/, NEGATIVE]
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // "tz" is pronounced *ts*
    ['tz', 'ts'],

    // Final "tl" is pronounced *tel*
    [/tl$/, 'tel']
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // "ua", "ue" & "ui" are pronounced *wa*, *we* & *wi* respectively
    [`u(?=[${A + E + I}])`, 'w']
  ],

  //-- (ü)
  //----------------------------------------------------------------------------
  ü: 'u',

  //-- (ú)
  //----------------------------------------------------------------------------
  ú: 'u',

  //-- (x)
  //----------------------------------------------------------------------------
  x: [

    // Before "ca", "x" is pronounced *s* if not before an initial "ex"
    [/x(?=ca)/, 's', /^e$/, NEGATIVE],

    // Before a "e" or a "i", initial "x" is pronounced *s*
    [`x(?=[${E + I}])`, 's', INITIAL],

    // "x" is generally pronounced *ks*
    [null, 'ks']
  ],

  jotaX: 'x',

  // Note: it seems that in some cases it might even be pronounced *s*.
  nahuatlX: 'ʃ',

  //-- (y)
  //----------------------------------------------------------------------------
  y: 'j',

  //-- (z)
  //----------------------------------------------------------------------------
  z: 's'
});

// b -> v for standard, not poetic? ceviche
// drop h for standard
