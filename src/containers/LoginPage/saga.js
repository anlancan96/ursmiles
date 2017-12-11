// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import md5 from 'md5';

function* fetchLogin(action) {
    try {
        const url = 'http://localhost:3001/v1/account/login';
        const req_body = {
            Username: action.Username,
            Password: md5(action.Password),
        };

        let res_data;

        yield fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req_body),
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            res_data = responseJson;
        }).catch(e => console.log('-AnhNT-', e));
        if (res_data.status === 1) {
            yield put({ type: "LOGIN_SUCCESS", token: res_data.token });
        } else if (res_data.status === 0)
            yield put({ type: "LOGIN_FAILURE", message: res_data.message });
    } catch (e) {
        yield put({ type: "LOGIN_FAILURE" });
    }
}

function* loginSaga() {
    yield takeLatest("LOGIN_REQUEST", fetchLogin);
}

export default loginSaga;