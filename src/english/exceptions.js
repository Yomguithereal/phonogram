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
  aye: 'a(ye•j)',
  be: 'b(e•i)',
  canoe: '(c•k)(a•ʌ)n(oe•u)',
  corps: '(c•k)(o•ɔ)r(ps•)',
  do: 'd(o•u)',
  fi: 'f(i•aj)',
  greenwich: 'gr(ee•i)n(w•)i(ch•tʃ)',
  hugh: 'h(u•ju)(gh•)',
  i: '(i•aj)',
  lease: 'l(ea•i)s(e•)',
  leases: 'l(ea•i)s(e•i)(s•z)',
  hi: 'h(i•aj)',
  once: '(o•wa)n(ce•s)',
  stephen: 'st(e•i)(ph•v)(e•ʌ)n',
  the: '(th•ð)(e•i)',
  thou: '(th•ð)(ou•aʊ)',
  to: 't(o•u)',
  who: '(w•)h(o•u)',
  whom: '(w•)h(o•u)m',
  whose: '(w•)h(o•u)(s•z)(e•)'
};

export default compileExceptions(EXCEPTIONS);
