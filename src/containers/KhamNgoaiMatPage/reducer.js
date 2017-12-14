
const initialState = {
    isLoading : false,
    patientInfo : {},
    message : '',
    token : '',
}

const patient1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EMIT_MODIFY_REQUEST-1':
            return { ...state, isLoading: true, patientInfo: action.patientInfo, token: action.token};
        case 'EMIT_MODIFY_FAILED-1':
            return { ...state, isLoading: false, message: action.message};
        case 'EMIT_MODIFY_SUCCESS-1':
            return { ...state, isLoading: false, message: action.message};
        default :
            return state;       
    }
}

export default patient1Reducer;