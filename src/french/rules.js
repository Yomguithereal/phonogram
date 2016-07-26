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

    // "aon" is always pronounced *ã*
    [/aon/, 'ã'],

    // Final "anc" is pronounced *ã*
    [/anc$/, 'ã'],

    // "an" is pronounced *ã*
    [`an(?=[^${VOWELS}n]|$)`, 'ã']
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
    [/ck/, 'k'],

    // "ch" before a consonant is always *k*
    [`ch(?=[^${VOWELS}])`, 'k'],

    // "ch" is generally pronounced "ʃ"
    [/ch/, 'ʃ'],

    // "c" before "e", "i" or "y" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    // "c" before anything else is pronounced *k*
    [null, 'k']
  ],

  //-- E
  //----------------------------------------------------------------------------
  e: [

    // "eill" is pronounced *ej*
    [/eill/, 'ej'],

    // Final "e" is not pronounced
    [/es?$/],

    // "eau" is pronounced *o*
    [/eaux?/, 'o']
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

    // "g" before "e", "i" or "y" is pronounced *ʒ*
    [`g(?=[${E + I + Y}])`, 'ʒ']
  ],

  //-- I
  //----------------------------------------------------------------------------
  i: [

    // "ien" is pronounced *jẽ*
    [/ien/, 'jẽ'],

    // Final "ie" is pronounced *i*
    [/ie$/, 'i'],

    // "io" is pronounced *jo*
    [/io/, 'jo']
  ],

  //-- J
  //----------------------------------------------------------------------------
  j: [

    // "j" is always pronounced *ʒ*
    [null, 'ʒ']
  ],

  //-- O
  //----------------------------------------------------------------------------
  o: [

    // Final "oing" or "oint" is pronounced *wẽ*
    [/oin[gt]s?$/, "wẽ"],

    // "oi" is pronounced *wa*
    [/oi/, 'wa'],

    // Final "onc" is prononced *õ*
    [/onc$/, 'õ'],

    // "on" is prononced *õ*
    [`on(?=[^${VOWELS}n]|$)`, 'õ'],

    // "om" before "b" or "p" is pronounced *õ*
    [`om(?=[pb])`, 'õ'],

    // "ou" is generally pronounced *u*
    [/ou/, 'u']
  ],

  //-- Q
  //----------------------------------------------------------------------------
  q: [

    // "qu" is pronounced *k*
    [/qu/, 'k']
  ],

  //-- R
  //----------------------------------------------------------------------------
  r: [

    // Final "rd" is pronounced *r*
    [/rd$/, 'r']
  ],

  //-- S
  //----------------------------------------------------------------------------
  s: [

    // "sc" is pronounced *s*
    [/sc/, 's'],

    // Initial "sh" is pronounced *ʃ*
    [/sh/, 'ʃ', INITIAL],

    // Final "s" is not pronounced, except before a "è"
    [/^s$/, '', /[^è]$/],

    // "s" between two vowels is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${VOWELS}]$`],
  ],

  //-- T
  //----------------------------------------------------------------------------
  t: [

    // "th" is pronounced *t*
    [/th/, 't'],

    // "tion" is pronounced *sjõ*
    [/^tion/, 'sjõ'],

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
