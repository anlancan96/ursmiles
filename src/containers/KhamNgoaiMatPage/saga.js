import { apiurl } from '../../assets/consts';
import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchModify1(action) {
    try {
        console.log('emit');
        const patientInfo = action.patientInfo;
        const token = action.token;
        const MaSo = action.MaSo;
        let res_data;
        
        const respone = yield call(axios.post,`${apiurl}/v1/khamngoaimat/edit/${MaSo}`,{ ...patientInfo, token, })
        if(respone.data.status === 1){
            yield put({ type: 'EMIT_MODIFY_SUCCESS-1', message: respone.data.message});
        }else if(respone.data.status === 0){
            yield put({ type: 'EMIT_MODIFY_FAILED-1', message: respone.data.message });
        }
        
    } catch (error) {
        yield put({ type: "EMIT_MODIFY_FAILED-1", message: 'Lỗi không xác định' });
    }
}

function* modifyPatient1 (){
    yield takeLatest("EMIT_MODIFY_REQUEST-1", fetchModify1);
}

export default modifyPatient1;