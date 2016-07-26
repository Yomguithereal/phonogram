/**
 * Phonogram French rules
 * =======================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of French words.
 */
import {r} from '../helpers';

export const A = 'aàâ';
export const E = 'eéèë';
export const I = 'iï';
export const O = 'oôü';
export const U = 'uü';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;

export const POETIC_RULES = {

  //-- A
  //----------------------------------------------------------------------------
  a: [

    // Final "anc" is pronounced *ã*
    [/anc$/, 'ã'],

    // "an" is pronounced *ã*
    [r(`an(?=[^${VOWELS}n]|$)`), 'ã']
  ],

  //-- C
  //----------------------------------------------------------------------------
  c: [

    // "ch" before a consonant is always *k*
    [r(`ch(?=[^${VOWELS}])`), 'k'],

    // "c" before "e", "i" or "y" is pronounced *s*
    [r(`c(?=[${E + I + Y}])`), 's'],

    // "c" before anything else is pronounced *k*
    [null, 'k']
  ],

  //-- E
  //----------------------------------------------------------------------------
  e: [

    // Final "e" is not pronounced
    [/es?$/],

    // "eau" is pronounced *o*
    [/eau/, 'o']
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

    // "g" before "e", "i" or "y" is pronounced "ʒ"
    [r(`g(?=[${E + I + Y}])`), 'ʒ']
  ],

  //-- I
  //----------------------------------------------------------------------------
  i: [

    // "ien" is pronounced *jẽ*
    [/ien/, 'jẽ'],

    // Final "ie" is pronounced *i*
    [/ie$/, 'i'],

    // "io" is pronounced "jo"
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

    // "oi" is pronounced *wa*
    [/oi/, 'wa'],

    // Final "onc" is prononced *õ*
    [/onc$/, 'õ'],

    // "on" is prononced *õ*
    [r(`on(?=[^${VOWELS}n]|$)`), 'õ']
  ],

  //-- R
  //----------------------------------------------------------------------------
  r: [

    // Final "rd" is pronounced "r"
    [/rd$/, 'r']
  ],

  //-- S
  //----------------------------------------------------------------------------
  s: [

    // "sc" is pronounced *s*
    [/sc/, 's'],

    // Final "s" is not pronounced, except before a "è"
    [/s$/, '', /[^è]$/],

    // "s" between two vowels is pronounced *z*
    [r(`s(?=[${VOWELS}])`), 'z', r(`[${VOWELS}]$`)],
  ],

  //-- T
  //----------------------------------------------------------------------------
  t: [

    // "th" is pronounced *t*
    [/th/, 't']
  ],

  //-- U
  //----------------------------------------------------------------------------
  u: [
    [null, 'y']
  ],

  //-- Y
  //----------------------------------------------------------------------------
  y: [
    [null, 'i']
  ]
};