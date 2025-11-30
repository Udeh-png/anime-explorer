"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../shared/Card";
import { FreeMode, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { Media } from "@/types";

export const MiniCarousel = ({ medias }: { medias: Media[] }) => {
  const [position, setPosition] = useState<"beginning" | "end" | "middle">(
    "beginning"
  );
  return (
    <div>
      <div>
        <p className="3md:text-3xl 2md:text-2xl text-xl font-bold md:mb-3 mb-1">
          Trending Around The World
        </p>
        <p className="text-white/50 font-light md:text-base text-sm">
          Some subtext related to the header text
        </p>
      </div>

      <div className="pt-3.5 lg:-mx-15 2md:-mx-10 -mx-5">
        <Swiper
          className="mini-carousel"
          modules={[Navigation, FreeMode]}
          simulateTouch={false}
          breakpoints={{
            480: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              slidesOffsetBefore: 30,
              slidesOffsetAfter: 20,
              freeMode: false,
            },

            570: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              slidesOffsetBefore: 30,
              slidesOffsetAfter: 20,
              freeMode: false,
            },

            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              slidesOffsetBefore: 48,
              slidesOffsetAfter: 40,
              freeMode: false,
            },
          }}
          slidesPerView={2}
          slidesOffsetBefore={17}
          slidesOffsetAfter={10}
          freeMode={true}
          onSlideChange={(swiper) => {
            if (swiper.isBeginning) {
              return setPosition("beginning");
            }
            if (swiper.isEnd) {
              return setPosition("end");
            }
            return setPosition("middle");
          }}
          navigation={{
            nextEl: ".nextEl",
            prevEl: ".prevEl",
          }}
        >
          {medias.map((media, i) => (
            <SwiperSlide key={i}>
              <Card media={media} />
            </SwiperSlide>
          ))}

          <div
            className={`text-4xl w-fit absolute top-1/2 -translate-y-1/2 z-5 cursor-pointer transition-opacity md:block hidden right-0 nextEl ${
              position === "end"
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
          >
            <FaChevronRight />
          </div>
          <div
            className={`text-4xl w-fit absolute top-1/2 -translate-y-1/2 z-5 cursor-pointer transition-opacity md:block hidden left-0 prevEl ${
              position === "beginning"
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
          >
            <FaChevronLeft />
          </div>
        </Swiper>
      </div>
    </div>
  );
};
