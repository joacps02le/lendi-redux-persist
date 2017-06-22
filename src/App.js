import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import initialState from 'redux_folder/reducers/initialState/index';
import LndSmtButton from 'react_folder/components/common/LndSmtButton';
import {FormGroup, ControlLabel, Button} from 'react-bootstrap';

const store = initialState;

class App extends Component {

    render() {
        let hideAceptar = '';
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
                    <Button disabled={dsbld} className={disabledSearch + ' primary'} onClick={onHandleSelectDoc}
                            onBlur={this.onHandleCheckIfNumberError}>{t('search_doc_button')}</Button>
                    <LndSmtButton
                        classe={hideAceptar + ' ' + ' btn btn-info2 form-control mtop15 mbottom15 xxx'}
                        value={t('Accept')} onHandleClick={onHandleClick}/>
                </FormGroup>
            </div>
        );
    }
}

export default App;
