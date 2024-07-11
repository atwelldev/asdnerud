import ElementButton from "../elements/elementButton";
import styles from "./sectionWrite.module.scss";

export default function SectionWrite() {
    return (
        <section className={styles.sectionWrite + " _section"}>
            <div className={styles.sectionWrite__container + " _container"}>
                <div className={styles.sectionWrite__form}>
                    <form action="">
                        <h2>Напишите нам</h2>
                        <input type="text" placeholder="имя" />
                        <div>
                            <input type="text" placeholder="телефон" />
                            <input type="text" placeholder="e-mail" />
                        </div>
                        <textarea placeholder="Ваше сообщение" />

                        <div>
                            <p className={styles.sectionWrite__checkbox}>
                                <input type="checkbox" /> согласен с политикой
                                конфиденциальность
                            </p>
                            <ElementButton
                                style="color"
                                text="Отправить"
                                href="/"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
