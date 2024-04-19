import styles from "./elementButton.module.scss";

import { IElement } from "../_interfaces";

export interface IElementButton extends IElement {
    href: string;
    text: string;
}

export default function ElementButton(props: IElementButton) {
    return (
        <button
            className={styles.elementButton + ` ${props.className?.map(e => e.trim()).join(" ")}`}
        >
            <div></div>
            <p>{props.text}</p>
        </button>
    )
}