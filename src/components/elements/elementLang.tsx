import { IElement } from "../_interfaces";
import styles from "./elementLang.module.scss";
import Image from "next/image";

interface IElementLang extends IElement {}

export default function ElementLang(props: IElementLang) {
    return (
        <div className={styles.elementLang + ` ${props.className}`}>
            <Image
                src={
                    "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
                }
                width={23}
                height={15}
            />
            <p>ru</p>
            <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1 1L4 4L7 1" stroke="#74778B" />
            </svg>
        </div>
    );
}
