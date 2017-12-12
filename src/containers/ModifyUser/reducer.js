const initialState = {
    isLoading: false,
    reqMessage: '',
};

const modifyUserReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'MODIFY_USER_REQUEST': {
            return { ...state, isLoading: true, reqMessage: '' };
        }
        case 'MODIFY_USER_FAILURE': {
            return { ...state, isLoading: false, reqMessage: action.message };
        }
        case 'MODIFY_USER_SUCCESS': {
            return { ...state, isLoading: false, reqMessage: action.message };
        }
        default:
            return state;
    }
};

export default modifyUserReducer;
