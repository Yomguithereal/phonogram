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
  [new RegExp(`c(?=[^${VOWELS}])`, 'g'), 'k'],

  // "c" before "e", "i" or "y"
  [new RegExp(`c(?=[${E + I + Y}])`, 'g'), 's'],

  //-- Vowels
  //----------------------------------------------------------------------------

  // "on" - "bonbon", "savon"
  [/on/g, 'õ'],

  // "y" before a consonant or final, is pronounced *i*
  [/y/g]
];
