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
    ['cistern', 'sistʌrn'],
    ['cruel', 'krul'],
    ['crumb', 'krʌmb'],

    ['day', 'dɛ'],
    ['debate', 'dibɛjt'],

    ['five', 'fajv'],
    ['fire', 'fajʌr'],

    ['Italy', 'itali'],

    ['jive', 'djajv'],
    ['junk', 'djʌnk'],

    ['mat', 'mat'],
    ['mine', 'majn'],
    ['moat', 'mot'],

    ['pet', 'pɛt'],
    ['Pete', 'pit'],
    ['philosophy', 'filɔzɔfi'],
    ['pity', 'piti'],
    ['pot', 'pɔt'],

    ['Quentin', 'kwɛntin'],

    ['ration', 'raʃʌn'],
    ['receive', 'risiv'],
    ['retail', 'ritɛjl'],
    ['riot', 'rajɔt'],

    ['shemale', 'ʃimɛjl'],
    ['size', 'sajz'],
    ['sire', 'sajʌr'],
    ['sister', 'sistʌr'],

    ['tail', 'tɛjl'],
    ['tee', 'ti'],

    ['unique', 'junik'],
    // ['university', 'junivʌrsiti'],

    ['wall', 'wol'],
    ['what', 'wat'],
    ['wood', 'wud'],
    ['wrist', 'rist']
  ]
};

// germ -> make finer rule for er before n or m and potential s.

// mother, bother, weather, bathe, etc

// rythm rithm

// ghost (initial gh)
// aghast, afghanisthan (egghead, bighorn)
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
