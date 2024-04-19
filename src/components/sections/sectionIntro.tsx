import { ISection } from "../_interfaces";
import styles from "./sectionIntro.module.scss";

import ElementButton from "../elements/elementButton";

import Image from "next/image";

// Добавить интерфейс для текст блока
export interface ISectionIntro extends ISection {
    button: IElementButton
}
import { IElementButton } from "../elements/elementButton";
import ElementBacktitle from "../elements/elementBacktitle";

export default function SectionIntro(props: ISectionIntro) {
    return (
        <section className={styles.sectionIntro}>
            <div className={styles.sectionIntro__container + " _container"}>

                <ElementBacktitle text="DEVELOPER" className={[styles.sectionIntro__backtitle]}/>

                <div className={styles.sectionIntro__text}>
                    <h6>Denis Atwell <span></span></h6>
                    <h2>Hi! I’m Software developer</h2>
                    <p>From interaction design to scaleable design systems, single-page apps to something more experimental with WebGL. 
I help awesome people to build ambitious</p>
                    <div className={styles.sectionIntro__social}>
                        <div className="">
                            <p>+8 (991) 121-07-91</p>
                            <p>sale@atwelldev.pro</p>
                        </div>
                        <ul>
                            <li>VK</li>
                            <li>Inst</li>
                        </ul>
                    </div>
                    <ElementButton href={props.button.href} text={props.button.text}/>
                </div>
                
                <div className="">
                    <Image src={"/img/portrait.jpg"} width={360} height={540}/>
                </div>

            </div>
        </section>
    )
}