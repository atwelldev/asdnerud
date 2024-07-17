import styles from "./elementBurger.module.scss";

import { useDispatch } from "react-redux";
import { setMobileMenu } from "@/app/redux/slices/mobileMenuSlice";
import { IElement } from "../_interfaces";

interface IElementBurger extends IElement {}

export default function ElementBurger(props: IElementBurger) {
    const dispatch = useDispatch();
    return (
        <div
            className={styles.elementBurger + ` ${props.className}`}
            onClick={() => {
                dispatch(setMobileMenu(""));
            }}
        >
            <span></span>
        </div>
    );
}
