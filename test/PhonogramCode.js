/**
 * Phonogram Code Class Unit Tests
 * ================================
 */
import assert from 'assert';
import PhonogramCode from '../src/PhonogramCode';

describe('PhonogramCode', function() {

  it('should be possible to apply substitutions and to keep track of them.', function() {
    const code = new PhonogramCode('Bonbon');
    code.replace(1, /on/, 'õ');
    code.replace(4, /on/, 'õ');
    code.replace(0, /b/, 'p');
    code.replace(3, /b/, 'p');

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

  it('should normalized some cases.', function() {
    const code = new PhonogramCode('Cœlacanthe');

    assert.strictEqual(code.get(), 'coelacanthe');
  });
});
