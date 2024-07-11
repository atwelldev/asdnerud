"use client"; // УДАЛИТЬ

import styles from "./elementBurger.module.scss";

import { useDispatch } from "react-redux";
import { setPopup } from "@/app/redux/slices/popupSlice";

export default function ElementBurger() {
    const dispatch = useDispatch();
    return (
        <div
            className={styles.elementBurger}
            onClick={() => {
                dispatch(setPopup(""));
            }}
        >
            <span></span>
        </div>
    );
}
