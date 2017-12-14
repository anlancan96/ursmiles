const initialState = {
    listBenhNhan: [],
    isVisible : false,
};

const mainPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_LIST_BENH_NHAN_SUCCESS': {
            console.log('-AnhNT-action', action);
            const listBenhNhan = action.data || [];
            return { ...state, listBenhNhan };
        }
        case 'LOGIN_FAILURE': {
            return { ...state, isLoading: false, errorMessage: action.message};
        }
        case 'LOGIN_SUCCESS': {
            return { ...state, isLoading: false, errorMessage: '' };
        }
        case 'TOGGLE_IS_ADDING': {
            return { ...state, isVisible: true};
        }
        default:
            return state;
    }
};

export default mainPageReducer;
