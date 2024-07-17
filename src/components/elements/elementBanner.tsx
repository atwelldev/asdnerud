import { IElement } from "../_interfaces";
import styles from "./elementBanner.module.scss";

import Image from "next/image";

export interface IElementBanner extends IElement {
    title?: string;
    subtitle?: string;
    paragraph?: string;
    img?: string;
    style?: "fadeBack" | "svg" | "img";
    axis?: "horizontal" | "vertical";
}

export default function ElementBanner(props: IElementBanner) {
    return (
        <div className={styles.elementBanner}>
            <h3>{props.subtitle}</h3>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <Image src={props.img} width={100} height={100} />
        </div>
    );
}
