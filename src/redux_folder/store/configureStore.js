import {
    createStore,
    applyMiddleware,
} from 'redux';
import {
    composeWithDevTools,
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from 'redux_folder/reducers/index';
import saveState from 'redux_folder/middleware/saveState';
import logout from 'redux_folder/middleware/logout';

// const customValidation = middlewares.customValidation;
// const customFocus = middlewares.customFocus;
const enhancer = composeWithDevTools(applyMiddleware(thunk, logout, saveState,
    logger));

/**
 * [configureStore description]
 * @param  {Object} initialState [description]
 * @return {Object} store        [description]
 */
export default function configureStore(initialState) {
    return createStore(reducer, initialState, enhancer);
}