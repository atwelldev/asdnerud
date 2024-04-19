import { IElement } from "../_interfaces";
import styles from "./elementText.module.scss";

export interface IElementText extends IElement {
    subtitle?: string
    title?: string
    paragraph: string
}

export default function ElementText(props: IElementText) {
    return (
        
    )
}