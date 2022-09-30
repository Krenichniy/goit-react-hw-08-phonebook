export const isAuth = store => store.auth.isLogin;
// export const getAuthError = ({ auth }) => auth.error || {};
export const getName = state => state.auth.user.name;