import styles from "./elementButton.module.scss";

import { IElement } from "../_interfaces";

import { useDispatch } from "react-redux";
import { setLoading } from "@/app/redux/slices/loadingSlice";

export interface IElementButton extends IElement {
    href: string;
    text: string;
    style: "text" | "light" | "color";
}

export default function ElementButton(props: IElementButton) {
    const dispatch = useDispatch();

    return (
        <button
            className={
                styles.elementButton +
                ` ${props.className?.map((e) => e.trim()).join(" ")}`
            }
            onClick={() => {
                dispatch(setLoading(""));
            }}
            data-style={props.style}
        >
            <p>{props.text}</p>
        </button>
    );
}
