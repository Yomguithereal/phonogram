/**
 * Phonogram English Exceptions
 * =============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

const EXCEPTIONS = {
  and: '(a•ɛ)nd',
  aye: 'a(ye•j)',
  do: 'd(o•u)',
  i: '(i•aj)',
  lease: 'l(ea•i)s(e•)',
  leases: 'l(ea•i)s(e•i)(s•z)',
  hi: 'h(i•aj)',
  stephen: 'st(e•i)(ph•v)(e•ʌ)n',
  the: '(th•ð)(e•i)',
  thou: '(th•ð)(ou•aʊ)',
  to: 't(o•u)',
  who: '(w•)h(o•u)',
  whom: '(w•)h(o•u)m',
  whose: '(w•)h(o•u)(s•z)(e•)'
};

export default compileExceptions(EXCEPTIONS);
