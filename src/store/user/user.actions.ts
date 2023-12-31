import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.intereface";
import AuthService from "@/services/auth/auth.service";
import { removeToken } from "@/services/auth/auth.helper";
import { errorCatch } from "@/api/api.helper";

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/register',
    async (data, thunkApi) => {
        try {
            const response = await AuthService.login(data, 'register')
            return response
        }catch (error: any){
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/login',
    async (data, thunkApi) => {
        try{
            const response = await AuthService.login(data, 'login')
            return response
        }catch (error){
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk('auth/logout', async () => {
    removeToken()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
    'auth/check-auth',
    async  (_, thunkApi) => {
        try{
            const response = await AuthService.getNewTokens()
            return response.data
        }catch(error) {
            if (errorCatch(error) === 'jwt expired'){
                thunkApi.dispatch(logout())
            }

            return thunkApi.rejectWithValue(error)
        }
    }
)