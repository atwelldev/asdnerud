import { IElement } from "../_interfaces";
import styles from "./elementBacktitle.module.scss";

export interface  IElementBacktitle extends IElement {
    text: string
}

// add className via props to set position
export default function ElementBacktitle(props: IElementBacktitle) {

    return (
        <h1 className={styles.elementBacktitle + ` ${props.className?.map(e => e.trim()).join(" ")}`}>{props.text}</h1>
    )
}