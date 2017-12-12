const initialState = {
    isLoading: false,
    errorMessage: '',
};

const loginReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'LOGIN_REQUEST': {
            return { ...state, isLoading: true };
        }
        case 'LOGIN_FAILURE': {
            return { ...state, isLoading: false, errorMessage: action.message };
        }
        case 'LOGIN_SUCCESS': {
            return { ...state, isLoading: false, errorMessage: '' };
        }
        default:
            return state;
    }
};

export default loginReducer;
