import ElementText from "../elements/elementText";
import styles from "./sectionText.module.scss";
import ElementBackimg from "../elements/elementBackimg";
import Image from "next/image";

export default function SectionText() {
    return (
        <section className={styles.sectionText + " _section"}>
            <div className={styles.sectionText__back}>
                <div className={styles.sectionText__whiteFade}></div>
                <div className={styles.sectionText__backimg}>
                    <ElementBackimg href={"/img/mountain.webp"} />
                </div>
            </div>
            <div className={styles.sectionText__container + " _container"}>
                <div className={styles.sectionText__text}>
                    <ElementText
                        title="TEst"
                        paragraph="Оплачивайте услуги Ростелекома и других организаций любым удобным для вас способом"
                        subtitle="Тест"
                    />
                </div>
                <div className={styles.sectionText__img}>
                    <Image
                        src={"/img/mountain.webp"}
                        width={400}
                        height={400}
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
