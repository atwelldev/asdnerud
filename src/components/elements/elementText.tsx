import { IElement } from "../_interfaces";
import styles from "./elementText.module.scss";

export interface IElementText extends IElement {
    subtitle?: string;
    title?: string;
    paragraph?: string;
    position?: "left" | "right";
    color?: "dark" | "light";
}

export default function ElementText(props: IElementText) {
    return (
        <div
            className={styles.elementText + ` ${props.className}`}
            data-position={props.position}
            data-color={props.color}
        >
            <h3>
                {props.subtitle}
                <span></span>
            </h3>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
    );
}
