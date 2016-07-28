/**
 * Phonogram Spanish rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of Spanish words.
 */
import {compileRules} from '../helpers';

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
const POETIC_RULES = compileRules({

});

// use a hasher to solve specific things about the letter (specifically x)

// tl -> tel

// b -> v for standard, not poetic?
