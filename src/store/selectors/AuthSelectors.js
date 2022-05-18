export const isAuthenticated = (state) => {
    if (state.auth.auth.access_token) return true;
    return false;
};
