import styles from "./elementLang.module.scss";
import Image from "next/image";

export default function ElementLang() {
    
    return (
        <div className={styles.elementLang}>
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"} width={23} height={15}/>
            <p>ru</p>
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L4 4L7 1" stroke="#74778B"/>
</svg>

        </div>
    )
}