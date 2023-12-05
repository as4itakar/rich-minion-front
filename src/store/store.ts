import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import { cartSlice } from "./cart/cart.slice";

const persistConfig = {
    key: 'rich-minion',
    storage,
    blackList: ['user']
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
    cart: cartSlice.reducer
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