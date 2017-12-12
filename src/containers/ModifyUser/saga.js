// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchModify(action) {
    try {
        const url = `http://localhost:3001/v1/account/edit/${action.ID}`;
        const req_body = action.data;

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
            yield put({ type: "MODIFY_USER_SUCCESS", message: res_data.message });
            yield put({ type: "LOGIN_SUCCESS", token: res_data.token });
        } else if (res_data.status === 0)
            yield put({ type: "MODIFY_USER_FAILURE", message: res_data.message });

    } catch (e) {
        yield put({ type: "MODIFY_USER_FAILURE", message: 'Lỗi không xác định!' });
    }
}

function* modifyUser() {
    yield takeLatest("MODIFY_USER_REQUEST", fetchModify);
}

export default modifyUser;