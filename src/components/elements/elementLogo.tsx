import { IElement } from "../_interfaces";
import styles from "./elementLogo.module.scss";

export interface IElementLogo extends IElement {
    textlist: IElementLogoText[]
}

interface IElementLogoText {
    id: number;
    text: string;
}
export default function ElementLogo(props: IElementLogo) {
    return (
    <div className={styles.elementLogo}>
        <div className={styles.elementLogo__img}>A</div>
        <span></span>
        <div className={styles.elementLogo__text}>
            <h2>Denis Atwell</h2>
            <ul>
                {[{id: 1, text: "Web-development"}].map(e => {
                    return (
                        <li key={e.id}>
                            {e.text}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    )
}