
const initialState = {
    isLoading : false,
    patientInfo : {},
    message : '',
    token : '',
}

const patientReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EMIT_MODIFY_REQUEST':
            return { ...state, isLoading: true, patientInfo: action.patientInfo, token: action.token};
        case 'EMIT_MODIFY_FAILED':
            return { ...state, isLoading: false, message: action.message};
        case 'EMIT_MODIFY_SUCCESS':
            return { ...state, isLoading: false, message: action.message};
        default :
            return state;       
    }
}

export default patientReducer;