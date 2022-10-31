import {
    LOGIN_SUCCESS,
    FORM_RESET,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
} from "../utils/constants/actions-types";

const initialState = {
    user: {},
    isLoggedIn: false,
    isRegistered: false,
    success: "",
    error: "",
    errors: {}
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {...state, isLoggedIn: true};

        case LOGIN_FAILURE:
            return {...state, error: payload};

        case FORGOT_PASSWORD_SUCCESS:
            return {...state, success: payload};

        case FORGOT_PASSWORD_FAILURE:
            return {...state, error: payload};

        case LOGOUT_SUCCESS:
            return {...state, isLoggedIn: false, user: {}};

        case FORM_RESET:
            return {...state, error: "", errors: {}, success: "", isRegistered: false};

        default:
            return state;
    }
};

export default reducer;

