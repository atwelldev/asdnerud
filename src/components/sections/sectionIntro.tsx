import { ISection } from "../_interfaces";
import styles from "./sectionIntro.module.scss";

export interface ISectionIntro extends ISection {

}

export default function SectionIntro(props: any) {
    return (
        <section className={styles.sectionIntro + " _section"}>
            <div className={styles.sectionIntro__container + " _container"}>
                <div className={styles.sectionIntro__text}>
                    <h6>Denis Atwell</h6>
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
                </div>
            </div>
        </section>
    )
}