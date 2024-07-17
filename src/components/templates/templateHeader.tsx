"use client";
import styles from "./templateHeader.module.scss";

import { ISection } from "../_interfaces";

import Link from "next/link";
import ElementLogo from "../elements/elementLogo";
import ElementBurger from "../elements/elementBurger";
import ElementLang from "../elements/elementLang";

import { useSelector } from "react-redux";
import ElementButton from "../elements/elementButton";
import { setPopup } from "@/app/redux/slices/popupSlice";
import { useDispatch } from "react-redux";

export interface ITemplateHeader extends ISection {
    headerNav: IHeaderNav[];
}

interface IHeaderNav {
    // Массив ссылок и пунктов меню
    id: number;
    href: string;
    text: string;
}

interface IHeaderProducts {
    // Массив ссылок и пунктов меню
    categories: [{ id: number; category: string }];
    subcategories: [{ id: number; category: string; subcategory: string }];
    products: [
        {
            id: number;
            product: string;
            href: string;
            category: string;
            subcategory: string;
            price: string;
            title: string;
            description: string;
        }
    ];
}

export default function TemplateHeader(props: ITemplateHeader) {
    const data: IHeaderProducts = useSelector((state: any) => state.links.data);
    const mobile = useSelector((state: any) => state.mobile.active);

    const dispatch = useDispatch();

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
                    <ElementBurger className={styles.templateHeader__burger} />
                    <nav className={styles.templateHeader__rightNav}>
                        <ElementLang className={styles.templateHeader__lang} />

                        <ElementButton
                            style="light"
                            text="Заказать"
                            href="/"
                            onClick={() => {
                                dispatch(setPopup("Передано в попап"));
                            }}
                        />
                        <div className={styles.templateHeader__contacts}>
                            <Link href={"tel:89154446356"}>
                                8 (915) 444-63-56
                            </Link>
                            <Link href={"mailto:info@asd-nerud.ru"}>
                                info@asd-nerud.ru
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

            <div
                className={
                    styles.templateHeader__mobile +
                    " " +
                    (mobile ? styles._active : "")
                }
            >
                <div className={styles.templateHeader__mobile_buttons}>
                    <span>switch</span>
                    <span>seatch</span>
                    <ElementLang />
                </div>

                <ul className={styles.templateHeader__mobile_cat}>
                    {data.categories.map((cat) => {
                        return (
                            <li key={cat.id}>
                                <h2>{cat.category}</h2>
                                <div>
                                    {data.subcategories
                                        .filter(
                                            (subcat) =>
                                                subcat.category == cat.category
                                        )
                                        .map((subcat) => {
                                            return (
                                                <ul
                                                    key={subcat.id}
                                                    className={
                                                        styles.templateHeader__mobile_subcat
                                                    }
                                                >
                                                    <h3>
                                                        {subcat.subcategory}
                                                    </h3>
                                                    {data.products
                                                        .filter(
                                                            (product) =>
                                                                product.category ==
                                                                    cat.category &&
                                                                product.subcategory ==
                                                                    subcat.subcategory
                                                        )
                                                        .map((product) => {
                                                            return (
                                                                <li
                                                                    key={
                                                                        product.id
                                                                    }
                                                                >
                                                                    <p>
                                                                        <Link
                                                                            href={
                                                                                product.href
                                                                            }
                                                                        >
                                                                            {
                                                                                product.product
                                                                            }
                                                                        </Link>
                                                                    </p>
                                                                </li>
                                                            );
                                                        })}
                                                </ul>
                                            );
                                        })}
                                </div>
                            </li>
                        );
                    })}
                </ul>

                {/* <ul className={styles.templateHeader__mobile_menu}>
                    {props.headerNav.map((e) => {
                        return (
                            <li key={e.id}>
                                <Link href={e.href}>{e.text}</Link>
                            </li>
                        );
                    })}
                </ul> */}

                <div className={styles.templateHeader__mobile_contacts}>
                    <p>
                        <a href="tel:+89775918292">8 (977) 591-82-92</a>
                    </p>
                    <p>
                        <a href="mailto:asd@asd-nerud.ru">asd@asd-nerud.ru</a>
                    </p>
                </div>
                <ElementButton
                    style="light"
                    text="Оставить заявку"
                    className={styles.templateHeader__mobile_button}
                    onClick={() => {
                        dispatch(setPopup(""));
                    }}
                />
            </div>

            <div className={styles.templateHeader__row2}>
                <div
                    className={styles.templateHeader__container + " _container"}
                >
                    {/* Добавить If для большого кол-ва подкатегорий */}
                    <nav>
                        <ul>
                            {data.categories.map((cat) => {
                                return (
                                    <li
                                        key={cat.id}
                                        className={
                                            styles.templateHeader__row2_navEl
                                        }
                                    >
                                        <h2>{cat.category}</h2>
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
                                                {data.subcategories
                                                    .filter(
                                                        (subcat) =>
                                                            subcat.category ===
                                                            cat.category
                                                    )
                                                    .map((subcat) => {
                                                        return (
                                                            <ul key={subcat.id}>
                                                                <h3>
                                                                    {
                                                                        subcat.subcategory
                                                                    }
                                                                </h3>
                                                                {data.products
                                                                    .filter(
                                                                        (
                                                                            product
                                                                        ) =>
                                                                            product.category ==
                                                                                cat.category &&
                                                                            product.subcategory ==
                                                                                subcat.subcategory
                                                                    )
                                                                    .map(
                                                                        (
                                                                            product
                                                                        ) => {
                                                                            return (
                                                                                <li
                                                                                    key={
                                                                                        product.id
                                                                                    }
                                                                                >
                                                                                    <Link
                                                                                        href={
                                                                                            product.href
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            product.product
                                                                                        }
                                                                                    </Link>
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
