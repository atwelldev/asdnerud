import { IElement } from "../_interfaces";
import styles from "./elementBanner.module.scss";

import Image from "next/image";

export interface IElementBanner extends IElement {
    h2?: string;
    p?: string;
    img?: string;
}

export default function ElementBanner(props: IElementBanner) {
    return (
        <div className={styles.elementBanner}>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
            <Image src={props.img} width={100} height={100} />
        </div>
    );
}
