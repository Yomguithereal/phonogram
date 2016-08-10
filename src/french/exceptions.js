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
  auxerres: '(au•o)(x•s)ɛ(rres•r)',
  barbecue: 'barb(e•ø)(cue•kju)',
  bruxelles: 'br(u•y)(x•s)ɛ(lles•l)',
  es: '(es•ɛ)',
  est: '(est•ɛ)',
  et: 'e(t•)',
  femme: 'f(e•a)(mme•m)',
  fils: 'fi(ls•s)',
  gageure: 'ga(g•ʒ)(eu•y)r(e•)',
  jeun: '(j•ʒ)(eun•ẽ)',
  les: 'l(es•ɛ)',
  mes: 'm(es•ɛ)',
  messieurs: 'me(ssieurs•sjø)',
  monsieur: 'm(on•ø)s(ieur•jø)',
  munster: 'm(un•ẽ)st(e•ɛ)r',
  münster: 'm(ün•ẽ)st(e•ɛ)r',
  nos: 'n(os•o)',
  oignon: '(oi•o)(gn•nj)(on•õ)',
  que: '(qu•k)(e•ø)',
  ses: 's(es•ɛ)',
  tes: 't(es•ɛ)',
  vos: 'v(os•o)',
  wagon: '(w•v)ag(on•õ)'
};

const plurals = [
  'août',
  'aout',
  'aoûtat',
  'aoutat',
  'aigüe',
  'aiguë',
  'femme',
  'gageure',
  'monsieur',
  'oignon',
  'villa',
  'wagon'
];

plurals.forEach(word => {
  const plural = word + 's';
  EXCEPTIONS[plural] = EXCEPTIONS[word] + '(s•)';
});

export default compileExceptions(EXCEPTIONS);
