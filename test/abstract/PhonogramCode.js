/**
 * Phonogram Code Class Unit Tests
 * ================================
 */
import assert from 'assert';
import PhonogramCode from '../../src/abstract/PhonogramCode';

describe('PhonogramCode', function() {

  it('should be possible to apply substitutions and to keep track of them.', function() {
    const code = new PhonogramCode('Bonbon');
    code.replace(/on/g, 'õ');
    code.replace(/b/g, 'p');

    assert.strictEqual(code.get(), 'põpõ');
    assert.deepEqual(code.mapping, [
      ['b', 'p'],
      ['o', 'õ'],
      ['n', ''],
      ['b', 'p'],
      ['o', 'õ'],
      ['n', '']
    ]);
  });
});
