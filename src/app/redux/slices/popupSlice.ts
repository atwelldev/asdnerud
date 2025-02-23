"use client";

import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

// Slice - набор reducers для определенной логики
const popupSlice = createSlice({
    name: "popup", // просто название slice
    initialState: {
        // Изначальные состояние *различные состояния, которые мы можем изменять при определенной логике. Можно добавить массив и др.
        active: false,
        data: "Щебень",
    },
    reducers: {
        // сами reducers
        setPopup(state, action: PayloadAction<string>) {
            // state - текущее состояние, action - полученный action
            state.active = !state.active; // Этого достаточно для изменения состояния
            state.data = action.payload;
        },
    },
});

export const { setPopup } = popupSlice.actions; // redux-toolkit позволяет экспортировать action при помощи деструкциризации, эти actions можно будет использовать в компонентах при импорте среза
export default popupSlice.reducer; // подключаем к store (именно reducer!!! а не reducers)
