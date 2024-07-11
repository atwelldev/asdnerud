import styles from "./elementBackimg.module.scss";

import Image from "next/image";

export default function ElementBackimg(props: any) {
    return (
        <div className={styles.elementBackimg}>
            <Image
                alt="not"
                src={props.href}
                fill
                // width={800}
                // height={800}
                quality={100}
                style={{
                    objectFit: "cover",
                }}
            />
        </div>
    );
}
