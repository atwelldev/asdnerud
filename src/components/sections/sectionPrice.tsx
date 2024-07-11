import ElementButton from "../elements/elementButton";
import ElementText from "../elements/elementText";
import styles from "./sectionPrice.module.scss";

import { useState } from "react";

export default function SectionPrice() {
    const [nav, setNav] = useState(1);

    return (
        <section className={styles.sectionPrice + " _section"}>
            <div className={styles.sectionPrice__container + " _container"}>
                <ElementText title="Наши цены" subtitle="Дешево" />
                <nav className={styles.SectionPrice__nav}>
                    <ul>
                        {[
                            { id: 1, text: "Керамзит" },
                            { id: 2, text: "Песок" },
                            { id: 3, text: "Щебень" },
                            { id: 4, text: "Блоки" },
                            { id: 5, text: "Метал" },
                        ].map((e) => {
                            return (
                                <li
                                    key={e.id}
                                    className={
                                        nav === e.id ? styles._active : ""
                                    }
                                    onClick={() => {
                                        setNav(e.id);
                                    }}
                                >
                                    {e.text}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div
                    className={
                        styles.sectionPrice__table +
                        " " +
                        (nav === 1 ? styles._active : "")
                    }
                >
                    <ul>
                        <li className={styles.sectionPrice__table_header}>
                            <span>Наименование</span>
                            <span>Цена за м3</span>
                            <span>Цена за тн</span>
                            <span></span>
                        </li>
                        {[
                            {
                                id: 1,
                                name: "Щебень гранит 25 фр",
                                priceM: "2100 р.",
                                priceTn: "1600 р.",
                                action: "Щебень",
                            },
                            {
                                id: 2,
                                name: "Щебень гранит 25 фр",
                                priceM: "2100 р.",
                                priceTn: "1600 р.",
                                action: "Щебень",
                            },
                            {
                                id: 3,
                                name: "Щебень гранит 25 фр",
                                priceM: "2100 р.",
                                priceTn: "1600 р.",
                                action: "Щебень",
                            },
                        ].map((e) => {
                            return (
                                <li
                                    className={styles.sectionPrice__table_row}
                                    key={e.id}
                                >
                                    <span>{e.name}</span>
                                    <span>{e.priceM}</span>
                                    <span>{e.priceTn}</span>
                                    <span>
                                        {" "}
                                        <ElementButton
                                            style="light"
                                            text="Заказать"
                                            href="/"
                                        />
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
