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
    ['cistern', 'sistʌn'],
    ['cruel', 'krul'],
    ['crumb', 'krʌmb'],

    ['day', 'dɛj'],
    ['debate', 'dibɛjt'],

    ['five', 'fajv'],
    ['fire', 'fajʌr'],

    ['Italy', 'itali'],

    ['junk', 'djʌnk'],

    ['mat', 'mat'],
    ['mine', 'majn'],
    ['moat', 'mot'],

    ['pet', 'pɛt'],
    ['Pete', 'pit'],
    ['philosophy', 'filɔzɔfi'],
    ['pity', 'piti'],
    ['pot', 'pɔt'],

    ['receive', 'risiv'],
    ['ration', 'raʃʌn'],
    ['riot', 'rajɔt'],

    ['shemale', 'ʃimɛjl'],
    ['sire', 'sajʌr'],
    ['sister', 'sistʌr'],

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
