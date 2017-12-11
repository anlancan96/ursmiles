import React from'react';
import ReactDOM from'react-dom';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Register from './containers/Register';
import PatientInfo from './containers/private/PatientInfo';
import UserInfo from './containers/private/UserInfo';

ReactDOM.render((
    <BrowserRouter>
      <Switch>
          <Route path="/private/userInfo" component={UserInfo} />
          <Route path="/patientInfo" component={PatientInfo} />
          <Route path="/register" component={Register}/> 
          <Route path="/" component={HomePage} />     
      </Switch>
    </BrowserRouter>  
  ), document.getElementById('root'));