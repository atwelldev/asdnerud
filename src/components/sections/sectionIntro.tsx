import { ISection } from "../_interfaces";
import styles from "./sectionIntro.module.scss";

import ElementButton from "../elements/elementButton";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Добавить интерфейс для текст блока
export interface ISectionIntro extends ISection {
    button: IElementButton;
    // text: IElementText;
}
import { IElementButton } from "../elements/elementButton";
import ElementText, { IElementText } from "../elements/elementText";
import { useEffect, useRef } from "react";
import ElementBanner from "../elements/elementBanner";
import ElementBackimg from "../elements/elementBackimg";
// import ElementSocial from "../elements/elementSocial";

export default function SectionIntro(props: ISectionIntro) {
    return (
        <section className={styles.sectionIntro}>
            <Swiper
                className={styles.sectionIntro__swiper}
                modules={[Autoplay, EffectFade, Parallax]}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true,
                }}
                spaceBetween={20}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                speed={20}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                parallax={true}
            >
                {[
                    "/img/mountain.webp",
                    "/img/cars.jpg",
                    "/img/aqua.jpg",
                    "/img/cars.jpg",
                    "/img/cars.jpg",
                ].map((e) => {
                    return (
                        <SwiperSlide
                            className={styles.sectionIntro_slide}
                            key={e}
                        >
                            <div
                                className={styles.sectionIntro__whiteFade}
                            ></div>
                            <div
                                className={styles.sectionIntro__whiteFade}
                            ></div>
                            {/* Картинка на фоне */}
                            <div className={styles.sectionIntro__backimg}>
                                <ElementBackimg href={e} />
                            </div>

                            {/* Основной контейнер */}
                            <div
                                className={
                                    styles.sectionIntro__container +
                                    " _container"
                                }
                            >
                                <div className={styles.sectionIntro__text}>
                                    <ul
                                        data-swiper-parallax="-30"
                                        data-swiper-parallax-duration="1000"
                                        data-swiper-parallax-opacity="0"
                                        className={styles.sectionIntro__tags}
                                    >
                                        <li>24/7</li>
                                        <li>Профессионально</li>
                                        <li data-type="discount">Распродажа</li>
                                    </ul>
                                    <h2
                                        data-swiper-parallax="-20"
                                        data-swiper-parallax-duration="1000"
                                        data-swiper-parallax-opacity="0"
                                    >
                                        {e} &nbsp;
                                        <span>в мешках</span>
                                    </h2>
                                    <p
                                        data-swiper-parallax="-10"
                                        data-swiper-parallax-duration="1000"
                                        data-swiper-parallax-opacity="0"
                                    >
                                        Компания «АСД-Неруд» с 2024 года
                                        занимается оптовой и розничной продажей
                                        нерудных материалов. Всегда в наличии
                                        песок, бетон, сухие смеси, керамзит,
                                        щебень, грунт, ЖБ-изделия,
                                        противогололедные реагенты.
                                    </p>
                                    <div
                                        className={
                                            styles.sectionIntro__txtbutton
                                        }
                                        data-swiper-parallax="-10"
                                        data-swiper-parallax-duration="1000"
                                        data-swiper-parallax-opacity="0"
                                    >
                                        <ElementButton
                                            href="/"
                                            text="Связаться"
                                            style="color"
                                        />
                                        <ElementButton
                                            href="/"
                                            text="Весь ассортимент >"
                                            style="text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                // data-swiper-parallax="-600"
                                // data-swiper-parallax-duration="2500"
                                className={styles.sectionIntro__slide_img}
                            ></div>
                        </SwiperSlide>
                    );
                })}

                <div className={styles.sectionIntro__nav}>
                    <div
                        className={
                            styles.sectionIntro__nav_container + " _container"
                        }
                    >
                        <ul>
                            {[
                                {
                                    id: 1,
                                    h: "Быстрая доставка",
                                    p1: "24/7 daily",
                                    p2: "Компания «Интерстрой» с 2024 года занимается оптовой и розничной продажей нерудных материалов. Всегда в наличии песок, бетон, ",
                                },
                                {
                                    id: 2,
                                    h: "Быстрая доставка",
                                    p1: "24/7 daily",
                                    p2: "Компания «Интерстрой» с 2024 года занимается  оптовой и розничной продажей нерудных материалов. Всегда в наличии песок, бетон, ",
                                },
                                {
                                    id: 3,
                                    h: "Быстрая доставка",
                                    p1: "24/7 daily",
                                    p2: "Компания «Интерстрой» с 2024 года\nзанимается оптовой и розничной",
                                },
                                {
                                    id: 4,
                                    h: "Быстрая доставка",
                                    p1: "24/7 daily",
                                    p2: "Компания «Интерстрой» с 2024 года занимается оптовой и розничной продажей нерудных материалов. Всегда в наличии песок, бетон, ",
                                },
                                {
                                    id: 5,
                                    h: "Быстрая доставка",
                                    p1: "24/7 daily",
                                    p2: "Компания «Интерстрой» с 2024 года занимается оптовой и розничной продажей нерудных материалов. Всегда в наличии песок, бетон, ",
                                },
                            ].map((e) => {
                                return (
                                    <li key={e.id}>
                                        <div>
                                            <h3>{e.h}</h3>
                                            <p>{e.p1}</p>
                                        </div>
                                        <div>
                                            <p>{e.p2}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </Swiper>
        </section>
    );
}
