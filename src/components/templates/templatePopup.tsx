"use client";

import ElementText from "../elements/elementText";
import styles from "./templatePopup.module.scss";

import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
// import { setActive } from "@/app/redux/slices/popupSlice";

export default function TemplatePopup() {
    const popupActive = useSelector((state: any) => state.popup.active);

    return (
        <div
            className={
                styles.templatePopup + (popupActive ? ` ${styles._active}` : "")
            }
        >
            <div className={styles.templatePopup__fade}></div>
            <div className={styles.templatePopup__body}>
                <div className={styles.templatePopup__body_left}>
                    <ElementText
                        title="Напишите нам"
                        color="light"
                        subtitle="Всегда на связи"
                    />
                    <div className={styles.templatePopup__body_img}>
                        <Image
                            alt=""
                            src={"/img/rocks.jpg"}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
                <div className={styles.templatePopup__body_right}>
                    <form action="">
                        <ElementText
                            title="Ваш заказ"
                            subtitle="Что вы заказываете?"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
