"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme/themeSlice";
import loadingReducer from "./slices/loadingSlice";
import popupReducer from "./slices/popupSlice";
import linksReducer from "./slices/linksSlice";
import mobileMenuReducer from "./slices/mobileMenuSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        load: loadingReducer,
        popup: popupReducer,
        links: linksReducer,
        mobile: mobileMenuReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
