/**
 * Phonogram English Exceptions
 * =============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

const EXCEPTIONS = {
  aye: 'a(ye•j)',
  do: 'd(o•u)',
  i: '(i•aj)',
  lease: 'l(ea•i)s(e•)',
  leases: 'l(ea•i)s(e•i)(s•z)',
  fir: 'f(i•ʌ)r',
  firs: 'f(i•ʌ)r(s•z)',
  stephen: 'st(e•i)(ph•v)(e•ʌ)n',
  the: '(th•ð)(e•i)',
  thou: '(th•ð)(ou•aʊ)',
  to: 't(o•u)',
  warwick: 'w(a•o)r(w•)i(ck•k)',
  who: '(w•)h(o•u)',
  whom: '(w•)h(o•u)m',
  whose: '(w•)h(o•u)(s•z)(e•)'
};

export default compileExceptions(EXCEPTIONS);
