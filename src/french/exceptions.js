/**
 * Phonogram French Exceptions
 * ============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

const EXCEPTIONS = {
  aigüe: '(ai•ɛ)(güe•gy)',
  aiguë: '(ai•ɛ)(guë•gy)',
  ail: 'a(il•j)',
  almanach: 'almana(ch•)',
  août: '(aoû•u)t',
  aout: '(aou•u)t',
  aoûtat: 'a(oû•u)ta(t•)',
  aoutat: 'a(oû•u)ta(t•)',
  aulx: '(aulx•o)',
  auxerres: '(au•o)(x•s)ɛ(rres•r)',
  azimut: 'azim(u•y)t',
  barbecue: 'barb(e•ø)(cue•kju)',
  broc: 'br(oc•o)',
  bruxelles: 'br(u•y)(x•s)ɛ(lles•l)',
  but: 'b(u•y)t',
  ceci: '(c•s)(e•ø)(c•s)i',
  chut: '(ch•ʃ)(u•y)t',
  croc: '(c•k)r(oc•o)',
  es: '(es•ɛ)',
  est: '(est•ɛ)',
  estomac: '(e•ɛ)stom(ac•a)',
  et: 'e(t•)',
  femme: 'f(e•a)(mme•m)',
  fils: 'fi(ls•s)',
  gageure: 'ga(g•ʒ)(eu•y)r(e•)',
  impatiemment: '(im•ẽ)pa(tiemment•sjamã)',
  jeun: '(j•ʒ)(eun•ẽ)',
  les: 'l(es•ɛ)',
  mes: 'm(es•ɛ)',
  messieurs: 'me(ssieurs•sjø)',
  monsieur: 'm(on•ø)s(ieur•jø)',
  moult: 'm(ou•u)lt',
  munster: 'm(un•ẽ)st(e•ɛ)r',
  münster: 'm(ün•ẽ)st(e•ɛ)r',
  net: 'n(et•ɛt)',
  nos: 'n(os•o)',
  oignon: '(oi•o)(gn•nj)(on•õ)',
  patiemment: 'pa(tiemment•sjamã)',
  que: '(qu•k)(e•ø)',
  rut: 'r(u•y)t',
  ses: 's(es•ɛ)',
  tabac: 'tab(ac•a)',
  tes: 't(es•ɛ)',
  tranquille: 'tr(an•ã)(qu•k)i(lle•l)',
  trans: 'tr(an•ã)s',
  troyes: 'tr(oyes•wa)',
  uppercut: '(u•y)(pp•p)(e•ɛ)r(c•k)(u•y)t',
  vos: 'v(os•o)',
  yaourt: '(y•j)a(ou•u)rt',
  wagon: '(w•v)ag(on•õ)'
};

const plurals = [
  'aigüe',
  'aiguë',
  'août',
  'aout',
  'aoûtat',
  'aoutat',
  'azimut',
  'broc',
  'but',
  'chut',
  'croc',
  'estomac',
  'femme',
  'gageure',
  'monsieur',
  'moult',
  'net',
  'oignon',
  'rut',
  'tabac',
  'uppercut',
  'villa',
  'yaourt',
  'wagon'
];

plurals.forEach(word => {
  const plural = word + 's';
  EXCEPTIONS[plural] = EXCEPTIONS[word] + '(s•)';
});

export default compileExceptions(EXCEPTIONS);
