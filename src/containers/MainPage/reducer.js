const initialState = {
    listBenhNhan: [],
    isShowListButton: false,
    focusBenhAn : '',
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
        case 'FOCUS_BENH_AN': {
            return { ...state, focusBenhAn: action.MaSo, isShowListButton: true };
        }
        case 'UNFOCUS_BENH_AN': {
            return { ...state, focusBenhAn: '', isShowListButton: false };
        }
        default:
            return state;
    }
};

export default mainPageReducer;
