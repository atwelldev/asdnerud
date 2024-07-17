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
import { useEffect, useRef, useState } from "react";
import ElementBanner from "../elements/elementBanner";
import ElementBackimg from "../elements/elementBackimg";
// import ElementSocial from "../elements/elementSocial";

export default function SectionIntro(props: ISectionIntro) {
    const [slide, setSlide] = useState(0);
    const [img, setImg] = useState(1);

    let bgcFade: any = useRef();
    let swiper: any = useRef();

    let animationTime = 1000;

    // Инициализация слайдера
    const [my_swiper, set_my_swiper] = useState(null);

    return (
        <section className={styles.sectionIntro}>
            <Swiper
                // инициализируем swiper
                onInit={(ev) => {
                    set_my_swiper(ev);
                }}
                className={styles.sectionIntro__swiper}
                modules={[Autoplay, EffectFade, Parallax]}
                ref={swiper}
                // effect={"fade"}
                // fadeEffect={{
                //     crossFade: true,
                // }}
                initialSlide={0}
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => {
                    // Current slide
                    setSlide(my_swiper.activeIndex);

                    // Img
                    setTimeout(() => {
                        setImg(my_swiper.activeIndex + 1);
                    }, 300);
                    console.log(slide);

                    // Fade
                    bgcFade.current.classList.toggle(styles._active);
                    setTimeout(() => {
                        bgcFade.current.classList.toggle(styles._active);
                    }, 500);
                }}
                allowTouchMove={false}
                // onSwiper={(swiper) => console.log(swiper)}
                // loop={true}
                speed={20}
                autoplay={{
                    delay: 7000,
                    // disableOnInteraction: true,
                }}
                parallax={true}
            >
                <div className={styles.sectionIntro__backimg}>
                    {[
                        { id: 1, img: "/img/mountain.webp" },
                        { id: 2, img: "/img/cars.jpg" },
                        { id: 3, img: "/img/aqua.jpg" },
                        { id: 4, img: "/img/mountain.webp" },
                        { id: 5, img: "/img/d.jpg" },
                    ].map((e) => {
                        return (
                            <div
                                key={e.id}
                                className={
                                    styles.sectionIntro__img +
                                    " " +
                                    (e.id == img ? styles._active : "")
                                }
                            >
                                <ElementBackimg href={e.img} />
                            </div>
                        );
                    })}
                </div>

                <div className={styles.sectionIntro__whiteFades} ref={bgcFade}>
                    <div
                        className={
                            styles.sectionIntro__whiteFade_1 +
                            " " +
                            styles.sectionIntro__whiteFade
                        }
                    ></div>
                    <div
                        className={
                            styles.sectionIntro__whiteFade_2 +
                            " " +
                            styles.sectionIntro__whiteFade
                        }
                    ></div>
                </div>

                {[
                    {
                        id: 1,
                        img: "/img/mountain.webp",
                        title: "Быстрая доставка нерудных материалов",
                        subtitle: "Всегда качественно",
                        paragraph:
                            "Быстро доставим нерудные материалы в любую точку Российской Федерации, а также страны ближнего зарубежья.",
                        tags: [
                            { id: 1, text: "Распродажа", type: "discount" },
                            { id: 2, text: "24/7", color: "dark" },
                            { id: 3, text: "Качественно", color: "dark" },
                        ],
                        buttons: [
                            {
                                id: 1,
                                text: "Заказать",
                                style: "color",
                                href: "/",
                            },
                            {
                                id: 2,
                                text: "Весь ассортимент",
                                style: "text",
                                href: "/",
                            },
                        ],
                    },

                    // { id: 2, img: "/img/cars.jpg" },
                    // { id: 3, img: "/img/aqua.jpg" },
                    // { id: 4, img: "/img/mountain.webp" },
                    // { id: 5, img: "/img/cars.jpg" },
                ].map((e) => {
                    return (
                        <SwiperSlide
                            className={styles.sectionIntro_slide}
                            key={e.id}
                        >
                            {/* Основной контейнер */}
                            <div
                                className={
                                    styles.sectionIntro__container +
                                    " _container"
                                }
                            >
                                <div className={styles.sectionIntro__text}>
                                    <ul
                                        data-swiper-parallax="-80"
                                        data-swiper-parallax-duration={
                                            animationTime
                                        }
                                        data-swiper-parallax-opacity="0"
                                        className={styles.sectionIntro__tags}
                                    >
                                        <li>24/7</li>
                                        <li>Профессионально</li>
                                        <li data-type="discount">Распродажа</li>
                                    </ul>
                                    <h2
                                        data-swiper-parallax="-50"
                                        data-swiper-parallax-duration={
                                            animationTime
                                        }
                                        data-swiper-parallax-opacity="0"
                                    >
                                        {e.id} &nbsp;
                                        <span>в мешках</span>
                                    </h2>
                                    <p
                                        data-swiper-parallax="-20"
                                        data-swiper-parallax-duration={
                                            animationTime
                                        }
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
                                        data-swiper-parallax-duration={
                                            animationTime
                                        }
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
                                    p2: "Компания «Интерстрой» с 2024 года\nзанимается оптовой и розничной",
                                },
                                {
                                    id: 2,
                                    h: "Быстрая доставка",
                                    p1: "24/7 daily",
                                    p2: "Компания «Интерстрой» с 2024 года\nзанимается оптовой и розничной",
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
                                    p2: "Компания «Интерстрой» с 2024 года\nзанимается оптовой и розничной",
                                },
                                {
                                    id: 5,
                                    h: "Быстрая доставка",
                                    p1: "24/7 daily",
                                    p2: "Компания «Интерстрой» с 2024 года\nзанимается оптовой и розничной",
                                },
                            ].map((e) => {
                                return (
                                    <li
                                        key={e.id}
                                        className={
                                            e.id == slide + 1
                                                ? styles._active
                                                : ""
                                        }
                                        onClick={() => {
                                            my_swiper.slideTo(e.id - 1);
                                        }}
                                    >
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
