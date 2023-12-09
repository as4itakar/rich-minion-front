import { getUserFromStorage } from "@/services/auth/auth.helper";
import { IInitialState } from "./user.intereface";
import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, login, logout, register } from "./user.actions";

const initialState: IInitialState = {
    user: getUserFromStorage(),
    isLoading: false,
    isError: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state, {payload}) => {
            state.isLoading = true
            state.isError = false
        })
            .addCase(register.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.user = payload.user
        })
            .addCase(register.rejected, (state, {payload}) => {
            state.isLoading = false
            state.user = null
            state.isError = true
        })
            .addCase(login.pending, (state, {payload}) => {
            state.isLoading = true
            state.isError = false
        })
            .addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.user = payload.user
        })
            .addCase(login.rejected, (state, {payload}) => {
            state.isLoading = false
            state.user = null
            state.isError = true
        })
            .addCase(logout.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.user = null
        })
            .addCase(checkAuth.fulfilled, (state, {payload}) => {
            state.user = payload.user
        })
    }
})