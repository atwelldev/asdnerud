import ElementButton from "../elements/elementButton";
import styles from "./sectionProducts.module.scss";

import Image from "next/image";

export default function SectionProducts() {
    return (
        <section className={styles.sectionProducts + " _section"}>
            <div className={styles.sectionProducts__container + " _container"}>
                <div className={styles.sectionProducts__cards}>
                    {[
                        {
                            id: 1,
                            h: "Щебень",
                            price: "от 2000р",
                            p: "Можно заказать как в мешне так и оптом + скидочки",
                        },
                        {
                            id: 2,
                            h: "Щебень",
                            price: "от 2000р",
                            p: "Можно заказать как в мешне так и оптом + скидочки",
                        },
                        {
                            id: 3,
                            h: "Щебень",
                            price: "от 2000р",
                            p: "Можно заказать как в мешне так и оптом + скидочки",
                        },
                        {
                            id: 4,
                            h: "Щебень",
                            price: "от 2000р",
                            p: "Можно заказать как в мешне так и оптом + скидочки",
                        },
                        {
                            id: 5,
                            h: "Щебень",
                            price: "от 2000р",
                            p: "Можно заказать как в мешне так и оптом + скидочки",
                        },
                        {
                            id: 5,
                            h: "Щебень",
                            price: "от 2000р",
                            p: "Можно заказать как в мешне так и оптом + скидочки",
                        },
                        {
                            id: 5,
                            h: "Щебень",
                            price: "от 2000р",
                            p: "Можно заказать как в мешне так и оптом + скидочки",
                        },
                        {
                            id: 5,
                            h: "Щебень",
                            price: "от 2000р",
                            p: "Можно заказать как в мешне так и оптом + скидочки",
                        },
                        {
                            id: 5,
                            h: "Щебень",
                            price: "от 2000р",
                            p: "Можно заказать как в мешне так и оптом + скидочки",
                        },
                    ].map((e) => {
                        return (
                            <div
                                key={e.id}
                                className={styles.sectionProducts__card}
                            >
                                <div
                                    className={styles.sectionProducts__card_img}
                                >
                                    <Image
                                        alt="dfsd"
                                        src={"/img/stone.jpg"}
                                        fill={true}
                                        // width={100}
                                        // height={100}
                                        quality={100}
                                        style={{
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                                <div
                                    className={
                                        styles.sectionProducts__card_text
                                    }
                                >
                                    <h2>
                                        <span>{e.h}</span>
                                        <span>{e.price}</span>
                                    </h2>
                                    <div>
                                        <p
                                            className={
                                                styles.sectionProducts__card_p
                                            }
                                        >
                                            {e.p}
                                        </p>
                                        <ElementButton
                                            href="/"
                                            text="Заказать"
                                            style="light"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
