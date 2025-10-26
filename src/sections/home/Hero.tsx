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

      <div className="mt-5">
        <div className="min-[1090px]:max-w-2xl min-[1090px]:w-2xl w-2xs relative mx-auto min-[1090px]:py-4 py-2 border focus-within:outline-2 focus-within:outline-blue-500/40 focus-within:border-blue-500 border-gray-400 flex rounded-full px-4 gap-x-2 group">
          <CgSearch className="text-2xl text-gray-400 group-focus-within:text-blue-400 transition-colors" />
          <input
            type="text"
            className="outline-0 w-full placeholder:caret-transparent overflow-ellipsis"
            placeholder="Search title, genre, or studio..."
          />
        </div>
      </div>
    </div>
  );
};
