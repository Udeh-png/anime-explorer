"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../shared/Card";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export const MiniCarousel = () => {
  const [position, setPosition] = useState<"beginning" | "end" | "middle">(
    "beginning"
  );
  return (
    <div>
      <div>
        <p className="md:text-3xl text-xl font-bold md:mb-3 mb-1">
          Trending Around The World
        </p>
        <p className="text-white/50 font-light md:text-base text-sm">
          Some subtext related to the header text
        </p>
      </div>

      <div className="pt-3.5 -mx-15">
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              slidesOffsetBefore: 50,
              slidesOffsetAfter: 40,
            },
          }}
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
          {Array.from({ length: 35 }).map((_, i) => (
            <SwiperSlide key={i}>
              <Card />
            </SwiperSlide>
          ))}

          <div
            className={`text-4xl w-fit absolute top-1/2 -translate-y-1/2 z-5 cursor-pointer transition-opacity right-0 nextEl ${
              position === "end"
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
          >
            <FaChevronRight />
          </div>
          <div
            className={`text-4xl w-fit absolute top-1/2 -translate-y-1/2 z-5 cursor-pointer transition-opacity left-0 prevEl ${
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
