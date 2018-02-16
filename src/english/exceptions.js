/* eslint quote-props: 0 */
/**
 * Phonogram English Exceptions
 * =============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

const EXCEPTIONS = {
  a: '(a•ɛ)',
  angel: '(an•ɛjn)(g•dʒ)(e•ʌ)l',
  angels: '(an•ɛjn)(g•dʒ)(e•ʌ)l(s•z)',
  apron: '(a•ɛj)pr(o•ɔ)n',
  'aren\'t': '(aren\'•an)t',
  awry: '(aw•ɔ)r(y•aj)',
  aye: 'a(ye•j)',
  be: 'b(e•i)',
  canoe: '(c•k)(a•ʌ)n(oe•u)',
  corps: '(c•k)(o•ɔ)r(ps•)',
  do: 'd(o•u)',
  fi: 'f(i•aj)',
  greenwich: 'gr(ee•i)n(w•)i(ch•tʃ)',
  heave: 'h(ea•i)v(e•)',
  hugh: 'h(u•ju)(gh•)',
  i: '(i•aj)',
  july: '(j•dʒ)ul(y•aj)',
  lease: 'l(ea•i)s(e•)',
  leases: 'l(ea•i)s(e•i)(s•z)',
  liege: 'l(ie•i)(g•ʒ)(e•)',
  hi: 'h(i•aj)',
  once: '(o•wa)n(ce•s)',
  prayer: 'pr(ay•ɛ)(er•r)',
  prayers: 'pr(ay•ɛ)(er•r)(s•z)',
  stephen: 'st(e•i)(ph•v)(e•ʌ)n',
  the: '(th•ð)(e•i)',
  thou: '(th•ð)(ou•aʊ)',
  to: 't(o•u)',
  who: '(w•)h(o•u)',
  whom: '(w•)h(o•u)m',
  whose: '(w•)h(o•u)(s•z)(e•)',
  yes: '(y•j)(e•ɛ)s',
  you: '(y•j)(ou•u)'
};

export default compileExceptions(EXCEPTIONS);
