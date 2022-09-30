import { createAsyncThunk } from '@reduxjs/toolkit';
import * as auth from '../../api/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const result = await auth.signup(data);
            Notify.success("You are sign up!")
            return result;
        }
        catch (error) {
            Notify.failure(error.message)
            // console.log(response)
            // const { status, data } = response;
            // const error = {
            //     status, 
            //     message: response.message
            // }
            return rejectWithValue(error);
        }
    }
)

export const signin = createAsyncThunk(
    'auth/signin',
    async (data, { rejectWithValue }) => {
        try {
            const result = await auth.signin(data);
            Notify.success("You are logged in!")
            return result;
        }
        catch (error) {
            //  const { status, data } = response;
            // const error = {
            //     status, 
            //     message: data.message
            // }
             Notify.failure(error.message)
            return rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async ( { rejectWithValue }) => {
        try {
            const result = await auth.logout();
            return result;
        }
        catch (error) {
            //  const { status, data } = response;
            // const error = {
            //     status, 
            //     message: data.message
            // }
            return rejectWithValue(error);
        }
    }
)

export const current = createAsyncThunk(
    'auth/current',
    async (_, thunkAPI) => {
        try {
            const { auth } = thunkAPI.getState();
            if (!auth.token) throw Error('error');
            const result = await auth.getCurrent(auth.token);
            return {...result, token:auth.token};
        }
        catch (error) {
            //  const { status, data } = response;
            // const error = {
            //     status, 
            //     message: data.message
            // }
            return thunkAPI.rejectWithValue(error);
        }
    }
)