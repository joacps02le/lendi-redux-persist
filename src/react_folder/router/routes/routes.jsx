import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import Base from 'react_folder/components/common/Base';
import LoginContainer from 'react_folder/components/login/LoginContainer';
import HomeContainer from 'react_folder/components/home/HomeContainer';
import ApplicationFormContainer from 'react_folder/components/applicationForm/ApplicationFormContainer';
import SecurityWrapperContainer from 'react_folder/security/SecurityWrapperContainer';

export default (
  <Route path="/" component={Base}>
        <IndexRoute component={}/>
        <Route path="/home" component={}>
            <IndexRoute component={}/>
        </Route>

    </Route>
);
