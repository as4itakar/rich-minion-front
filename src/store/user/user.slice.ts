import { getUserFromStorage } from "@/services/auth/auth.helper";
import { IInitialState } from "./user.intereface";
import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, login, logout, register } from "./user.actions";

const initialState: IInitialState = {
    user: getUserFromStorage(),
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state, {payload}) => {
            state.isLoading = true
        })
            .addCase(register.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.user = payload.user
        })
            .addCase(register.rejected, (state, {payload}) => {
            state.isLoading = false
            state.user = null
        })
            .addCase(login.pending, (state, {payload}) => {
            state.isLoading = true
        })
            .addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.user = payload.user
        })
            .addCase(login.rejected, (state, {payload}) => {
            state.isLoading = false
            state.user = null
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