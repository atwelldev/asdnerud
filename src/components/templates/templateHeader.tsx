"use client";
import styles from "./templateHeader.module.scss";

import { ISection } from "../_interfaces";

import Link from "next/link";
import ElementLogo from "../elements/elementLogo";
import ElementBurger from "../elements/elementBurger";
import ElementLang from "../elements/elementLang";

import { useSelector } from "react-redux";

export interface ITemplateHeader extends ISection {
    headerNav: IHeaderNav[];
}

interface IHeaderNav {
    // Массив ссылок и пунктов меню
    id: number;
    href: string;
    text: string;
}

export default function TemplateHeader(props: ITemplateHeader) {
    const links = useSelector((state: any) => state.links.linksArr);
    return (
        <header className={styles.templateHeader}>
            <div className={styles.templateHeader__row1}>
                <div
                    className={styles.templateHeader__container + " _container"}
                >
                    <ElementLogo />

                    <nav className={styles.templateHeader__nav}>
                        <ul>
                            {props.headerNav.map((e) => {
                                return (
                                    <li key={e.id}>
                                        <Link href={e.href}>{e.text}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <nav className={styles.templateHeader__rightNav}>
                        <ElementLang />
                        <ElementBurger />
                    </nav>
                </div>
            </div>

            <div className={styles.templateHeader__row2}>
                <div
                    className={styles.templateHeader__container + " _container"}
                >
                    {/* Добавить If для большого кол-ва подкатегорий */}
                    <nav>
                        <ul>
                            {links.map((e) => {
                                return (
                                    <li
                                        key={e.id}
                                        className={
                                            styles.templateHeader__row2_navEl
                                        }
                                    >
                                        <span>{e.text}</span>
                                        <div
                                            className={
                                                styles.templateHeader__dropdown
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.templateHeader__dropdown_body
                                                }
                                            >
                                                {e.dropdown.map((e2) => {
                                                    return (
                                                        <ul key={e.id}>
                                                            <h2>{e2.title}</h2>
                                                            {e2.links.map(
                                                                (e3) => {
                                                                    return (
                                                                        <li
                                                                            key={
                                                                                e.id
                                                                            }
                                                                        >
                                                                            {
                                                                                e3.text
                                                                            }
                                                                        </li>
                                                                    );
                                                                }
                                                            )}
                                                        </ul>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
