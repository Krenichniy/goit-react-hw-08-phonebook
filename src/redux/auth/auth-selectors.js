export const isAuth = store => store.auth.isLogin;
// export const getAuthError = ({ auth }) => auth.error || {};
export const getUser = state => state.auth.user;