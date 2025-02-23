"use client";

import { IElement } from "../_interfaces";
import styles from "./elementLogo.module.scss";

import { useEffect, useState } from "react";

export interface IElementLogo extends IElement {
    textlist: IElementLogoText[];
}

interface IElementLogoText {
    id?: number;
    text?: string;
}
export default function ElementLogo(props: IElementLogo) {
    const [slide, setSlide] = useState(1);

    // useEffect без массива значений, за которым надо следить (dependencies), будет срабатывать при каждом рендере. Изменение состояния вызывает новый рендер, который в свою очередь вызывает useEffect.
    // Исправить можно так:
    useEffect(() => {
        const inter = setInterval(() => {
            setSlide((prev) => (prev < 4 ? prev + 1 : 1));
        }, 5000);

        // Запускается после перерисовки
        return () => clearInterval(inter);
    }, []);

    //
    return (
        <div className={styles.elementLogo}>
            <div className={styles.elementLogo__img}>
                <svg
                    width="69"
                    height="85"
                    viewBox="0 0 69 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M27.9799 16.6733L1.58432 66.865C1.30653 67.3932 1.55027 68.0455 2.10634 68.2622L3.17254 68.6776C3.64455 68.8615 4.17953 68.6634 4.41792 68.2164L8.00024 61.5L11.7141 54.5366C11.8899 54.2069 12.2348 54.0028 12.6083 54.0072L22.2615 54.1219L31.653 54.1219C32.2799 54.1219 32.7523 53.5516 32.6355 52.9356L32.4119 51.756C32.3224 51.284 31.9099 50.9423 31.4294 50.9423L24.2363 50.9423L15.4005 50.9422C14.6571 50.9422 14.1736 50.1599 14.5061 49.495L20.1418 38.2236L28.1854 22.5838C28.5424 21.8897 29.5214 21.8539 29.9282 22.52L38.1598 36L46.1071 49.433C46.5015 50.0996 46.021 50.9422 45.2465 50.9422L39.0005 50.9422C38.5145 50.9422 38.0988 51.2916 38.0153 51.7704L37.8096 52.95C37.7029 53.5618 38.1738 54.1219 38.7947 54.1219L45.5789 54.1219L51.2004 54.1219C51.9845 54.1219 52.4635 53.2606 52.05 52.5945L29.7146 16.6113C29.3068 15.9545 28.3397 15.989 27.9799 16.6733Z"
                        fill="#3E3E3E"
                    />
                    <path
                        d="M43.3976 29.3896L39.7178 34.9269C39.4817 35.2823 39.497 35.7483 39.756 36.0874L41.4644 38.3242L43.5704 35.8672C44.012 35.352 44.8276 35.4169 45.1822 35.9955L62.5312 64.3017C62.9396 64.968 62.4601 65.8242 61.6786 65.8243L40.4645 65.8247L22.8093 65.8242C22.257 65.8242 21.8093 66.272 21.8093 66.8243L21.8093 68.0624C21.8093 68.6147 22.257 69.0624 22.8093 69.0624L67.6162 69.0624C68.3979 69.0624 68.8773 68.2058 68.4685 67.5395L45.0829 29.4202C44.7009 28.7975 43.8019 28.7812 43.3976 29.3896Z"
                        fill="#3E3E3E"
                    />
                    <path
                        d="M52.9457 71.6738H1.88043C1.39418 71.6738 1 72.068 1 72.5543C1 73.0405 1.39419 73.4347 1.88044 73.4347H52.9457C53.4319 73.4347 53.8261 73.0405 53.8261 72.5543C53.8261 72.068 53.4319 71.6738 52.9457 71.6738Z"
                        fill="#3E3E3E"
                        stroke="#3E3E3E"
                        stroke-width="1.5"
                    />
                    <path
                        d="M67.0328 71.6738H59.9893C59.5031 71.6738 59.1089 72.068 59.1089 72.5543C59.1089 73.0405 59.5031 73.4347 59.9893 73.4347H67.0328C67.5191 73.4347 67.9132 73.0405 67.9132 72.5543C67.9132 72.068 67.5191 71.6738 67.0328 71.6738Z"
                        fill="#3E3E3E"
                        stroke="#3E3E3E"
                        stroke-width="1.5"
                    />
                    <path
                        d="M67.0326 82.2402H56.4673C55.9811 82.2402 55.5869 82.6344 55.5869 83.1207C55.5869 83.6069 55.9811 84.0011 56.4673 84.0011H67.0326C67.5188 84.0011 67.913 83.6069 67.913 83.1207C67.913 82.6344 67.5188 82.2402 67.0326 82.2402Z"
                        fill="#3E3E3E"
                        stroke="#3E3E3E"
                        stroke-width="1.5"
                    />
                    <path
                        d="M49.7953 82.2402H25.1431C24.6569 82.2402 24.2627 82.6344 24.2627 83.1207C24.2627 83.6069 24.6569 84.0011 25.1431 84.0011H49.7953C50.2816 84.0011 50.6757 83.6069 50.6757 83.1207C50.6757 82.6344 50.2816 82.2402 49.7953 82.2402Z"
                        fill="#3E3E3E"
                        stroke="#3E3E3E"
                        stroke-width="1.5"
                    />
                    <path
                        d="M19.4891 82.2402H1.88043C1.39418 82.2402 1 82.6344 1 83.1207C1 83.6069 1.39418 84.0011 1.88043 84.0011H19.4891C19.9754 84.0011 20.3696 83.6069 20.3696 83.1207C20.3696 82.6344 19.9754 82.2402 19.4891 82.2402Z"
                        fill="#3E3E3E"
                        stroke="#3E3E3E"
                        stroke-width="1.5"
                    />
                    <path
                        d="M67.0329 76.957H35.3372C34.851 76.957 34.4568 77.3512 34.4568 77.8375C34.4568 78.3237 34.851 78.7179 35.3372 78.7179H67.0329C67.5191 78.7179 67.9133 78.3237 67.9133 77.8375C67.9133 77.3512 67.5191 76.957 67.0329 76.957Z"
                        fill="#3E3E3E"
                        stroke="#3E3E3E"
                        stroke-width="1.5"
                    />
                    <path
                        d="M30.0546 76.957H1.88068C1.39443 76.957 1.00024 77.3512 1.00024 77.8375C1.00024 78.3237 1.39443 78.7179 1.88068 78.7179H30.0546C30.5408 78.7179 30.935 78.3237 30.935 77.8375C30.935 77.3512 30.5408 76.957 30.0546 76.957Z"
                        fill="#3E3E3E"
                        stroke="#3E3E3E"
                        stroke-width="1.5"
                    />
                    <path
                        d="M1 2V57.4066C1 58.4439 2.3845 58.7952 2.87903 57.8834L28.3177 10.9809C28.6913 10.292 29.6761 10.2811 30.0649 10.9615L38.9646 26.5358C39.3264 27.1691 40.2226 27.2144 40.6465 26.6209L43.2637 22.957C43.6799 22.3742 44.556 22.4051 44.9301 23.0158L66.0603 57.507C66.5876 58.3677 67.913 57.994 67.913 56.9846V2C67.913 1.44772 67.4653 1 66.913 1H2C1.44772 1 1 1.44772 1 2Z"
                        fill="#3E3E3E"
                        stroke="#3E3E3E"
                    />
                </svg>
            </div>
            <div className={styles.elementLogo__line}></div>

            <div className={styles.elementLogo__text}>
                <h2>
                    АСД-Неруд<span>.ltd</span>
                </h2>
                <ul>
                    {[
                        { id: 1, text: "Стройматериалы оптом" },
                        { id: 2, text: "Нерудные материалы" },
                        { id: 3, text: "Продажа грунта" },
                        { id: 4, text: "Все для дома и стройки" },
                    ].map((e) => {
                        return (
                            <li
                                key={e.id}
                                className={slide == e.id ? styles._active : ""}
                            >
                                {e.text}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
