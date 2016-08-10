/**
 * Phonogram French rules
 * =======================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of French words.
 */
import {compileRules, INITIAL, NEGATIVE} from '../helpers';

/**
 * Vowel definitions.
 */
export const A = 'aàâ';
export const E = 'eéèë';
export const I = 'iïî';
export const O = 'oôùü';
export const U = 'uü';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;

/**
 * List of common prefixes.
 */
const PREFIXES = [
  'anti',
  'bio',
  'dé',
  'dy',
  'hétéro',
  'homo',
  'hyper',
  'hypo',
  'iso',
  're',
  'nano',
  'para',
  'poly',
  'tétra',
  'ultra'
];

const PREFIXES_LOOKBEHIND = new RegExp(`^(?:${PREFIXES.join('|')})$`);

const GREEK_CH = [
  'charism',
  'chiro'
];

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // "alcool" is pronounced *alkɔl*
    [/alcool/, 'alkɔl'],

    // Final "amment" is prononced *ã*
    [/amment$/, 'amã'],

    // Generally, final "ach" is pronounced *ak*
    [/ach$/, 'ak'],

    // Final "ault" is pronounced *o*
    [/aults?$/, 'o'],

    // Final "aud" is pronounced *o*
    [/auds?$/, 'o'],

    // "aing" & "ain" are pronounced *ẽ*
    [/aing?$/, 'ẽ'],

    // Final "aim" is pronounced *ẽ*
    [/aim$/, 'ẽ'],

    // "aill" is pronounced *aj*
    [/aill/, 'aj'],

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

    // "ai" or "ay" are generally pronounced *ɛ*, also covers final "aie"
    [`a[iy](?=[^${VOWELS}]|es?$)`, 'ɛ'],

    // "ay" before some posterior vowels is pronounced *ɛj*
    [/ay(?=[ao]n|e)/, 'ɛj'],

    // Final "aux" is pronounced *o*
    [/aux$/, 'o'],

    // "aë" is pronounced *ɛ*
    [/aë/, 'ɛ'],

    // "au" is generally pronounced *o*
    ['au', 'o']
  ],

  //-- (à)
  //----------------------------------------------------------------------------
  à: 'a',

  //-- (â)
  //----------------------------------------------------------------------------
  â: 'a',

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // "cc" before a "e" is pronounced *ks*
    [/cc(?=[eé])/, 'ks'],

    // "cc" is squeezed
    ['cc', 'k'],

    // Words finishing by "clef" pronounce it "kle"
    [/clef$/, 'kle'],

    // Words finishing by "cul" pronounced it "ky"
    [/cul$/, 'ky'],

    // "cae" is pronounced *se*
    ['c(?:æ|ae)', 'se'],

    // "ck" is pronounced *k*
    ['ck', 'k'],

    // "ch" before a consonant is always *k*
    [`ch(?=[^${VOWELS}n])`, 'k'],

    // "ch" is generally pronounced "ʃ"
    ['ch', 'ʃ'],

    // "c" before "e", "i" or "y" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    // "c" before anything else is pronounced *k*
    [null, 'k']
  ],

  //-- (ç)
  //----------------------------------------------------------------------------
  ç: 's',

  //-- (d)
  //----------------------------------------------------------------------------
  d: [

    // Final "dt" is pronounced *t*
    [/dt$/, 't']
  ],

  //-- (e)
  //----------------------------------------------------------------------------
  e: [

    // If "e" is the last letter of a two-letters words
    [/e$/, 'ø', /^.$/],

    // Initial "emm" is pronounced *ã*
    [/em(?=m)/, 'ã', INITIAL],

    // Final "emment" is pronounced *amã*
    [/emment$/, 'amã'],

    // Final "ement" is pronounced *øment*
    [/ement$/, 'ømã'],

    // Final "ents" is pronounced *ã*
    [/ents$/, 'ã'],

    // Final "erf" after "c", "n" or "s" is pronounced *ɛr*
    [/erf$/, 'ɛr', /[cns]$/],

    // "e" before two doubled consonants is pronounced *ɛ*
    ['e(?=([rnpt])\\1)', 'ɛ'],

    // "em" before "b" or "p" is pronounced *ã*
    [/em(?=[bp])/, 'ã'],

    // "en" before a not final "t" or "s" is pronounced *ã*
    [/en(?=[çgst].)/, 'ã'],

    // "eill" is pronounced *ɛj*
    ['eill', 'ɛj'],

    // Final "ein" is pronounced *ẽ*
    [/ein$/, 'ẽ'],

    // "eau" is pronounced *o*
    [/eaux?/, 'o'],

    // Final "euil" is pronounced *øj*
    [/euil$/, 'øj'],

    // Initial "eu" is pronounced *u* alone or before "s" & "t"
    [/e[uû](?=t?$|ss)/, 'y', INITIAL],

    // "eu" before final "r", final "b" or "rre" is pronounced *ʌ*
    [/eu(?=r[st]?$|b$|rres?$)/, 'ʌ'],

    // Final "eu" is pronounced *ø*
    [/eux?/, 'ø'],

    // "ei" is pronounced *ɛ*
    [`e[iy](?![${VOWELS}])`, 'ɛ'],

    // Final "er" & "ez" is pronounced "e"
    [/e[rz]s?$/, 'e'],

    // Final "et" is pronounced "ɛ"
    [/ets?$/, 'ɛ'],

    // Final "e" is not pronounced
    [/es?$/],

    // "e" before some letters is pronounced *ɛ* if no vowel comes after
    [`e(?=[clmnrz](?![${VOWELS}])|s(?![${VOWELS}s]))`, 'ɛ'],

    // "e" between some letters is pronounced *ø*
    [/e(?=mi)/, 'ø', INITIAL, NEGATIVE],
    [/e(?=l)/, 'ø', /[dp]$/],
    [/e(?=d)/, 'ø', /r$/],
    [/e(?=r)/, 'ø', /[cvsz]$/],
    [/e(?!(\w)\1|$)/, 'ø', /^(?:ch|[fr])$/]
  ],

  //-- (é)
  //----------------------------------------------------------------------------
  é: [

    // Final "ément" is pronounced "emã"
    [/ément$/, 'emã'],

    // Final "ée" is pronounced "e"
    [/ée$/, 'e'],

    // "é" is pronounced *e*
    [null, 'e']
  ],

  //-- (è)
  //----------------------------------------------------------------------------
  è: 'ɛ',

  //-- (ê)
  //----------------------------------------------------------------------------
  ê: 'ɛ',

  //-- (ë)
  //----------------------------------------------------------------------------
  ë: 'ɛ',

  //-- (f)
  //----------------------------------------------------------------------------
  f: [

    // Handling "faisan" and the verb "faire"
    [`fais(?=[${A + E + I + O}])`, 'føz'],

    // 'ff' is squeezed
    ['ff', 'f']
  ],

  //-- (g)
  //----------------------------------------------------------------------------
  g: [

    // "gnoi" is pronounced *nwa*
    ['gnoi', 'nwa'],

    // "gn" before "ou" or "os" is pronounced *gn*
    [/gn(?=(?:ou$|os))/, 'gn'],

    // "gua" is pronounced *gwa*
    ['gua', 'gwa'],

    // "gu" is pronounced *g*
    ['gu', 'g'],

    // "gn" is pronounced *nj*
    ['gn', 'nj'],

    // "g" before "a" or "o" is pronounced *ʒ*
    [/ge(?=[ao])/, 'ʒ'],

    // "g" before "e", "i" or "y" is pronounced *ʒ*
    [`g(?=[${E + I + Y}])`, 'ʒ']
  ],

  //-- (h)
  //----------------------------------------------------------------------------
  h: '',

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // "illi" before certain vowels is pronounced *ilj*
    [`illi(?=[${A + E + I + O}])`, 'ilj'],

    // "ill" after a vowel and not before a "i" is pronounced *ij*
    [/ill/, 'ij', `[^${VOWELS}]`],

    // "in" before a consonant which is not "n" or final is pronounced *ẽ*
    [`i([mn])(?=$|[^${VOWELS}\\1])`, 'ẽ'],

    // Final "ie" is pronounced *i*
    [/ie$/, 'i'],

    // "ian", "ien" & "ion" are pronounced *j*
    [/ian/, 'jã'],
    [/ien/, 'jẽ'],
    [/ion/, 'jõ'],

    // Final "iement" is pronounced *imã*
    [/iements?$/, 'imã'],

    // "i" before some vowels is pronounced *j*
    [`i(?=[${A + E + O + U}])`, 'j']
  ],

  //-- (ï)
  //----------------------------------------------------------------------------
  ï: 'i',

  //-- (î)
  //----------------------------------------------------------------------------
  î: 'i',

  //-- (j)
  //----------------------------------------------------------------------------
  j: 'ʒ',

  //-- (l)
  //----------------------------------------------------------------------------
  l: [

    // "ll" is squeezed
    ['ll', 'l', /.{2,}/]
  ],

  //-- (m)
  //----------------------------------------------------------------------------
  m: [

    // Initial "mille" is pronounced *mil* if not before a "t"
    [/mille(?!t)/, 'mil', INITIAL],

    // "m" is squeezed
    ['mm', 'm', /.{2,}/]
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

    // "ouill" is pronounced "uj"
    [/(?:ouill|ouils?$)/, 'uj'],

    // Final "oigt" is pronounced *wa*
    [/oigt$/, 'wa'],

    // Final "oubs" is pronounced *u*
    [/oubs$/, 'u'],

    // Final "oeil" is pronounced *øj*
    [/oeil$/, 'ʌj'],

    // "ooing", oing", "oint" or "oin" are pronounced *wẽ*
    [`o?oin[gt]?(?![${VOWELS}])`, 'wẽ'],

    // "oi" is pronounced *wa*
    [/(?:oix?|oy$)/, 'wa'],

    // Final "onc" is prononced *õ*
    [/onc$/, 'õ'],

    // "ont" is pronounced *õ* before some letters
    [/ont(?=j)/, 'õ'],

    // "on" is prononced *õ*
    [`on(?=[^${VOWELS}nh]|$)`, 'õ'],

    // Final "omb" is pronounced *õ*
    [/omb$/, 'õ'],

    // Final "oult" is pronounced *u*
    [/oults?$/, 'u'],

    // "om" before "b" or "p" is pronounced *õ*
    [/om(?=[bp])/, 'õ'],

    // "oy" is pronounced *waj* before a and if the wor
    [/oy(?=[a])/, 'waj', /.+/],

    // "ou" before some vowels is pronounced *w*
    [/ou(?=[ai])/, 'w'],

    // "ou" is generally pronounced *u*
    [/o[uùû]x?/, 'u'],

    // "oo" is generally pronounced *u*
    [/oo/, 'u'],

    // "oeu" is generally pronounced *ʌ*
    [/oeu/, 'ʌ'],

    // "oe" is pronounced *ø*
    [/oe/, 'ø'],

    // Final "ot" or "o" is pronounced *o*
    [/(?:o|ots?)$/, 'o'],

    // Final "op" is pronounced *o* is some rare cases
    [/ops?$/, 'o', /(?:sal|syr|gal|tr)$/],

    // Else it is pronounced "ops"
    [/ops$/, 'ɔps'],

    // "o" before a "z" sound is pronounced *o*
    [`o(?=s[${VOWELS}]|z)`, 'o'],

    // Initial "ocr" is pronounced *ɔkr*
    [/ocr/, 'ɔkr', INITIAL],

    // "o" before "qu" or some "ch" is pronounced *ɔ*
    [/o(?=bl|c?k|ch(?![iy])|qu)/, 'ɔ'],

    // "o" before "mme" & "nne" is pronounced *ɔ*
    [/ommes?$/, 'ɔm'],
    [/onnes?$/, 'ɔn'],

    // "o" before some doubled consonants is pronounced *ɔ*
    [/o(?=ll|tt|ss)/, 'ɔ'],

    // Final "o" before a single consonant is pronounced *ɔ*
    [`o(?=[^${VOWELS}](?:es?|s?)$|rts?$)`, 'ɔ']
  ],

  //-- (ô)
  //----------------------------------------------------------------------------
  ô: 'o',

  //-- (œ)
  //----------------------------------------------------------------------------
  œ: [

    // Final "œil" is pronounced *ʌj*
    [/œil$/, 'ʌj'],

    // "œu" is pronounced *ʌ*
    [/œu/, 'ʌ'],

    // "œ" is pronounced *ø*
    [/œ/, 'ø']
  ],

  //-- (p)
  //----------------------------------------------------------------------------
  p: [

    // "patien" is pronounced *pasjã*
    ['patien', 'pasjã'],

    // "pp" is squeezed
    ['pp', 'p'],

    // "ph" is pronounced *f*
    ['ph', 'f']
  ],

  //-- (q)
  //----------------------------------------------------------------------------
  q: [

    // In "quadr" & "quartz", "qua" is pronounced *kwa*
    [/qua(?=rtz|dr)/, 'kwa'],

    // "qu" is pronounced *k*
    ['qu', 'k']
  ],

  //-- (r)
  //----------------------------------------------------------------------------
  r: [

    // Initial "re" is pronounced *rø* if not before vowel or two duplicate
    // consonants
    [`re(?![${VOWELS}]|(\\w)\\1)`, 'rø', INITIAL],

    // "rr" is squeezed
    ['rr', 'r'],

    // Final "rd" is pronounced *r*
    [/rd$/, 'r']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // Initial "squa" is pronounced *skwa*
    ['squa', 'skwa', INITIAL],

    // "susur" is always pronounced *sysyr*
    [/susu(?=r)/, 'sysy'],

    // "saoul" is always pronounced *su*
    [/sao[uû]l$/, 'su'],
    [/sao[uû]l/, 'sul'],

    // "saut" is always pronounced *so*
    [/sau(?=t)/, 'so'],

    // Like in german, "sch" is pronounced "ʃ"
    ['sch', 'ʃ'],

    // Non-initial "sn" is pronounced *n* if the consecutive letter is "e"
    [/sn(?=e)/, 'n', INITIAL, NEGATIVE],

    // "ss" is squeezed
    ['ss', 's'],

    // "sc" is pronounced *s* before "e", "i" or "y"
    [`sc(?=[${E + I + Y}])`, 's'],

    // "sh" is pronounced *ʃ*
    ['sh', 'ʃ'],

    // Final "s" is not pronounced, except before a "è"
    [/s$/, '', /[^è]$/],

    // "sol" is always pronounced *sol*
    ['sol', 'sol'],

    // "s" after some prefixes remain *s*
    [`s(?=[${VOWELS}])`, 's', PREFIXES_LOOKBEHIND],

    // "s" between two vowels is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${VOWELS}]$`],
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // "tape" is pronounced *tap*
    ['tape', 'tap'],

    // "tch" is pronounced *tʃ*
    ['tch', 'tʃ'],

    // "tt" is squeezed
    ['tt', 't'],

    // "tz" is pronounced *ts*
    ['tz', 'ts'],

    // "th" is pronounced *t*
    ['th', 't'],

    // "tiel" is pronounced *sjɛl
    [/tiell?/, 'sjɛl'],

    // "ti" before "on" is pronounced *sj*
    ['ti(?=on)', 'sj'],

    // Final "tie" is pronounced *si* if after a vowel.
    [/tie$/, 'si', `[${VOWELS}]$`],

    // Final "t" is rarely pronounced
    [/ts?$/, '', /[^ï]$/]
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // Final "um" is pronounced *ʌm*
    [/um$/, 'ʌm'],

    // "un" not before "n" or a vowel is pronounced *ẽ*
    [`un(?=[^${VOWELS}n]|$)`, 'ẽ'],

    // "u" before "i" is pronounced *ɥ*
    [/u(?=i)/, 'ɥ'],

    // "u" is generally pronounced *y*
    [null, 'y']
  ],

  //-- (ü)
  //----------------------------------------------------------------------------
  ü: 'y',

  //-- (û)
  //----------------------------------------------------------------------------
  û: 'y',

  //-- (v)
  //----------------------------------------------------------------------------
  v: [

    // Handling some exceptions related to "ville" & "villain-"
    [/vill(?=ain|[ae])/, 'vil'],

    // "voi" is pronounced *wa*
    ['voi', 'wa']
  ],

  //-- (x)
  //----------------------------------------------------------------------------
  x: [

    // "xc" simplifies to *ks* before "e", "i" & "y"
    [`xc(?=[${E + I + Y}])`, 'ks'],

    // Before a "u" or a "o", "x" is pronounced *ks* if not after an initial "e"
    [/x(?=[ou])/, 'ks', /^e$/, NEGATIVE],

    // Before a "i", "x" is pronounced *ks*
    [/x(?=i)/, 'ks'],

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
  ],

  //-- (z)
  //----------------------------------------------------------------------------
  z: [

    // "zz" is pronounced *dz*
    ['zz', 'dz'],

    // Initial "zoo" is pronounced "zoo"
    ['zoo', 'zoo', INITIAL]
  ]
});
