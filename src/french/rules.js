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
export const LIGATURE = 'æœ';
export const VOWELS = A + E + I + O + U + Y + LIGATURE;

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

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // "aiguill" is pronounced *ɛgɥij*
    ['aiguill', 'ɛgɥij'],

    // "alcool" is pronounced *alkɔl*
    [/alcool/, 'alkɔl'],

    // Final "amment" is prononced *ã*
    [/amment$/, 'amã'],

    // Generally, final "ach" is pronounced *ak*
    [/ach$/, 'ak'],

    // Final "aient" is pronounced *ɛ*
    [/aient$/, 'ɛ'],

    // Final "ault" is pronounced *o*
    [/aults?$/, 'o'],

    // Final "aud" is pronounced *o*
    [/auds?$/, 'o'],

    // "aing" & "ain" are pronounced *ẽ*
    [/aing?$/, 'ẽ'],

    // Final "aix" is generally pronounced *ɛ*
    [/aix$/, 'ɛ', /.$/],

    // "aim" or "ain" is pronounced *ẽ* when final or not before the same
    // consonant or vowel.
    [`(?:ai[mn]s?$|ai[mn](?![${VOWELS}mn]))`, 'ẽ'],

    // Final "ail" is pronounced *aj*
    [/ails?$/, 'aj'],

    // "asl" before "e" or "in" is pronounced *al*
    [/asl(?=e|in)/, 'al'],

    // "aill" is pronounced *aj*
    [/aill/, 'aj'],

    // "aon" is always pronounced *ã*
    ['aon', 'ã'],

    // Final "anc" is pronounced *ã*
    [/anc$/, 'ã'],

    // Final "ant" is pronounced *ã*
    [/ant$/, 'ã'],

    // Final "and" is pronounced *ã*
    [/ands?$/, 'ã', /[^l]$/],

    // "an" is pronounced *ã*
    [`an(?=[^${VOWELS}n]|$)`, 'ã'],

    // "am" before "b" or "p" is pronounced *ã*
    [/(?:amps?$|am(?=[bp]))/, 'ã'],

    // Final "aye"
    [/aye$/, 'ɛi', /abb$/],
    [/aye$/, 'ɛ', /.{3,}/],
    [/aye$/, 'ɛj'],

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
  â: [

    // "âill" is pronounced *aj*
    [/âill/, 'aj'],

    // "â" is pronounced *a*
    [null, 'a']
  ],

  //-- (b)
  //----------------------------------------------------------------------------
  b: [

    // In "bourg", the final "g" is silent
    [/bourgs?$/, 'bur'],

    // "bv" is pronounced *v*
    ['bv', 'v'],

    // "bb" is squeezed
    ['bb', 'b']
  ],

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // "corps" is pronounced *kɔr*
    [/corps/, 'kɔr'],

    // "cq" & "cqu" are squeezed
    [/cqu?/, 'k'],

    // "cc" before "e" or "i" is pronounced *ks*
    [/cc(?=[eéi])/, 'ks'],

    // "cc" is squeezed
    ['cc', 'k'],

    // Words finishing by "clerc" pronounce it "klɛr"
    [/clercq?s?/, 'klɛr'],

    // Words finishing by "clef" pronounce it "kle"
    [/clefs?$/, 'kle'],

    // Words finishing by "cul" pronounce it "ky"
    [/culs?$/, 'ky'],

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

  greekCh: 'k',

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

    // Final "ew" is pronounced like in English *u*
    [/ews?$/, 'u'],

    // If "e" is the last letter of a two-letters words
    [/e$/, 'ø', /^.$/],

    // Initial "emm" or "enn" is pronounced *ã*
    [/en(?=nu)/, 'ã', INITIAL],
    [/em(?=me)/, 'ã', INITIAL],

    // "en" after "d" or "b" and before "g", "j" or "z" is pronounced *ẽ*
    [/en(?=[gjz])/, 'ẽ', /[bd]$/],

    // Final "emment" is pronounced *amã*
    [/emment$/, 'amã'],

    // Final "ement" is pronounced *øment*
    [/ements?$/, 'ømã'],

    // Final "ents" is pronounced *ã*
    [/ents$/, 'ã'],

    // Final "erf" after "c", "n" or "s" is pronounced *ɛr*
    [/erfs?$/, 'ɛr', /[cns]$/],

    // Final "ert" or "ers" is pronounced *ɛr*
    [/(?:erts?$|ers$)/, 'ɛr', /[^i]$/],

    // "e" before two doubled consonants is pronounced *ɛ*
    ['e(?=([rnpt])\\1)', 'ɛ'],

    // "em" before "b" or "p" is pronounced *ã*
    [/em(?=[bp])/, 'ã'],

    // Final "end" is pronouned *ã*
    [/end$/, 'ã'],

    // "en" before a not final "t" or "s" is pronounced *ã*
    [/en(?=[cçdgst].)/, 'ã'],

    // "eill" is pronounced *ɛj*
    ['eill', 'ɛj'],

    // "elle" is pronounced *ɛl*
    ['elle', 'ɛl'],

    // Final "esse" is pronounced *ɛs*
    [/esses?$/, 'ɛs'],

    // Final "ein" is pronounced *ẽ*
    [/eins?$/, 'ẽ'],

    // "eau" is pronounced *o*
    [/eaux?/, 'o'],

    // "euil" & "euille" are pronounced *øj*
    [/euil(?:le)?/, 'ʌj'],

    // Initial "eu" is pronounced *u* alone or before "s" & "t"
    [/e[uû](?=t?$|e$|ss)/, 'y', INITIAL],

    // Final "euf" is pronounced *ʌf*
    [/eufs?/, 'ʌf'],

    // "eu" before final "r", final "b" or "rre" is pronounced *ʌ*
    [/eu(?=r[st]?$|b$|rres?$)/, 'ʌ'],

    // Final "eu" is pronounced *ø*
    [/eux?/, 'ø'],

    // "ei" is pronounced *ɛ*
    [`e[iy](?![${VOWELS}])`, 'ɛ'],

    // Final "ez" is pronounced *e*
    [/ez$/, 'e'],

    // Final "er" is pronounced *ɛr* if the word is very short
    [/ers?$/, 'ɛr', /^.$/],

    // Final "er" is prounounced *e*
    [/ers?$/, 'e'],

    // Final "et" is pronounced "ɛ"
    [/ets?$/, 'ɛ'],

    // Final "ents" is pronounced *ã*
    [/ents$/, 'ã'],

    // Final "ent" without "s" is silent
    [/ent$/, ''],

    // Final "e" is not pronounced
    [/es?$/],

    // Final "eth" is pronounced *ɛt*
    [/eths?$/, 'ɛt'],

    // "e" before "x" is pronounced *ɛ*
    [/e(?=x)/, 'ɛ'],

    // "e" before some doubled consonants is prounced *e*
    [/e(?=ss|ff)/, 'e'],

    // "e" before some letters is pronounced *ɛ* if no vowel comes after
    [`e(?=[lmnprz](?![${VOWELS}])|s(?![${VOWELS}s])|c(?![${VOWELS}l])|t[sz]|ll|tt|nn|bvr)`, 'ɛ'],

    // In latin words, "e" is pronounced "e"
    [/e(?=.+um$)/, 'e'],

    // Else, "e" is generally pronounced *ø*
    [null, 'ø']
  ],

  //-- (é)
  //----------------------------------------------------------------------------
  é: [

    // Final "ément" is pronounced "emã"
    [/ément$/, 'emã'],

    // Final "éen" is pronounced *eẽ*
    [/éen$/, 'eẽ'],

    // Final "ée" is pronounced "e"
    [/ée$/, 'e'],

    // "é" is pronounced *e*
    [null, 'e']
  ],

  //-- (è)
  //----------------------------------------------------------------------------
  è: [

    // Final "ès" is pronounced *ɛ*
    [/ès$/, 'ɛ', /.$/],

    // "é" is pronounced *ɛ*
    [null, 'ɛ']
  ],

  //-- (ê)
  //----------------------------------------------------------------------------
  ê: 'ɛ',

  //-- (ë)
  //----------------------------------------------------------------------------
  ë: 'ɛ',

  //-- (f)
  //----------------------------------------------------------------------------
  f: [

    // Final "fum" is pronounced *fẽ*
    [/fums?$/, 'fẽ'],

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

    // "gn" before "i" is pronounced *n*
    [/gn(?=i)/, 'n'],

    // "gn" is pronounced *nj*
    ['gn', 'nj'],

    // "g" before "a" or "o" is pronounced *ʒ*
    [/ge(?=[aoô])/, 'ʒ'],

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

    // Fnal "ingt" is pronounced *ẽ*
    [/ingt$/, 'ẽ'],

    // "in" before a consonant which is not "n" or final is pronounced *ẽ*
    [`i([mn])(?=$|[^${VOWELS}\\1])`, 'ẽ'],

    // Final "ied" is pronounced *je*
    [/ieds?/, 'je'],

    // Final "ie" is pronounced *i*
    [/ies?$/, 'i'],

    // "isle" is pronounced *il*
    [/isl(?=e)/, 'il'],

    // Sometimes, "ient" is pronounced *iã*
    [/ien(?=t)/, 'iã', /cl$/],

    // Final "ient" is pronounced *i*
    [/ient$/, 'i', /[^t]$/],

    // "ian", "ien" & "ion" are pronounced *j*
    [/ian/, 'jã'],
    [/ien(?=n)/, 'jɛ'],
    [/ien/, 'jẽ'],
    [/ion/, 'jõ'],

    // Final "iement" is pronounced *imã*
    [/iements?$/, 'imã'],

    // "i" before some vowels is pronounced *j*
    [`i(?=[${A + E + O + U}])`, 'j']
  ],

  //-- (ï)
  //----------------------------------------------------------------------------
  ï: [

    [`ï(?=[${A + E}]n)`, 'j'],

    [null, 'i']
  ],

  //-- (î)
  //----------------------------------------------------------------------------
  î: 'i',

  //-- (j)
  //----------------------------------------------------------------------------
  j: [

    // "je" before "a" or "o" is pronounced *ʒ*
    [/je(?=[ao])/, 'ʒ'],

    [null, 'ʒ']
  ],

  //-- (l)
  //----------------------------------------------------------------------------
  l: [

    // "ll" is squeezed
    ['ll', 'l']
  ],

  //-- (m)
  //----------------------------------------------------------------------------
  m: [

    // Final "ment" is pronounced *mã*
    [/ments?$/, 'mã'],

    // Initial "mille" is pronounced *mil* if not before a "t"
    [/mille(?!t)/, 'mil', INITIAL],

    // "moell" is pronounced *mwal*
    [/moell/, 'mwal'],

    // "m" is squeezed
    ['mm', 'm']
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

    // Final "oeil" is pronounced *ʌj*
    [/oeil$/, 'ʌj'],

    // "ooing", oing", "oint" or "oin" are pronounced *wẽ*
    [`o?oin[gt]?(?![${VOWELS}])`, 'wẽ'],

    // "oi" is pronounced *wa*
    [/(?:oids?|o[iî]x?|oy$)/, 'wa'],

    // Final "ond" is pronounced *õ*
    [/onds?$/, 'õ'],

    // Final "onc" is prononced *õ*
    [/oncs?$/, 'õ', /[^d]$/],

    // Final "oup" is sometimes pronounced *u*
    [/oups?/, 'u', /[cl]$/],

    // "ont" is pronounced *õ* before some letters
    [/ont(?=j)/, 'õ'],

    // "on" is prononced *õ*
    [`on(?=[^${VOWELS}nh]|$)`, 'õ'],

    // Final "omb" is pronounced *õ*
    [/ombs?$/, 'õ'],

    // Final "oult" is pronounced *u*
    [/oults?$/, 'u'],

    // "ompt" is sometimes pronounced *õt*
    [/ompt$/, 'õ'],
    [/ompt/, 'õt', /(?:pr|d)$/, NEGATIVE],

    // "om" before "b", "p" or "t" is pronounced *õ*
    [/om(?=[bpt])/, 'õ'],

    // "oy" is pronounced *waj* before a and if the wor
    [/oy(?=[a])/, 'waj', /.+/],

    // "ou" before some vowels is pronounced *w*
    [/ou(?=[ai]|e(?:ll|nn|tt))/, 'w'],

    // "ou" is generally pronounced *u*
    [/o[uùû]x?/, 'u'],

    // "oo" is generally pronounced *u*
    [/oo/, 'u'],

    // "oeu" is generally pronounced *ʌ*
    [/oeu/, 'ʌ'],

    // "oe" is pronounced *ø*
    [/oe/, 'ø'],

    // "oê" is pronounced *wa*
    [/oê/, 'wa'],

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
    [/o(?=ble|c?k|ch(?![iy])|qu)/, 'ɔ'],

    // "o" before some doubled consonants is pronounced *ɔ*
    [/o(?=ll|mm|nn|tt|ss)/, 'ɔ'],

    // Final "o" before a single consonant is pronounced *ɔ*
    [`o(?=[^${VOWELS}](?:es?|s?)$|r[dt]s?$)`, 'ɔ']
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

    // "pay" before "sa" is pronounced *pɛi*
    [/(?:^pays$|pay(?=sa))/, 'pɛi'],

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

    // q followed by û is pronounced *ky*
    ['qû', 'ky'],

    // "q(u)" is pronounced *k*
    [/qu?/, 'k']
  ],

  //-- (r)
  //----------------------------------------------------------------------------
  r: [

    // Initial "re" is pronounced *rø* if not before vowel or two duplicate
    // consonants
    [`re(?![${VOWELS}]|s[pt]|[^${VOWELS}s]{2})`, 'rø', INITIAL],

    // "rr" is squeezed
    ['rr', 'r'],

    // Final "rd" is pronounced *r*
    [/rds?$/, 'r']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // "sec(ond)" is prounounced *søg*
    [/sec(?=ond)/, 'søg'],

    // Final "sang" is pronounced *sã*
    [/sangs?$/, 'sã'],

    // Initial "squa" is pronounced *skwa*
    ['squa', 'skwa', INITIAL],

    // "susur" is always pronounced *sysyr*
    [/susu(?=r)/, 'sysy'],

    // "sthm" is pronounced *sm*
    ['sthm', 'sm'],

    // "saoul" is always pronounced *su*
    [/sao[uû]l$/, 'su'],
    [/sao[uû]l/, 'sul'],

    // "saut" is always pronounced *so*
    [/sau(?=t)/, 'so'],

    // Like in german, "sch" is pronounced "ʃ"
    ['sch', 'ʃ'],

    // Non-initial "sn" is pronounced *n* if the consecutive letter is "e"
    [/sn(?=e|il)/, 'n', INITIAL, NEGATIVE],

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
    [`s(?=[${VOWELS}])`, 'z', `[${VOWELS}r]$`],
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // Final "temps" is pronounced *tã*
    [/temps$/, 'tã'],

    // "tape" is pronounced *tap*
    ['tape', 'tap'],

    // "tch" is pronounced *tʃ*
    ['tch', 'tʃ'],

    // "tt" is squeezed
    ['tt', 't'],

    // "tz" is generally pronounced *ts* (exception: Bretzel)
    ['tz', 'ts'],

    // "th" is pronounced *t*
    ['th', 't'],

    // "tiel" is pronounced *sjɛl
    [/tiell?/, 'sjɛl'],

    // "sti" before "on" is pronounced *stj*
    [/ti(?=on)/, 'tj', /s$/],

    // "ti" before "on" is pronounced *sj*
    [/ti(?=on)/, 'sj'],

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

    // "uy" before a vowel is pronounced *ɥij*
    [`uy(?=[${VOWELS}])`, 'ɥij'],

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
    [/vill(?=ain|[ae])/, 'vil', /che/, NEGATIVE],

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

    // Before a "i", "x" is sometimes pronounced *ks*
    [/x(?=i(?:ll|e))/, 'ks'],

    // Before another vowel, "x" is pronounced *gz*
    [`x(?=[${VOWELS}])`, 'gz'],

    // Else it is pronounced *ks*
    [null, 'ks']
  ],

  //-- (y)
  //----------------------------------------------------------------------------
  y: [

    // "yg" before "d" is pronouncde *i*
    [/yg(?=d)/, 'i'],

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
