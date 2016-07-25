/**
 * Phonogram French Poetic Unit Tests
 * ===================================
 */
import {poetic} from '../../src/french';

export default {
  fn: poetic,
  cases: [

    // "ch" before a consonant is always "k"
    // ['chrysanthème', ''],
    // ['chtonien', ''],

    // "on"
    ['bonbon', 'bõbõ'],
    ['savon', 'savõ']
  ]
};
