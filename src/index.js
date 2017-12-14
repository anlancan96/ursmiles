import React from 'react';
import ReactDOM from 'react-dom';
import jwt from 'jsonwebtoken';
import { secret } from './assets/consts'; 

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/App';

import configureStore from './configureStore';
import { setCurrentUser } from './containers/App/actions';

const store = configureStore();

if (localStorage.user) {
    const verifyUser = jwt.verify(localStorage.user, secret);
    store.dispatch(setCurrentUser(verifyUser.userData));
}

const AppConfig = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<AppConfig/>, document.getElementById('root'));
