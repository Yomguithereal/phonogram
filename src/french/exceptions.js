/**
 * Phonogram French Exceptions
 * ============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

const EXCEPTIONS = compileExceptions({
  auxerres: '(au•o)(x•s)ɛ(rres•r)',
  bruxelles: 'br(u•y)(x•s)ɛ(lles•l)',
  femme: 'f(e•a)(mme•m)',
  villa: 'villa'
});

export default EXCEPTIONS;

// MULTI:
// couvent, plus, est

// mille, ville, tranquille, villa
// outil, fusil, fils, ail
// mes, tes, ses, est, plus
// os
// diazote
// tabac
// croc
// rhésus us$, us & coutumes

// couvent, plus, est, +ment$

// ü û
// accent boniment mentent mangent, filament, proclament
// dévient devient
