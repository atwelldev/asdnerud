import styles from "./sectionConveyer.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import { ISection } from "../_interfaces";

export interface ISectionConveyer extends ISection {

}

export default function SectionConveyer() {
    
    return (
    <section className={styles.sectionConveyer + " _section"}>
      <Swiper
        className={styles.sectionConveyer}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={3000}
        autoplay={{
            delay: 0,
            disableOnInteraction: false
        }} 
        
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>
    </section>
    )
}