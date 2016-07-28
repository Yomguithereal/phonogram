/**
 * Phonogram Unit Test Endpoint
 * =============================
 */
import assert from 'assert';

/**
 * Helpers.
 */
function test(name, path) {
  const {fn, cases} = require(path).default;

  it('should properly compute the ' + name + ' codes.', function() {

    cases.forEach(function([word, code]) {
      assert.strictEqual(fn(word), code, `${word} => ${code}`);
    });
  });
}

/**
 * Registering tests.
 */
describe('abstract', function() {

  require('./PhonogramCode.js');
});

describe('french', function() {
  test('poetic', './french/poetic.js');
});

describe('spanish', function() {
  // test('poetic', './spanish/poetic.js');
});
