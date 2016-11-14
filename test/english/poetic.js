/**
 * Phonogram English Poetic Unit Tests
 * ====================================
 */
import {poetic} from '../../src/english';

export default {
  fn: poetic,
  cases: [
    ['bit', 'bit'],
    ['bone', 'boʊn'],
    ['boy', 'bɔj'],

    ['castle', 'kasøl'],
    ['cistern', 'sistən'],

    ['debate', 'dibɛjt'],

    ['fire', 'fajə'],

    ['Italy', 'itali'],

    ['mat', 'mat'],
    ['mine', 'majn'],

    ['pet', 'pɛt'],
    ['Pete', 'pit'],
    ['pity', 'piti'],
    ['pot', 'pɔt'],

    ['sire', 'sajə'],

    ['tee', 'ti'],

    ['unique', 'junik'],

    ['wood', 'wud']
  ]
};

// germ -> make finer rule for er before n or m and potential s.

// mother, bother, weather, bathe, etc

// rythm rithm

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

// receipt
