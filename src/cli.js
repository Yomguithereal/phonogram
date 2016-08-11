/* eslint no-console: 0 */
/**
 * Phonogram CLI Endpoint
 * =======================
 *
 * Exposing handy CLI tools related to Phonogram encoding.
 */
import yargs from 'yargs';
import phonogram from './index';

const SUPPORTED_LANGUAGES = [
  'english',
  'french',
  'spanish'
];

const SUPPORTED_LEVELS = [
  'poetic'
];

const argv = yargs
  .option('lang', {
    alias: 'l',
    type: 'string',
    choices: SUPPORTED_LANGUAGES,
    default: 'english'
  })
  .option('level', {
    type: 'string',
    choices: SUPPORTED_LEVELS,
    default: 'poetic'
  })
  .help('h')
  .alias('h', 'help')
  .locale('en')
  .argv;

const words = argv._,
      fn = phonogram[argv.lang][argv.level],
      codes = words.map(fn);

console.log(codes.join(' '));
