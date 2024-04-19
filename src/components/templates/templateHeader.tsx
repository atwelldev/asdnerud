import styles from "./templateHeader.module.scss"

import { ISection } from "../_interfaces"

import Link from "next/link"
import ElementLogo from "../elements/elementLogo"
import ElementBurger from "../elements/elementBurger"
import ElementLang from "../elements/elementLang"
import ElementTheme from "../elements/elementTheme";

export interface ITemplateHeader extends ISection  {
    headerNav: IHeaderNav[]
}

interface IHeaderNav { // Массив ссылок и пунктов меню
    id: number
    href: string
    text: string
}

export default function TemplateHeader(props: ITemplateHeader) {

    return (
        <header className={styles.templateHeader}>
            <div className={styles.templateHeader__container + " _container"}>
                <ElementLogo />

                <nav className={styles.templateHeader__nav}>
                    <ul>
                        {props.headerNav.map(e => {
                            return (
                                <li key={e.id}>
                                        <Link href={e.href}>
                                            {e.text}
                                        </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <nav className={styles.templateHeader__rightNav}>
                    <ElementTheme />
                    <ElementLang />
                    <ElementBurger />
                </nav>
            </div>
        </header>
    )
}