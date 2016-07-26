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
    ['cartes', 'kart'],
    ['chrysanthème', 'krizãtɛm'],
    ['chtonien', 'ktonjẽ'],
    ['manteau', 'mãto'],
    ['noir', 'nwar'],
    ['savon', 'savõ'],
    ['tronc', 'trõ']
  ]
};
