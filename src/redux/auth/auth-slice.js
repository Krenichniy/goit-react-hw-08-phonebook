import { createSlice } from "@reduxjs/toolkit";
import { signup, signin, logout, current } from './auth-operations';

const initialState = {
    user: {},
    isLogin:false,
    token: '',
    loading:false,
    error:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        // signup
        [signup.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [signup.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.isLogin = true;
            store.token = payload.token;
        },
        [signup.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        // signin
         [signin.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [signin.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.isLogin = true;
            store.token = payload.token;
        },
        [signin.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        // logout
        [logout.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logout.fulfilled]: (store) => {
            store.loading = false;
            store.user = {};
            store.isLogin = false;
            store.token = '';
        },
        [logout.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        // current
        [current.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [current.fulfilled]: (store,action) => {
            store.loading = false;
            store.user = {name:action.payload.name, email:action.payload.email};
            store.isLogin = true;
            store.token = action.payload.token;
        },
        [current.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },

    }
})

export default authSlice.reducer;