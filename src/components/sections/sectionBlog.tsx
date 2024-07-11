import styles from "./sectionBlog.module.scss";

import Image from "next/image";
import ElementButton from "../elements/elementButton";
import ElementTitle from "../elements/elementTitle";
import ElementText from "../elements/elementText";

export default function SectionBlog() {
    return (
        <section className={styles.sectionBlog + " _section"}>
            <div className={styles.sectionblog__container + " _container"}>
                <div className={styles.sectionBlog__text}>
                    <ElementText
                        paragraph="Всегда радуем вас отличными новостями. Рассказываем
                        много чего интересного."
                        subtitle="Блог"
                        title="Последние новости"
                    />
                </div>

                <div className={styles.sectionBlog__news}>
                    <ul>
                        {["", "", ""].map((e, i) => {
                            return (
                                <li key={i++}>
                                    <div>
                                        <span>15 апреля 2024</span>
                                        <span>5 просмотров</span>
                                        <span>#tech</span>
                                        <span>Гравийка</span>
                                    </div>
                                    <h2>В рф открылся новый</h2>
                                </li>
                            );
                        })}

                        <ElementButton
                            href="/"
                            style="text"
                            text="Читать все новости >"
                        />
                    </ul>

                    <div className={styles.sectionBlog__card}>
                        <div className={styles.sectionBlog__card_img}>
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
                        <div className={styles.sectionBlog__card_text}>
                            <div className={styles.sectionBlog__card_title}>
                                <div>
                                    <p>1 апреля 2024</p>
                                    <p>6 просмотров</p>
                                    <p>test</p>
                                    <p>test</p>
                                </div>
                                <h2>Новый комплекс Tier 3/4 в Москве</h2>
                            </div>
                            <div className={styles.sectionBlog__card_dropdown}>
                                <p className={styles.sectionBlog__card_p}>
                                    В москве открфся новый полиго
                                </p>
                                <ElementButton
                                    href="/"
                                    text="Читать подробнее"
                                    style="light"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
