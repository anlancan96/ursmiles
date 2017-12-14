import { combineReducers } from 'redux';

import appReducer from './containers/App/reducer';
import loginReducer from './containers/LoginPage/reducer';
import modifyUserReducer from './containers/ModifyUser/reducer';
import mainPageReducer from './containers/MainPage/reducer';
import patientReducer from './containers/KhamTrongMiengPage/reducer';
import patient1Reducer from './containers/KhamNgoaiMatPage/reducer';

const rootReducers = combineReducers({
    appReducer,
    loginReducer,
    modifyUserReducer,
    mainPageReducer,
    patientReducer,
    patient1Reducer,
});

export default rootReducers;
