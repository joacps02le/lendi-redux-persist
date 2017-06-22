import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import initialState from './redux_folder/reducers/initialState/index.js';
import LndSmtButton from './react_folder/components/common/LndSmtButton.jsx';
import LndSmtInput from './react_folder/components/common/LndSmtInput.jsx';
import {FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'


const store = initialState;
const userName = 'userName';

// // add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
// const store = createStore(
//     undefined,
//     compose(
//         applyMiddleware(),
//         autoRehydrate()
//     )
// )
//
// // begin periodically persisting the store
// persistStore(store, {blacklist: ['someTransientReducer']}, () => {
//     console.log('rehydration complete')
// });
debugger
let persistor = persistStore(store, {}, (err, state) => {});

class App extends Component {
    render() {
        let hideAceptar = '';
        let dsbld = false;
        let disabledSearch = 'disabled';
        const {onHandleClick, onHandleSelectDoc, userName, form, handleErrors, handleChange, handleFocus,} = this.props;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <FormGroup>
                    <div>
                        <LndSmtInput
                            className="form-control"
                            type="text"
                            component={userName}
                            form={form}
                            handleErrors={handleErrors}
                            handleChange={handleChange}
                            handleFocus={handleFocus}
                            ref={(input) => {
                                this.userName = input;
                            }}/>
                    </div>
                    <div>
                        <Button disabled={dsbld} className={disabledSearch + ' primary'} onClick={onHandleSelectDoc}
                                onBlur={this.onHandleCheckIfNumberError}>{'search_doc_button'}</Button>
                    </div>
                    <div>
                        <LndSmtButton
                            classe={hideAceptar + ' ' + ' btn btn-info2 form-control mtop15 mbottom15 xxx'}
                            value={'Accept'} onHandleClick={onHandleClick}/>
                    </div>
                </FormGroup>
            </div>
        );
    }
}

export default App;
