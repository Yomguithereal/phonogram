/* eslint no-console: 0 */
/**
 * Phonogram CLI Endpoint
 * =======================
 *
 * Exposing handy CLI tools related to Phonogram encoding.
 */
import yargs from 'yargs';
import phonogram from './index';

/**
 * Configuration.
 */
const SUPPORTED_LANGUAGES = [
  null,
  'english',
  'french',
  'spanish'
];

const SIMPLIFIED_LANGUAGES = {
  en: 'english',
  fr: 'french',
  sp: 'spanish'
};

const SUPPORTED_LEVELS = [
  'poetic'
];

const argv = yargs
  .option('lang', {
    alias: 'l',
    type: 'string',
    choices: SUPPORTED_LANGUAGES.concat(Object.keys(SIMPLIFIED_LANGUAGES)),
    default: null
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

const words = argv._;

let lang = argv.lang;

if (lang in SIMPLIFIED_LANGUAGES)
  lang = SIMPLIFIED_LANGUAGES[lang];

const level = argv.level;

/**
 * Helpers.
 */
function cleanInput(string) {
  return string.replace(/[,;.|\-]/g, '');
}

/**
 * Operations.
 */
if (lang) {
  const fn = phonogram[lang][level];

  console.log(words.map(cleanInput).map(fn).join(' '));
}
