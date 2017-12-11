import jwt from 'jsonwebtoken';

const initialState = {
    isLogin: false,
    userData: {},
};

const appReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            localStorage.setItem('user', action.token);
            const verifyToken = jwt.verify(action.token, 'ursmiles');
            localStorage.setItem('lastuserloginname', verifyToken.userData.Username);
            return { ...state, isLogin: true, userData: verifyToken.userData };
        }
        case 'SET_CURRENT_USER': {
            console.log('-AnhNT-reducer', action);
            return { ...state, userData: action.userData, isLogin: true };
        }
        case 'LOG_OUT': {
            localStorage.removeItem('user');
            return { ...state, userData: {}, isLogin: false };
        }
        default:
            return state;
    }
};

export default appReducer;
