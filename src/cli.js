/* eslint no-console: 0 */
/**
 * Phonogram CLI Endpoint
 * =======================
 *
 * Exposing handy CLI tools related to Phonogram encoding.
 */
import chalk from 'chalk';
import yargs from 'yargs';
import phonogram from './index';

/**
 * Configuration.
 */
const SUPPORTED_LANGUAGES = [
  null,
  'english',
  'french',
  'german',
  'italian',
  'spanish'
];

const SIMPLIFIED_LANGUAGES = {
  en: 'english',
  fr: 'french',
  de: 'german',
  it: 'italian',
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
  .option('detail', {
    type: 'boolean',
    default: false
  })
  .help('h')
  .alias('h', 'help')
  .locale('en')
  .argv;

/**
 * Helpers.
 */
function cleanInput(string) {
  return string.replace(/[,;.|\-]/g, '');
}

function printDebug(code) {
  console.log(chalk.green(code.word), '->', chalk.cyan(code.toString()));

  if (code.exception) {
    console.log('  ', chalk.red('Exception'));
    console.log();

    return;
  }

  code.trace.forEach((info, i) => {
    const log = [`  ${i + 1}.`];

    if (info.negative)
      log.push(chalk.red('NOT'));

    if (info.lookbehind)
      log.push(chalk.red(info.lookbehind));

    log.push(chalk.green(`${code.word.slice(0, info.position)}${chalk.underline(info.match)}${code.word.slice(info.position + info.match.length)}`));
    log.push(chalk.red(info.pattern));
    log.push('->');
    log.push(chalk.cyan(info.replacement || '-'));

    console.log(...log);
  });

  console.log();
}

function printMultiLang(word, codes) {
  console.log(chalk.green(word));

  codes.forEach(info => {
    console.log(`${chalk.cyan(info.lang)}:`, info.encoded);
  });

  console.log();
}

/**
 * State.
 */
const words = argv._.map(cleanInput);

let lang = argv.lang;

if (lang in SIMPLIFIED_LANGUAGES)
  lang = SIMPLIFIED_LANGUAGES[lang];

const level = argv.level,
      detail = argv.detail;

/**
 * Operations.
 */

// Working on a single lang
if (lang) {

  if (!detail) {
    const fn = phonogram[lang][level];

    console.log(words.map(fn).join(' '));
  }
  else {
    const fn = phonogram[lang].poeticCode;

    words.forEach(w => printDebug(fn(w, {trace: true})));
  }

  process.exit(0);
}

// Working on all langs
if (!detail) {
  words.forEach(w => {
    const codes = Object.keys(phonogram).map(l => {
      const fn = phonogram[l][level];

      return {lang: l, encoded: fn(w)};
    });

    printMultiLang(w, codes);
  });
}
