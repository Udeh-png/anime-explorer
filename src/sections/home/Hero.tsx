"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { PageObject } from "@/types";
import { SlideContent } from "@/components/home/slideContent";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const Hero = ({ pageObjs }: { pageObjs: PageObject }) => {
  return (
    <div className="">
      <Swiper
        className="min-h-fit pb-5! caret-transparent"
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".nextEl",
          prevEl: ".prevEl",
        }}
        autoplay={{
          pauseOnMouseEnter: true,
        }}
        loop
        slidesPerView={1}
      >
        <BiChevronRight className="nextEl absolute right-0 top-1/2 z-10 text-7xl -translate-y-1/2 min-[1090px]:block hidden" />
        <BiChevronLeft className="prevEl absolute left-0 top-1/2 z-10 text-7xl -translate-y-1/2 min-[1090px]:block hidden" />
        {pageObjs.media.map((media, i) => (
          <SwiperSlide key={i}>
            <SlideContent media={media} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
