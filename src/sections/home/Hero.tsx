"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PageObject } from "@/types";
import { SlideContent } from "@/components/home/slideContent";
import { CgSearch } from "react-icons/cg";

export const Hero = ({ pageObjs }: { pageObjs: PageObject }) => {
  return (
    <div className="">
      <Swiper
        className="min-h-fit pb-5! caret-transparent"
        modules={[Autoplay]}
        autoplay={{
          pauseOnMouseEnter: true,
        }}
        loop
        slidesPerView={1}
      >
        {pageObjs.media.map((media, i) => (
          <SwiperSlide key={i}>
            <SlideContent media={media} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
