/**
 * Phonogram French heuristics
 * ============================
 *
 * Heuristics related to the linguistic origin of some French words.
 */

// NOTE: "varech" is not greek, but you see the point...
const GREEK_CH = [
  'arché',
  'archo',
  'chalc',
  'chald',
  'chalqu',
  'charism',
  'chiro(?!u)',
  'chor(?!izo)',
  'lichen',
  'tech',
  'tricho',
  'stocha',
  'varech'
];

const GREEK_CH_REGEX = new RegExp(`(?:${GREEK_CH.join('|')})`);

/**
 * Function returning whether the given word's "ch" should be pronounced
 * the greek way.
 *
 * @param  {string}  word - The target word.
 * @return {boolean}
 */
export function isGreekCh(word) {
  return GREEK_CH_REGEX.test(word);
}
