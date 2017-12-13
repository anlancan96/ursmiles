// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import { apiurl } from '../../assets/consts';

function* fetchListBenhNhan(action) {
    try {
        const url = `${apiurl}/v1/benhnhan/getbyidbs/${action.IDBacSi}`;

        let res_data;

        yield fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            res_data = responseJson;
            console.log('-AnhNT-', res_data);
        }).catch(e => console.log('-AnhNT-', e));
        if (res_data.status === 1) {
            yield put({ type: "GET_LIST_BENH_NHAN_SUCCESS", data: res_data.data });
        } else if (res_data.status === 0)
            yield put({ type: "GET_LIST_BENH_NHAN_FAILURE", message: res_data.message });
    } catch (e) {
        yield put({ type: "GET_LIST_BENH_NHAN_FAILURE", message: 'Lỗi không xác định' });
    }
}

function* mainPageSaga() {
    yield takeLatest("GET_LIST_BENH_NHAN_REQUEST", fetchListBenhNhan);
}

export default mainPageSaga;