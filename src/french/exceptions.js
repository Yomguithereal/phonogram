/**
 * Phonogram French Exceptions
 * ============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

const EXCEPTIONS = compileExceptions({
  auxerres: '(au•o)(x•s)ɛ(rres•r)',
  barbecue: 'barb(e•ø)(cue•kju)',
  bruxelles: 'br(u•y)(x•s)ɛ(lles•l)',
  femme: 'f(e•a)(mme•m)',
  mes: 'm(es•ɛ)',
  ses: 's(es•ɛ)',
  tes: 't(es•ɛ)',
  villa: 'villa'
});

export default EXCEPTIONS;

// MULTI:
// couvent, plus, est, os, dessein

// mille, ville, tranquille, villa
// outil, fusil, fils, ail
// os
// diazote
// tabac
// croc
// rhésus us$, us & coutumes

// couvent, plus, est, +ment$

// ü û
// accent boniment mentent mangent, filament, proclament
// dévient devient
