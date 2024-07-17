import styles from "./sectionConveyer.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { ISection } from "../_interfaces";

export interface ISectionConveyer extends ISection {}

export default function SectionConveyer() {
    return (
        <section className={styles.sectionConveyer}>
            <Swiper
                className={styles.sectionConveyer__swiper}
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={"auto"}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
            >
                {[
                    { id: 1, text: "Быстрая доставка", num: "" },
                    { id: 2, text: "Постоянные акции", num: "" },
                    { id: 3, text: "Многолетний опыт", num: "" },
                    { id: 4, text: "Всегда низкие цены", num: "" },
                    { id: 5, text: "Гарантия качества", num: "" },
                    { id: 6, text: "Скидки до", num: "10%" },
                    { id: 6, text: "Сотрудничество", num: "" },
                    { id: 6, text: "Большой ассортимент", num: "" },
                ].map((e) => {
                    return (
                        <div key={e.id}>
                            <SwiperSlide
                                className={styles.sectionConveyer__slide}
                            >
                                {e.text}
                                {e.num != "" && <span>&nbsp;{e.num}</span>}
                            </SwiperSlide>
                            <SwiperSlide
                                className={
                                    styles.sectionConveyer__slide +
                                    " " +
                                    styles.sectionConveyer__dot
                                }
                            >
                                •
                            </SwiperSlide>
                        </div>
                    );
                })}
            </Swiper>
        </section>
    );
}
