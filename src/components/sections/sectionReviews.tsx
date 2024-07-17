import styles from "./sectionReviews.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";

export default function SectionReviews() {
    return (
        <section className={styles.sectionReviews + " _section"}>
            <Swiper
                className={styles.sectionReviews__swiper}
                modules={[Autoplay, Parallax]}
                // spaceBetween={20}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                parallax={true}
            >
                {["", "", ""].map((e, i) => {
                    return (
                        <SwiperSlide
                            className={styles.sectionReviews_slide}
                            key={i++}
                        >
                            {" "}
                            <div
                                className={
                                    styles.sectionReviews__container +
                                    " _container"
                                }
                            >
                                <div className={styles.sectionReviews__card}>
                                    <div
                                        className={styles.sectionReviews__text}
                                    >
                                        <h2>ООО Агрохолдинг</h2>
                                        <h3>Евгений Онегин, CEO</h3>
                                        <p>
                                            Доброго дня! Меня зовут Виталий, я
                                            веб-мастер. Стаж работы 6 лет. У
                                            меня около 30 активных сайтов на
                                            разных хостингах. Рег.ру самый
                                            лучший из всех, которые я знаю. По
                                            всем показателям. Это проверено
                                            временем. Поэтому все новые проекты
                                            я делаю уже тут. А также участвую в
                                            партнёрской программе. От души
                                            благодарю всю команду за вашу
                                            замечательную, компетентную и
                                            достойную работу!
                                        </p>
                                    </div>
                                    {/* <div className={styles.sectionReviews__img}>
                                        <Image
                                            src={"/img/review.jpg"}
                                            fill
                                            quality={100}
                                            styles={{ objectFit: "cover" }}
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}
