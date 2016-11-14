/**
 * Phonogram English Poetic Unit Tests
 * ====================================
 */
import {poetic} from '../../src/english';

export default {
  fn: poetic,
  cases: [
    ['bit', 'bit'],
    ['bone', 'bon'],
    ['bones', 'bonz'],
    ['boy', 'bɔj'],

    ['castle', 'kasʌl'],
    ['cistern', 'sistən'],
    ['crumb', 'krʌmb'],

    ['day', 'dɛj'],
    ['debate', 'dibɛjt'],

    ['fire', 'fajə'],

    ['Italy', 'itali'],

    ['mat', 'mat'],
    ['mine', 'majn'],
    ['moat', 'mot'],

    ['pet', 'pɛt'],
    ['Pete', 'pit'],
    ['philosophy', 'filɔzɔfi'],
    ['pity', 'piti'],
    ['pot', 'pɔt'],

    ['shemale', 'ʃimɛjl'],
    ['sire', 'sajə'],
    ['sister', 'sistə'],

    ['tail', 'tɛjl'],
    ['tee', 'ti'],

    ['unique', 'junik'],

    ['wall', 'wɔl'],
    ['wood', 'wud'],
    ['wrist', 'rist']
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
