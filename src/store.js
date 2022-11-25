import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { PortfolioApiSlice } from "./api/RTK Query/PortfolioApiSlice";

export const store = configureStore({
    reducer:{
        [PortfolioApiSlice.reducerPath]:PortfolioApiSlice.reducer
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
        PortfolioApiSlice.middleware
    ),
    devTools:true
})

//! Refetch garnu paryo bhanne ko lagi
setupListeners(store.dispatch)