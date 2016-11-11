/**
 * Phonogram Spanish Exceptions
 * =============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

const EXCEPTIONS = {
  y: '(y•i)'
};

export default compileExceptions(EXCEPTIONS);
