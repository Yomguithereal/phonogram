/**
 * Phonogram French Poetic Unit Tests
 * ===================================
 */
import {poetic} from '../../src/french';

export default {
  fn: poetic,
  cases: [
    ['an', 'ã'],
    ['blanc', 'blã'],
    ['bonbon', 'bõbõ'],
    ['chrysanthème', 'krizãtɛm'],
    ['chtonien', 'ktonjẽ'],
    ['manteau', 'mãto'],
    ['noir', 'nwar'],
    ['savon', 'savõ'],
    ['tronc', 'trõ']
  ]
};
