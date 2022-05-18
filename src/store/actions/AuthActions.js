import swal from "sweetalert";
import {
    // formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
} from '../../services/AuthService';


export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';

export function signupAction(name, email, password, password_confirmation, history) {
    return (dispatch) => {
        signUp(name, email, password, password_confirmation)
            .then((response) => {
                dispatch(confirmedSignupAction(response.data));
                history.push('/login');
            })
            .catch((err) => {
                console.log(err.response.data);
                const errors = Object.values(err.response.data.errors);
                const response = {
                    error: true,
                    message: errors.join(' '),
                };
                // const errorMessage = formatError(error.response.data);
                swal("Oops", response.message, "error");
                dispatch(signupFailedAction(response.message));
            });
    };
}

export function logout(history) {
    localStorage.removeItem('userDetails');
    history.push('/login');
    return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(email, password, history) {
    return (dispatch) => {
        login(email, password)
            .then((response) => {
                console.log(response.data);
                saveTokenInLocalStorage(response.data);
                runLogoutTimer(
                    dispatch,
                    response.data.expires_in * 1000,
                    history,
                );
                dispatch(loginConfirmedAction(response.data));
                history.push('/dashboard');
            })
            .catch((err) => {
                console.log(err.response.data);
                const errors = Object.values(err.response.data.errors);
                const response = {
                    error: true,
                    message: errors.join(' '),
                };
                swal("Oops", response.message, "error");
                dispatch(loginFailedAction(response.message));
            });
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}
