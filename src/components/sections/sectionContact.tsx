import ElementButton from "../elements/elementButton";
import styles from "./sectionContact.module.scss";

export default function SectionContact() {
    return (
        <section className={styles.sectionContact + " _section"}>
            <div className={styles.sectionContact__container + " _container"}>
                <div className={styles.sectionContact__formBlock}>
                    <div className={styles.sectionContact__text}>
                        <h3>Есть вопросы? Свяжитесь с нами</h3>
                        <p>
                            Перезвоним вам как можно скорее и ответим на все
                            вопросы
                        </p>
                    </div>
                    <form action="">
                        <div>
                            <input placeholder="имя" type="text" />
                            <input placeholder="телефон" type="text" />
                        </div>
                        <div>
                            <p className={styles.sectionContact__checkbox}>
                                <input type="checkbox" />
                                Согласен с политикой конфиденциальность
                            </p>
                            <ElementButton
                                style="color"
                                text="Заказать звонок"
                                href="/"
                            />
                        </div>
                    </form>
                </div>

                <div className={styles.sectionContact__order}>
                    <ul>
                        <li>
                            <h2>1</h2>
                            <div className={styles.sectionContact__rightText}>
                                <h3>Свяжитесь с нами</h3>
                                <p>
                                    Оставьте свой запрос. Мы свяжемся с вам как
                                    можно скорее. Оставьте свой запрос. Мы
                                    свяжемся с вам как можно скорее. те свой
                                    запрос. Мы свяжемся с вам как можно скорее.
                                </p>
                            </div>
                        </li>

                        <li>
                            <h2>2</h2>
                            <div className={styles.sectionContact__rightText}>
                                <h3>Свяжитесь с нами</h3>
                                <p>
                                    Оставьте свой запрос. Мы свяжемся с вам как
                                    можно скорее. Оставьте свой запрос. Мы
                                    свяжемся с вам как можно скорее. те свой
                                    запрос. Мы свяжемся с вам как можно скорее.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
