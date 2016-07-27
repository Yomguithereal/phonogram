/**
 * Phonogram French rules
 * =======================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of French words.
 */
import {compileRules, INITIAL} from '../helpers';

export const A = 'aàâ';
export const E = 'eéèë';
export const I = 'iï';
export const O = 'oôü';
export const U = 'uü';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;

export const POETIC_RULES = compileRules({

  //-- A
  //----------------------------------------------------------------------------
  a: [

    // "aing" & "ain" are pronounced *ẽ*
    [/aing?/, 'ẽ'],

    // Final "aim" is pronounced *ẽ*
    [/aim$/, 'ẽ'],

    // "aon" is always pronounced *ã*
    ['aon', 'ã'],

    // Final "anc" is pronounced *ã*
    [/anc$/, 'ã'],

    // Final "ant" is pronounced *ã*
    [/ant$/, 'ã'],

    // "an" is pronounced *ã*
    [`an(?=[^${VOWELS}n]|$)`, 'ã'],

    // "am" before "b" or "p" is pronounced *ã*
    [/am(?=[bp])/, 'ã'],

    // "ai" is generally pronounced *ɛ*
    ['ai', 'ɛ'],

    // "ay" before some posterior vowels is pronounced *ɛj*
    [/ay(?=[ao]n|e)/, 'ɛj'],

    // "au" is generally pronounced *o*
    ['au', 'o']
  ],

  //-- Â
  //----------------------------------------------------------------------------
  â: [
    [null, 'a']
  ],

  //-- C
  //----------------------------------------------------------------------------
  c: [

    // "ck" is pronounced *k*
    ['ck', 'k'],

    // "ch" before a consonant is always *k*
    [`ch(?=[^${VOWELS}])`, 'k'],

    // "ch" is generally pronounced "ʃ"
    ['ch', 'ʃ'],

    // "c" before "e", "i" or "y" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    // "c" before anything else is pronounced *k*
    [null, 'k']
  ],

  //-- E
  //----------------------------------------------------------------------------
  e: [

    // "eill" is pronounced *ej*
    ['eill', 'ej'],

    // Final "ein" is pronounced *ẽ*
    [/ein$/, 'ẽ'],

    // "eau" is pronounced *o*
    [/eaux?/, 'o'],

    // "eu" is pronounced *ø*
    [/eux?/, 'ø'],

    // Final "er" & "ez" is pronounced "é"
    [/e[rz]$/, 'é'],

    // Final "e" is not pronounced
    [/es?$/]
  ],

  //-- É
  //----------------------------------------------------------------------------
  é: [

    // Final "ée" is pronounced "é"
    [/ée$/, 'é']
  ],

  //-- È
  //----------------------------------------------------------------------------
  è: [

    // "è" is always pronounced *ɛ*
    [null, 'ɛ']
  ],

  //-- G
  //----------------------------------------------------------------------------
  g: [

    // "gnoi" is pronounced *nwa*
    ['gnoi', 'nwa'],

    // "gu" is pronounced *g*
    ['gu', 'g'],

    // "gn" is pronounced *nj*
    ['gn', 'nj'],

    // "g" before "e", "i" or "y" is pronounced *ʒ*
    [`g(?=[${E + I + Y}])`, 'ʒ']
  ],

  //-- H
  //----------------------------------------------------------------------------
  h: [

    // "h" is usually silent
    [null, '']
  ],

  //-- I
  //----------------------------------------------------------------------------
  i: [

    // "ill" after a vowel and not before a "i" is pronounced *ij*
    [/ill(?=[^i])/, 'ij', `[^${VOWELS}]`],

    // Final "ie" is pronounced *i*
    [/ie$/, 'i'],

    // "ien" is pronounced *jẽ*
    ['ien', 'jẽ'],

    // "i" before some vowels is pronounced *j*
    [`i(?=[${A + E + O + U}])`, 'j']
  ],

  //-- J
  //----------------------------------------------------------------------------
  j: [

    // "j" is always pronounced *ʒ*
    [null, 'ʒ']
  ],

  //-- L
  //----------------------------------------------------------------------------
  l: [

    // "ll" is squeezed
    ['ll', 'l', /.{2,}/]
  ],

  //-- N
  //----------------------------------------------------------------------------
  n: [

    // "nn" is squeezed
    ['nn', 'n']
  ],

  //-- O
  //----------------------------------------------------------------------------
  o: [

    // Final "oing" or "oint" is pronounced *wẽ*
    [/oin[gt]s?$/, 'wẽ'],

    // "oi" is pronounced *wa*
    [/oix?/, 'wa'],

    // Final "onc" is prononced *õ*
    [/onc$/, 'õ'],

    // "on" is prononced *õ*
    [`on(?=[^${VOWELS}n]|$)`, 'õ'],

    // "om" before "b" or "p" is pronounced *õ*
    [/om(?=[bp])/, 'õ'],

    // "oy" is pronounced *waj* before a and if the wor
    [/oy(?=[a])/, 'waj', /.+/],

    // "ou" is generally pronounced *u*
    ['oux?', 'u']
  ],

  //-- P
  //----------------------------------------------------------------------------
  p: [

    // "ph" is pronounced *f*
    ['ph', 'f']
  ],

  //-- Q
  //----------------------------------------------------------------------------
  q: [

    // "qu" is pronounced *k*
    ['qu', 'k']
  ],

  //-- R
  //----------------------------------------------------------------------------
  r: [

    // "rr" is squeezed
    ['rr', 'r'],

    // Final "rd" is pronounced *r*
    [/rd$/, 'r']
  ],

  //-- S
  //----------------------------------------------------------------------------
  s: [

    // "ss" is squeezed
    ['ss', 's'],

    // "sc" is pronounced *s*
    ['sc', 's'],

    // Initial "sh" is pronounced *ʃ*
    ['sh', 'ʃ', INITIAL],

    // Final "s" is not pronounced, except before a "è"
    [/s$/, '', /[^è]$/],

    // "s" between two vowels is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${VOWELS}]$`],
  ],

  //-- T
  //----------------------------------------------------------------------------
  t: [

    // "tt" is squeezed
    ['tt', 't'],

    // "th" is pronounced *t*
    ['th', 't'],

    // "tion" is pronounced *sjõ*
    ['tion', 'sjõ'],

    // Final "tie" is pronounced *si*
    [/tie$/, 'si']
  ],

  //-- U
  //----------------------------------------------------------------------------
  u: [
    [null, 'y']
  ],

  //-- Y
  //----------------------------------------------------------------------------
  y: [

    // "y" before a vowel is pronounced *j*
    [`y(?=[${VOWELS}])`, 'j'],

    // "y" is generally pronounced *i*
    [null, 'i']
  ]
});
