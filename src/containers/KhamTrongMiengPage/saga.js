import { apiurl } from '../../assets/consts';
import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchModify(action) {
    try {
        console.log('emit');
        const patientInfo = action.patientInfo;
        const token = action.token;
        const MaSo = action.MaSo;
        console.log(MaSo);
        let res_data;
        
        const respone = yield call(axios.post,`${apiurl}/v1/khamtrongmieng/edit/${MaSo}`,{ ...patientInfo, token, })
        if(respone.data.status === 1){
            yield put({ type: 'EMIT_MODIFY_SUCCESS', message: respone.data.message});
        }else if(respone.data.status === 0){
            yield put({ type: 'EMIT_MODIFY_FAILED', message: respone.data.message });
        }
        
    } catch (error) {
        yield put({ type: "EMIT_MODIFY_FAILED", message: 'Lỗi không xác định' });
    }
}

function* modifyPatient (){
    yield takeLatest("EMIT_MODIFY_REQUEST", fetchModify);
}

export default modifyPatient;