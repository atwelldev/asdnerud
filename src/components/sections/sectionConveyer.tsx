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
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Скидки до 40%
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Бесплатная доставка
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    75+ проектов
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Широкий ассортимент
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    12+ лет опыта
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Комплексное обслуживание
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Широкий ассортимент
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Скидки до 40%
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Бесплатная доставка
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    75+ проектов
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Широкий ассортимент
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    12+ лет опыта
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Комплексное обслуживание
                </SwiperSlide>
                <SwiperSlide className={styles.sectionConveyer__slide}>
                    Широкий ассортимент
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
