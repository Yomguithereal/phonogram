/**
 * Phonogram French Poetic Unit Tests
 * ===================================
 */
import {poetic} from '../../src/french';

export default {
  fn: poetic,
  cases: [

    // "ch" before a consonant is always "k"
    ['chrysanthème', 'krizantɛm'],
    ['chtonien', 'ktonjẽ'],

    // "on"
    ['bonbon', 'bõbõ'],
    ['savon', 'savõ']
  ]
};
