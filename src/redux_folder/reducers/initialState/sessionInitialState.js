import LndSmtSessionClass from '../../../resources/class/session/LndSmtSessionClass';
/**
 *
 * @param{Object} sessionState
 * @return{LndSmtSessionClass} the copy
 */
export function generateSession() {
    let sessionInitialState= new LndSmtSessionClass();
    return sessionInitialState;
}
