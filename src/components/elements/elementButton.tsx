import styles from "./elementButton.module.scss";

import { IElement } from "../_interfaces";

import { useDispatch } from "react-redux";
import { setLoading } from "@/app/redux/slices/loadingSlice";

export interface IElementButton extends IElement {
    href?: string;
    text: string;
    style: "text" | "light" | "color";
    onClick?: any;
}

export default function ElementButton(props: IElementButton) {
    const dispatch = useDispatch();

    return (
        <button
            onClick={props.onClick}
            className={styles.elementButton + ` ${props.className}`}
            data-style={props.style}
        >
            <p>{props.text}</p>
        </button>
    );
}
