/**
 * Phonogram Helpers
 * ==================
 *
 * Collecting miscellaneous helper functions & constantd.
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

    for (let i = 0, l = letter.length; i < l; i++) {
      const rule = letter[i];

      let pattern;

      if (rule[0])
        pattern = new RegExp('^' + (rule[0].source || rule[0]));

      let lookbehind;

      if (rule[2])
        lookbehind = new RegExp(rule[2].source || rule[2]);

      compiled[k].push([pattern || null, rule[1], lookbehind]);
    }
  }

  return compiled;
}

/**
 * Simple regex used sometimes as lookbehind to check if the search string
 * is initial or not.
 */
export const INITIAL = /.+/;
