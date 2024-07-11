"use client";

import { createSlice } from "@reduxjs/toolkit";

// Slice - набор reducers для определенной логики
const linksSlice = createSlice({
    name: "links", // просто название slice
    initialState: {
        // Изначальные состояние *различные состояния, которые мы можем изменять при определенной логике. Можно добавить массив и др.
        linksArr: [
            {
                text: "Керамзит",
                href: "/",
                id: 1,
                dropdown: [
                    {
                        title: "Тип",
                        links: [
                            { href: "/", text: "Песоный" },
                            { href: "/", text: "21" },
                            { href: "/", text: "Песоный" },
                            { href: "/", text: "21" },
                            { href: "/", text: "Песоный" },
                            { href: "/", text: "Синий" },
                            { href: "/", text: "Песоный" },
                            { href: "/", text: "21" },
                        ],
                    },
                    {
                        title: "Фракция",
                        links: [
                            { href: "/", text: "Песоный" },
                            { href: "/", text: "21" },
                            { href: "/", text: "Песоный" },
                            { href: "/", text: "21" },
                        ],
                    },
                ],
            },
            {
                text: "Песок",
                href: "/",
                id: 2,
                dropdown: [
                    {
                        title: "Тип",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                    {
                        title: "Фракция",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                    {
                        title: "Тип",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                    {
                        title: "Фракция",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                ],
            },
            {
                text: "Песок",
                href: "/",
                id: 3,
                dropdown: [
                    {
                        title: "Тип",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                    {
                        title: "Фракция",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                ],
            },
            {
                text: "Песок",
                href: "/",
                id: 4,
                dropdown: [
                    {
                        title: "Тип",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                    {
                        title: "Фракция",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                ],
            },
            {
                text: "Песок",
                href: "/",
                id: 5,
                dropdown: [
                    {
                        title: "Тип",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                    {
                        title: "Фракция",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                ],
            },
            {
                text: "Песок",
                href: "/",
                id: 6,
                dropdown: [
                    {
                        title: "Тип",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                    {
                        title: "Фракция",
                        links: [{ href: "/", text: "Песоный" }],
                    },
                ],
            },
        ],
    },
    reducers: {
        // сами reducers
    },
});

export default linksSlice.reducer; // подключаем к store (именно reducer!!! а не reducers)
