"use client";

import { createSlice } from "@reduxjs/toolkit";

// Slice - набор reducers для определенной логики
const linksSlice = createSlice({
    name: "links", // просто название slice
    initialState: {
        // Изначальные состояние *различные состояния, которые мы можем изменять при определенной логике. Можно добавить массив и др.
        // linksArr: [
        //     {
        //         category: "Песок",
        //         id: 1,
        //         dropdown: [
        //             {
        //                 subcategory: "Тип",
        //                 links: [
        //                     {
        //                         href: "/pesok/karerniy",
        //                         text: "Карьерный",
        //                         data: {
        //                             price: "400",
        //                             h: "Карьерный песок от 3м3 россыпью или от 20 мешков",
        //                             p: "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
        //                         },
        //                     },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "Синий" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //             {
        //                 subcategory: "Фракция",
        //                 links: [
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //         ],
        //     },
        //     {
        //         category: "Песок",
        //         id: 2,
        //         dropdown: [
        //             {
        //                 subcategory: "Тип",
        //                 links: [
        //                     {
        //                         href: "/pesok/karerniy",
        //                         text: "Карьерный",
        //                         data: {
        //                             price: "400",
        //                             h: "Карьерный песок от 3м3 россыпью или от 20 мешков",
        //                             p: "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
        //                         },
        //                     },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "Синий" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //             {
        //                 subcategory: "Фракция",
        //                 links: [
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //         ],
        //     },
        //     {
        //         category: "Песок",
        //         id: 1,
        //         dropdown: [
        //             {
        //                 subcategory: "Тип",
        //                 links: [
        //                     {
        //                         href: "/pesok/karerniy",
        //                         text: "Карьерный",
        //                         data: {
        //                             price: "400",
        //                             h: "Карьерный песок от 3м3 россыпью или от 20 мешков",
        //                             p: "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
        //                         },
        //                     },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "Синий" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //             {
        //                 subcategory: "Фракция",
        //                 links: [
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //         ],
        //     },
        //     {
        //         category: "Песок",
        //         id: 2,
        //         dropdown: [
        //             {
        //                 subcategory: "Тип",
        //                 links: [
        //                     {
        //                         href: "/pesok/karerniy",
        //                         text: "Карьерный",
        //                         data: {
        //                             price: "400",
        //                             h: "Карьерный песок от 3м3 россыпью или от 20 мешков",
        //                             p: "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
        //                         },
        //                     },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "Синий" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //             {
        //                 subcategory: "Фракция",
        //                 links: [
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //         ],
        //     },
        //     {
        //         category: "Песок",
        //         id: 1,
        //         dropdown: [
        //             {
        //                 subcategory: "Тип",
        //                 links: [
        //                     {
        //                         href: "/pesok/karerniy",
        //                         text: "Карьерный",
        //                         data: {
        //                             price: "400",
        //                             h: "Карьерный песок от 3м3 россыпью или от 20 мешков",
        //                             p: "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
        //                         },
        //                     },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "Синий" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //             {
        //                 subcategory: "Фракция",
        //                 links: [
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //         ],
        //     },
        //     {
        //         category: "Песок",
        //         id: 2,
        //         dropdown: [
        //             {
        //                 subcategory: "Тип",
        //                 links: [
        //                     {
        //                         href: "/pesok/karerniy",
        //                         text: "Карьерный",
        //                         data: {
        //                             price: "400",
        //                             h: "Карьерный песок от 3м3 россыпью или от 20 мешков",
        //                             p: "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
        //                         },
        //                     },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "Синий" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //             {
        //                 subcategory: "Фракция",
        //                 links: [
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                     { href: "/", text: "Песоный" },
        //                     { href: "/", text: "21" },
        //                 ],
        //             },
        //         ],
        //     },
        // ],
        data: {
            categories: [
                { id: 1, category: "Песок" },
                { id: 2, category: "Щебень" },
                { id: 3, category: "Керамзит" },
                { id: 4, category: "Бетон" },
            ],
            subcategories: [
                { id: 1, category: "Песок", subcategory: "Назначение" },
                { id: 2, category: "Песок", subcategory: "Тип" },
                { id: 3, category: "Песок", subcategory: "Фракция" },
                { id: 4, category: "Бетон", subcategory: "Тип" },
            ],
            products: [
                {
                    id: 1,
                    product: "Карьерный",
                    href: "/pesok/karerniy",
                    category: "Песок",
                    subcategory: "Тип",
                    price: "400",
                    title: "Карьерный песок от 3м3 россыпью или от 20 мешков",
                    description:
                        "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
                },
                {
                    id: 2,
                    product: "Карьерный",
                    href: "/pesok/karerniy",
                    category: "Песок",
                    subcategory: "Тип",
                    price: "400",
                    title: "Карьерный песок от 3м3 россыпью или от 20 мешков",
                    description:
                        "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
                },
                {
                    id: 3,
                    product: "Карьерный",
                    href: "/pesok/karerniy",
                    category: "Песок",
                    subcategory: "Назначение",
                    price: "400",
                    title: "Карьерный песок от 3м3 россыпью или от 20 мешков",
                    description:
                        "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
                },
                {
                    id: 4,
                    product: "Карьерный",
                    href: "/pesok/karerniy",
                    category: "Песок",
                    subcategory: "Фракция",
                    price: "400",
                    title: "Карьерный песок от 3м3 россыпью или от 20 мешков",
                    description:
                        "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
                },
                {
                    id: 5,
                    product: "Карьерный",
                    href: "/pesok/karerniy",
                    category: "Песок",
                    subcategory: "Фракция",
                    price: "400",
                    title: "Карьерный песок от 3м3 россыпью или от 20 мешков",
                    description:
                        "Предлагаем купить карьерный песок от 3 куб.м. россыпью или от 20 мешков с доставкой по цене от 400 руб/м3 в нашей компании ООО «Нерудстрой-М», которая занимается поставками нерудных сыпучих материалов оптом и в розницу в столичном регионе. Этот сыпучий материал широко используется в строительстве и в благоустройстве.",
                },
            ],
        },
    },
    reducers: {
        // сами reducers
    },
});

export default linksSlice.reducer; // подключаем к store (именно reducer!!! а не reducers)
