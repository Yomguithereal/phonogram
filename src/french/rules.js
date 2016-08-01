/**
 * Phonogram French rules
 * =======================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of French words.
 */
import {compileRules} from '../helpers';

/**
 * Vowel definitions.
 */
export const A = 'aàâ';
export const E = 'eéèë';
export const I = 'iï';
export const O = 'oôùü';
export const U = 'uü';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // Final "amment" is prononced *ã*
    // NOTE: in some rare case, we have a verb plural form
    [/amment$/, 'amã'],

    // "aing" & "ain" are pronounced *ẽ*
    [/aing?$/, 'ẽ'],

    // Final "aim" is pronounced *ẽ*
    [/aim$/, 'ẽ'],

    // "aon" is always pronounced *ã*
    ['aon', 'ã'],

    // Final "anc" is pronounced *ã*
    [/anc$/, 'ã'],

    // Final "ant" is pronounced *ã*
    [/ant$/, 'ã'],

    // "an" is pronounced *ã*
    [`an(?=[^${VOWELS}n]|$)`, 'ã'],

    // "am" before "b" or "p" is pronounced *ã*
    [/am(?=[bp])/, 'ã'],

    // "ai" is generally pronounced *ɛ*
    ['ai', 'ɛ'],

    // "ay" before some posterior vowels is pronounced *ɛj*
    [/ay(?=[ao]n|e)/, 'ɛj'],

    // Final "aux" is pronounced *o*
    [/aux$/, 'o'],

    // "au" is generally pronounced *o*
    ['au', 'o']
  ],

  //-- (â)
  //----------------------------------------------------------------------------
  â: 'a',

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // Words finishing by "clef" pronounce it "klé"
    [/clef$/, 'klé'],

    // "cae" is pronounced *sé*
    ['c(?:æ|ae)', 'sé'],

    // "ck" is pronounced *k*
    ['ck', 'k'],

    // "ch" before a consonant is always *k*
    [`ch(?=[^${VOWELS}])`, 'k'],

    // "ch" is generally pronounced "ʃ"
    ['ch', 'ʃ'],

    // "c" before "e", "i" or "y" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    // "c" before anything else is pronounced *k*
    [null, 'k']
  ],

  //-- (d)
  //----------------------------------------------------------------------------
  d: [

    // Final "dt" is pronounced *t*
    [/dt$/, 't']
  ],

  //-- (e)
  //----------------------------------------------------------------------------
  e: [

    // Final "emment" is pronounced *amã*
    [/emment$/, 'amã'],

    // Final "ement" is pronounced *øment*
    [/ement$/, 'ømã'],

    // Final "erf" after "c", "n" or "s" is pronounced *ɛr*
    [/erf$/, 'ɛr', /[cns]$/],

    // "err" is prononounced *ɛrr*
    [/erre$/, 'ɛr'],
    ['err', 'ɛrr'],

    // "enn" is pronounced *ɛnn*
    [/enne$/, 'ɛn'],
    ['enn', 'ɛnn'],

    // "en" before a not final "t" is pronounced *ã*
    [/en(?=t.)/, 'ã'],

    // "eill" is pronounced *ɛj*
    ['eill', 'ɛj'],

    // Final "ein" is pronounced *ẽ*
    [/ein$/, 'ẽ'],

    // "eau" is pronounced *o*
    [/eaux?/, 'o'],

    // Final "euil" is pronounced *øj*
    [/euil$/, 'øj'],

    // "eu" is pronounced *ø*
    [/eux?/, 'ø'],

    // Final "er" & "ez" is pronounced "é"
    [/e[rz]$/, 'é'],

    // Final "e" is not pronounced
    [/es?$/]
  ],

  //-- (é)
  //----------------------------------------------------------------------------
  é: [

    // Final "ément" is pronounced "émã"
    [/ément$/, 'émã'],

    // Final "ée" is pronounced "é"
    [/ée$/, 'é']
  ],

  //-- (è)
  //----------------------------------------------------------------------------
  è: 'ɛ',

  //-- (ê)
  //----------------------------------------------------------------------------
  ê: 'ɛ',

  //-- (g)
  //----------------------------------------------------------------------------
  g: [

    // "gnoi" is pronounced *nwa*
    ['gnoi', 'nwa'],

    // "gn" before "ou" or "os" is pronounced *gn*
    [/gn(?=(?:ou$|os))/, 'gn'],

    // "gu" is pronounced *g*
    ['gu', 'g'],

    // "gn" is pronounced *nj*
    ['gn', 'nj'],

    // "g" before "e", "i" or "y" is pronounced *ʒ*
    [`g(?=[${E + I + Y}])`, 'ʒ']
  ],

  //-- (h)
  //----------------------------------------------------------------------------
  h: '',

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // "ill" after a vowel and not before a "i" is pronounced *ij*
    [/ill(?=[^i])/, 'ij', `[^${VOWELS}]`],

    // "in" before a consonant which is not "n" or final is pronounced *ẽ*
    [`in(?=$|[^${VOWELS}n])`, 'ẽ'],

    // Final "iet" is pronounced *jɛ*
    [/iet$/, 'jɛ'],

    // Final "ie" is pronounced *i*
    [/ie$/, 'i'],

    // "ien" is pronounced *jẽ*
    ['ien', 'jẽ'],

    // "i" before some vowels is pronounced *j*
    [`i(?=[${A + E + O + U}])`, 'j']
  ],

  //-- (j)
  //----------------------------------------------------------------------------
  j: 'ʒ',

  //-- (l)
  //----------------------------------------------------------------------------
  l: [

    // "ll" is squeezed
    ['ll', 'l', /.{2,}/]
  ],

  //-- (n)
  //----------------------------------------------------------------------------
  n: [

    // "nn" is squeezed
    ['nn', 'n']
  ],

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // Final "oigt" is pronounced *wa*
    [/oigt$/, 'wa'],

    // Final "oeil" is pronounced *øj*
    [/oeil$/, 'øj'],

    // Final "oing" or "oint" is pronounced *wẽ*
    [/oin[gt]s?$/, 'wẽ'],

    // "oi" is pronounced *wa*
    [/oix?/, 'wa'],

    // Final "onc" is prononced *õ*
    [/onc$/, 'õ'],

    // "on" is prononced *õ*
    [`on(?=[^${VOWELS}n]|$)`, 'õ'],

    // Final "omb" is pronounced *õ*
    [/omb$/, 'õ'],

    // "om" before "b" or "p" is pronounced *õ*
    [/om(?=[bp])/, 'õ'],

    // "oy" is pronounced *waj* before a and if the wor
    [/oy(?=[a])/, 'waj', /.+/],

    // "ou" is generally pronounced *u*
    [/o[uù]x?/, 'u'],

    // "oe" is generally pronounced *ø*
    [/oeu?/, 'ø'],

    // Final "ot" is pronounced *o*, also before a "c" but not "ch"
    [/ot(?:$|(?=c(?!h)))/, 'o']
  ],

  //-- (ô)
  //----------------------------------------------------------------------------
  ô: 'o',

  //-- (œ)
  //----------------------------------------------------------------------------
  œ: [

    // Final "œil" is pronounced *œj*
    [/œil$/, 'øj'],

    // "œu" is pronounced *ø*
    [/œu?/, 'ø']
  ],

  //-- (p)
  //----------------------------------------------------------------------------
  p: [

    // "ph" is pronounced *f*
    ['ph', 'f']
  ],

  //-- (q)
  //----------------------------------------------------------------------------
  q: [

    // "qu" is pronounced *k*
    ['qu', 'k']
  ],

  //-- (r)
  //----------------------------------------------------------------------------
  r: [

    // "rr" is squeezed
    ['rr', 'r'],

    // Final "rd" is pronounced *r*
    [/rd$/, 'r']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // "ss" is squeezed
    ['ss', 's'],

    // "sc" is pronounced *s* before "e", "i" or "y"
    [`sc(?=[${E + I + Y}])`, 's'],

    // "sh" is pronounced *ʃ*
    ['sh', 'ʃ'],

    // Final "s" is not pronounced, except before a "è"
    [/s$/, '', /[^è]$/],

    // "s" between two vowels is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${VOWELS}]$`],
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // "tch" is pronounced *tʃ*
    ['tch', 'tʃ'],

    // "tt" is squeezed
    ['tt', 't'],

    // "th" is pronounced *t*
    ['th', 't'],

    // "tion" is pronounced *sjõ*
    ['tion', 'sjõ'],

    // Final "tie" is pronounced *si*
    [/tie$/, 'si']
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // Final "um" is pronounced *ʌm*
    [/um$/, 'ʌm'],

    // "u" before "i" is pronounced *ɥ*
    [/u(?=i)/, 'ɥ'],

    // "u" is generally pronounced *y*
    [null, 'y']
  ],

  //-- (v)
  //----------------------------------------------------------------------------
  v: [

    // Handling some exceptions related to "villain-"
    [/vill(?=ain)/, 'vil']
  ],

  //-- (x)
  //----------------------------------------------------------------------------
  x: [

    // "xc" simplifies to *ks* before "e", "i" & "y"
    [`xc(?=[${E + I + Y}])`, 'ks'],

    // Before a "i", "x" is pronounced *ks*
    ['x(?=i)', 'ks'],

    // Before another vowel, "x" is pronounced *gz*
    [`x(?=[${VOWELS}])`, 'gz'],

    // Else it is pronounced *ks*
    [null, 'ks']
  ],

  //-- (y)
  //----------------------------------------------------------------------------
  y: [

    // "yn" before a consonant different than "n" is pronounced *ẽ*
    [`yn(?=[^${VOWELS}n])`, 'ẽ'],

    // "y" before a vowel is pronounced *j*
    [`y(?=[${VOWELS}])`, 'j'],

    // "y" is generally pronounced *i*
    [null, 'i']
  ]
});
