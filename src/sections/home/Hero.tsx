"use client";

import { HeroSliderContent } from "@/components/home/slideContent";
import { Media } from "@/types";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper as Swipe, SwiperSlide } from "swiper/react";

export const Hero = ({ featuredAnime }: { featuredAnime: Media[] }) => {
  return (
    <div className="caret-transparent w-full 3md:h-183! h-auto 3md:aspect-auto aspect-[3/4]">
      <Swipe
        className="h-full"
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1100}
        simulateTouch={false}
        fadeEffect={{
          crossFade: true,
        }}
        loop
        loopPreventsSliding={false}
        pagination={{
          el: ".el",
          clickable: true,
          renderBullet: (index, className) => {
            return `
              <div class="${className} custom-bullet" data-index="${index}">
                <div class="bullet-progress"></div>
              </div>
            `;
          },
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={{
          enabled: true,
          addIcons: true,
          nextEl: ".nextEl",
          prevEl: ".prevEl",
        }}
      >
        {featuredAnime.map((media, i) => {
          return (
            <SwiperSlide key={i}>
              <HeroSliderContent media={media} />
            </SwiperSlide>
          );
        })}

        <div className="hidden w-15 absolute z-10 left-0 top-0 bottom-0 3md:flex items-center justify-center lg:text-5xl text-4xl">
          <MdChevronLeft className="prevEl cursor-pointer absolute top-50 left-0" />
        </div>
        <div className="hidden w-15 absolute z-10 right-0 top-0 bottom-0 3md:flex items-center justify-center lg:text-5xl text-4xl">
          <MdChevronRight className="nextEl cursor-pointer absolute top-50 left-0" />
        </div>
        <div className="flex space-x-2! el absolute 3md:top-105! top-[94%]! bottom-auto! 3md:left-10! lg:left-15! 3md:translate-0 -translate-x-1/2 left-1/2! z-1 w-fit!"></div>
      </Swipe>
    </div>
  );
};
// movieName: the mummy
