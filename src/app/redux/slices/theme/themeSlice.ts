"use client";

import { createSlice } from "@reduxjs/toolkit";

// Slice - набор reducers для определенной логики
const themeSlice = createSlice({
    name: 'theme', // просто название slice
    initialState: { // Изначальные состояние *различные состояния, которые мы можем изменять при определенной логике. Можно добавить массив и др.
        active: true,
    },
    reducers: { // сами reducers
        setTheme(state, action){ // state - текущее состояние, action - полученный action
            state.active = !state.active; // Этого достаточно для изменения состояния
        },
    }
})

export const { setTheme } = themeSlice.actions; // redux-toolkit позволяет экспортировать action при помощи деструкциризации, эти actions можно будет использовать в компонентах при импорте среза
export default themeSlice.reducer; // подключаем к store (именно reducer!!! а не reducers)


