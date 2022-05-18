import swal from "sweetalert";
import {
    loginConfirmedAction,
    logout,
} from '../store/actions/AuthActions';
import Http from '../Http';

export function signUp(name, email, password, password_confirmation) {
    //axios call
    const postData = {
        name,
        email,
        password,
        password_confirmation
    };
    return Http.post('/auth/register', postData);
    // return () => new Promise((resolve, reject) => {
    //     Http.post('/auth/register', postData)
    //         .then((res) => resolve(res.data))
    //         .catch((err) => {
    //             const { status, errors } = err.response.data;
    //             const data = {
    //                 status,
    //                 errors,
    //             };
    //             return reject(data);
    //         });
    // });
}

export function login(email, password) {
    const postData = {
        email,
        password
    };
    return Http.post('/auth/login', postData);
    // return () => new Promise((resolve, reject) => {
    //     Http.post('/auth/login', postData)
    //         .then((res) => resolve(res.data))
    //         .catch((err) => {
    //             const { status, errors } = err.response.data;
    //             const data = {
    //                 status,
    //                 errors,
    //             };
    //             return reject(data);
    //         });
    // });
}

export function formatError(errorResponse) {
    switch (errorResponse.error.message) {
        case 'EMAIL_EXISTS':
            //return 'Email already exists';
            swal("Oops", "Email already exists", "error");
            break;
        case 'EMAIL_NOT_FOUND':
            //return 'Email not found';
            swal("Oops", "Email not found", "error", { button: "Try Again!", });
            break;
        case 'INVALID_PASSWORD':
            //return 'Invalid Password';
            swal("Oops", "Invalid Password", "error", { button: "Try Again!", });
            break;
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return '';
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.expires_in * 1000,
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
    localStorage.setItem('access_token', JSON.stringify(tokenDetails.access_token));
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, history);
}
