/**
 * Phonogram Alphabet Reference
 * =============================
 */

// NOTE: é will soon disappear

/**
 * Listing all the letters present in Phonogram's fuzzy IPA.
 */
export default {
  vowels: [
    'a',
    'e', 'é', 'ɛ', 'ø',
    'i',
    'o', 'ɔ',
    'u', 'ʌ', 'y',
    'ã', 'ẽ', 'õ'
  ],
  semiVowels: [
    'j',
    'w', 'ɥ',
    'h'
  ],
  consonants: [
    'b', 'p',
    'm', 'n',
    'v', 'f',
    'd', 't',
    'r', 'l',
    's', 'z',
    'θ', 'ð',
    'g', 'k',
    'ʃ', 'ʒ',
    'x'
  ]
};

/**
 * Useful sonority hierarchy one might use to syllabify phonogram codes.
 */
export const hierarchy = [
  'aeéɛøoɔiuʌyãẽõ',
  'jwɥh',
  'rl',
  'mn',
  'zvðʒ',
  'sfθʃ',
  'bdg',
  'ptkx'
];
