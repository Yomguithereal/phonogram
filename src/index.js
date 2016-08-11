/**
 * Phonogram Library Endpoint
 * ===========================
 */
import {poetic as englishPoetic} from './english';
import {poetic as frenchPoetic} from './french';
import {poetic as spanishPoetic} from './spanish';

export default {
  english: {
    poetic: englishPoetic
  },
  french: {
    poetic: frenchPoetic
  },
  spanish: {
    poetic: spanishPoetic
  }
};
