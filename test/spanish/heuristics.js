/**
 * Phonogram Spanish Heuristics Unit Tests
 * ========================================
 */
import assert from 'assert';
import {isJotaX, isNahuatl} from '../../src/spanish/heuristics';

describe('heuristics', function() {

  describe('#.isJotaX', function() {

    it('should correctly find special words.', function() {
      const correct = [
        'mexico',
        'mexiqueño',
        'mexiquena',
        'oaxaca',
        'oaxaqueña',
        'texas',
        'xalapeno',
        'xalapa',
        'xavier'
      ];

      correct.forEach(word => assert(isJotaX(word), word));

      const wrong = [
        'xilofono',
        'sobrevivencia',
        'almazena'
      ];

      wrong.forEach(word => assert(!isJotaX(word), word));
    });
  });

  describe('#.isNahuatl', function() {

    it('should correctly detect words of Nahuatl origin.', function() {
      const correct = [
        'xolo',
        'xoloitzcuintli',
        'xocoyote',
        'xochimilco',
        'xochicalco',
        'xochiquetzal',
        'xochitl',
        'xochipilli'
      ];

      correct.forEach(word => assert(isNahuatl(word), word));

      const wrong = [
        'xilofono',
        'xavier',
        'ruiz',
        'shawarma'
      ];

      wrong.forEach(word => assert(!isNahuatl(word), word));
    });
  });
});
