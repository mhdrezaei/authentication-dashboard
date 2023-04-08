import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import authSlice from "./authSlice";
 
const store = configureStore({
    reducer :{
        ui : uiSlice.reducer,
        auth : authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;