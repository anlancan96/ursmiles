import { fork } from 'redux-saga/effects';

import appSaga from './containers/App/saga';
import loginSaga from './containers/LoginPage/saga';
import modifyUser from './containers/ModifyUser/saga';
import mainPageSaga from './containers/MainPage/saga';

export default function* rootSaga() {
    yield [
        fork(appSaga),
        fork(loginSaga),
        fork(modifyUser),
        fork(mainPageSaga),
    ];
}
