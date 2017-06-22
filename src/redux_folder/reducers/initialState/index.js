import {generateSession} from './sessionInitialState';
// import {generateLogin} from './loginFormInitialState';
// import {lendismartModelInitialState} from './lendismartModelInitialState';
// import applicationFormInitialState from './applicationForm/index';
// import homeFormInitialState from './homeFormInitialState';
// import properties from 'properties';
// import utils from 'utils';
// let auxState = JSON.parse(sessionStorage.getItem(properties.common.lendiSessionState));

// if (!utils.common.isSomething(auxState)) {
//     let tmpState = {};
//     tmpState.session = null;
//     tmpState.lendismartModel = null;
//     tmpState.loginForm = null;
//     tmpState.homeForm = null;
//     auxState = tmpState;
// }
/**
 * form takes initialState in combineForms
 * @type {{session, lendismartModel, loginForm: *, applicationForm: type[], homeForm}}
 */
let initialState = {
    session: generateSession(),
    // session: generateSession(auxState.session),
    // lendismartModel: lendismartModelInitialState(auxState.lendismartModel),
    // loginForm: generateLogin(auxState.loginForm),
    // applicationForm: applicationFormInitialState.generate(auxState.applicationForm),
    // homeForm: homeFormInitialState.initialFormStates(auxState.homeForm),
};
export default initialState;
