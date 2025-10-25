"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Media, PageObject } from "@/types";
import { SlideContent } from "@/components/home/slideContent";
import Link from "next/link";
import { CgSearch } from "react-icons/cg";

export const Hero = ({ pageObjs }: { pageObjs: PageObject }) => {
  return (
    <div className="">
      <Swiper
        className="min-h-fit pb-5! caret-transparent"
        modules={[Pagination, Autoplay]}
        autoplay={{
          pauseOnMouseEnter: true,
        }}
        loop
        slidesPerView={1}
        pagination={{
          enabled: true,
          clickable: true,
          type: "bullets",
          renderBullet: (index, className) => {
            return `<span class="${className} bg-white!"></span>`;
          },
        }}
      >
        {pageObjs.media.map((media, i) => (
          <SwiperSlide key={i}>
            <SlideContent media={media} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div>
        <div className="max-w-2xl relative">
          <CgSearch className="absolute" />
          <input
            type="text"
            className="outline-0 border border-gray-400 w-full"
          />
        </div>
      </div> */}
    </div>
  );
};
