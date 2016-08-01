/**
 * Phonogram Spanish heuristics
 * =============================
 *
 * Heuristics related to the linguistic origin of some Spanish words.
 */

/**
 * Function returning whether the given word's "x" letter should be pronounced
 * like the Spanish jota (*x*).
 *
 * @param  {string}  word - The target word.
 * @return {boolean}
 */
const JOTA_X_WORDS = new Set([
  'texas',
  'xavier'
]);

const MEXICO_REGEX = /^mexi(?:co|quen)/,
      OAXACA_REGEX = /^oaxa(?:ca|quen)/,
      XALAPA_REGEX = /^xalap(?:a$|en)/;

export function isJotaX(word) {
  const fingerprint = word
    .replace(/ñ/g, 'n');

  return (
    JOTA_X_WORDS.has(fingerprint) ||
    MEXICO_REGEX.test(fingerprint) ||
    OAXACA_REGEX.test(fingerprint) ||
    XALAPA_REGEX.test(fingerprint)
  );
}

/**
 * Function returning whether the given word looks like a Nahuatl loan word.
 * Note that it will never handle words without an "x".
 *
 * @param  {string}  word - The target word.
 * @return {boolean}
 */
const NAHUATL_REGEX = /(?:^xolo$|^xochi|^oa|oyote|chimil|chil$|t[lz])/;

export function isNahuatl(word) {
  return NAHUATL_REGEX.test(word);
}
