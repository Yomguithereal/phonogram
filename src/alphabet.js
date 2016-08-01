/**
 * Phonogram Alphabet Reference
 * =============================
 */

/**
 * Listing all the letters present in Phonogram's fuzzy IPA.
 */
export default {
  vowels: [
    'a',
    'e', 'ɛ', 'ø',
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
  'aeɛøoɔiuʌyãẽõ',
  'jwɥh',
  'rl',
  'mn',
  'zvðʒ',
  'sfθʃ',
  'bdg',
  'ptkx'
];
