/**
 * Phonogram English Poetic Unit Tests
 * ====================================
 */
import {poetic} from '../../src/english';

export default {
  fn: poetic,
  cases: [
    ['bath', 'baθ'],
    ['bother', 'bʌðə'],
    ['bridge', 'bridʒ'],

    ['cheating', 'tʃiting'],
    ['cheese', 'tʃiz'],
    ['cistern', 'sistən'],
    ['clue', 'klu'],
    ['cruel', 'krul'],
    ['cynic', 'sinik'],

    ['debate', 'dibɛjt'],
    ['dew', 'dju'],

    ['field', 'fild'],
    ['fire', 'fajə'],

    ['grateful', 'grɛjtful'],

    ['jazz', 'dʒaz'],

    ['meet', 'mit'],
    ['mother', 'mʌðə'],
    ['myth', 'miθ'],

    ['new', 'nju'],

    ['phone', 'fon'],
    ['pool', 'pul'],
    ['porridge', 'poridʒ'],

    ['see', 'si'],
    ['sire', 'sajə'],

    ['tee', 'ti']
  ]
};

// germ -> make finer rule for er before n or m and potential s.

// mother, bother, weather, bathe, etc

// ghost (initial gh)
// aghast, afghasnistan (egghead, bighorn)
// hiccough

// high, sigh, thigh
// right, wright, blight

// freight, eight, weight
// height, sleight

// through
// cough, tough, enough
// dough, although
// bough
// borough, thorough
// bought, brought, fought, nought, ought, sought, wrought, thought

// daughter, naughty, slaughter, laughter
// laugh
