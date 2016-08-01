/**
 * Phonogram French Exceptions
 * ============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

export default compileExceptions({
  bruxelles: 'br(u•y)(x•s)e(lles•l)',
  femme: 'f(e•a)(mme•m)',
  villa: 'villa'
});


// bruxelles, auxerres
// mille, ville, tranquille, villa
// outil, fusil, fils, ail
// mes, tes, ses, est, plus
// os
// gnou
// gnose
// diazote
// tabac
// croc
// rhésus us$, us & coutumes

// couvent, plus, est, +ment$

// ü û
// accent boniment mentent mangent, filament, proclament
// dévient devient
// final lle?s? -> el

// poubelle, truelle
