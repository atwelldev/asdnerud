import { ISection } from "../_interfaces";
import ElementBanner, { IElementBanner } from "../elements/elementBanner";
import styles from "./sectionServices.module.scss";
import Image from "next/image";

interface ISectionServices extends ISection {}

export default function SectionServices() {
    return (
        <section className={styles.sectionServices + " _section"}>
            <div className={styles.sectionServices__container + " _container"}>
                <div className={styles.sectionServices__banners}>
                    <div className={styles.s1}>
                        <div className={styles.sectionServices__row}>
                            <ElementBanner
                                title="Озвучка для AVR"
                                paragraph="Лушчшая озвучка для AVR"
                                img="/svg/dots.svg"
                            />
                        </div>
                        <div className={styles.sectionServices__row}>
                            <ElementBanner
                                title="Озвучка для AVR"
                                paragraph="Лушчшая озвучка для AVR"
                                img="/svg/dots.svg"
                            />

                            <ElementBanner
                                title="Озвучка для AVR"
                                paragraph="Лушчшая озвучка для AVR"
                                img="/svg/dots.svg"
                            />
                        </div>
                    </div>

                    <div className={styles.s2}>
                        <ElementBanner
                            title="Озвучка для AVR"
                            paragraph="Лушчшая озвучка для AVR"
                            img="/svg/dots.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
