/**
 * Phonogram Spanish heuristics
 * =============================
 *
 * Heuristics related to the linguistic origin of some Spanish words.
 */

const SPECIAL_X = new Set([
  'mexico',
  'oaxaca',
  'texas',
  'xalapa',
  'xalapeno',
  'xavier'
]);

export function hasSpecialX(word) {
  const fingerprint = word
    .toLowerCase()
    .replace(/ñ/g, 'n');

  return SPECIAL_X.has(fingerprint);
}

// chil & oyote check + cht (chtonien?)
const NAHUATL = /(?:t[lz]|oa|oyote|chil)/;

export function isNahuatl(word) {

}

export function isCatalan(word) {

}

// initial x & not nahuatl is pronounced *s* before "i" & "e", else ks "examen"

// x nahuatl only if before vowel, nixtamal
// tz -> ts, tenochtitlan -> sh
// quetzalcoatl -> ketsalkoatel
// tlaxcala -> tlaskala (quand x devant ca -> *s*)
// quinientos
// ceviche
// ancash
// shawarma
// ancashino
// deshacer
