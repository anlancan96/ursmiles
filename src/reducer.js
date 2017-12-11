import { combineReducers } from 'redux';

import appReducer from './containers/App/reducer';
import loginReducer from './containers/LoginPage/reducer';

const rootReducers = combineReducers({
    appReducer,
    loginReducer,
});

export default rootReducers;
