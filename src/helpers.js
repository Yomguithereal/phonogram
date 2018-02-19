/**
 * Phonogram Helpers
 * ==================
 *
 * Collecting miscellaneous helper functions & constant.
 */

/**
 * Function used to compile rule sets by creating proper regex starting with
 * a caret so we don't match rubbish.
 *
 * @param  {object} rules - Rules to compile.
 * @return {object}       - Compiled rules.
 */
export function compileRules(rules) {
  const compiled = {};

  for (const k in rules) {
    const letter = rules[k];

    compiled[k] = [];

    if (typeof letter !== 'object') {
      compiled[k] = [[null, letter]];
      continue;
    }

    for (let i = 0, l = letter.length; i < l; i++) {
      const rule = letter[i];

      let pattern;

      if (rule[0])
        pattern = new RegExp('^' + (rule[0].source || rule[0]));

      let lookbehind;

      if (rule[2])
        lookbehind = rule[2].source ? rule[2] : new RegExp(rule[2]);

      compiled[k].push([
        pattern || null,
        rule[1] || '',
        lookbehind || null,
        rule[3] || false
      ]);
    }
  }

  return compiled;
}

/**
 * Function used to compile rule the exceptions into proper mappings.
 *
 * @param  {object} exceptions - Exceptions to compile.
 * @return {object}            - Compiled exceptions.
 */
const EXCEPTION_REGEX = /\(([^•]*)•([^)]*)\)/;

export function compileExceptions(exceptions) {
  const compiled = {};

  for (const word in exceptions) {
    const string = exceptions[word],
          mapping = new Array(word.length);

    let mappingIndex = 0;

    for (let i = 0, l = string.length; i < l; i++) {
      const character = string[i];

      if (character === '(') {
        const [, pattern, replacement] = string
          .slice(i)
          .match(EXCEPTION_REGEX);

        for (let j = 0, m = pattern.length; j < m; j++)
          mapping[mappingIndex++] = !j ? replacement : '';

        i += pattern.length + replacement.length + 2;

        continue;
      }

      mapping[mappingIndex++] = character;
    }

    compiled[word] = mapping;
  }

  return compiled;
}

/**
 * Simple regex used sometimes as lookbehind to check if the search string
 * is initial or not.
 */
export const INITIAL = /^$/;

/**
 * Boolean flag used for readability purposes.
 */
export const NEGATIVE = true;
