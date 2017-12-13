import { combineReducers } from 'redux';

import appReducer from './containers/App/reducer';
import loginReducer from './containers/LoginPage/reducer';
import modifyUserReducer from './containers/ModifyUser/reducer';
import mainPageReducer from './containers/MainPage/reducer';

const rootReducers = combineReducers({
    appReducer,
    loginReducer,
    modifyUserReducer,
    mainPageReducer,
});

export default rootReducers;
