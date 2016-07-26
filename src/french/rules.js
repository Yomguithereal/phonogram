/**
 * Phonogram French rules
 * =======================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of French words.
 */
import {g} from '../helpers';

export const A = 'aàâ';
export const E = 'eéèë';
export const I = 'iï';
export const O = 'oôü';
export const U = 'uü';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;

export const POETIC_RULES = [

  //-- Consonants
  //----------------------------------------------------------------------------

  // "ch" before a consonant is always *k*
  [g(`ch(?=[^${VOWELS}])`), 'k'],

  // "c" before "e", "i" or "y" is pronounced *s*
  [g(`c(?=[${E + I + Y}])`), 's'],

  // "s" between two vowels is pronounced *z*
  [g(`([${VOWELS}])s(?=[${VOWELS}])`), 'z', 1],

  // "th" is pronounced *t*
  [/th/g, 't'],

  //-- Vowels
  //----------------------------------------------------------------------------

  // Final "e" is not pronounced
  [/e$/],

  // "è" is always pronounced "ɛ"
  [/è/g, 'ɛ'],

  // "ien" is pronounced "jẽ"
  [/ien/g, 'jẽ'],

  // "on" - "bonbon", "savon"
  [g(`on(?=[^${VOWELS}]|$)`), 'õ'],

  // "y" before a consonant or final, is pronounced *i*
  [/y/g, 'i']
];
