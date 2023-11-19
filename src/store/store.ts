import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST, persistReducer,
    persistStore, PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { userSlice } from "./user/user.slice";

const persistConfig = {
    key: 'rich-mminion',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig,
    rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST,
                PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>