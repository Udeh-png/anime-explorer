"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Media } from "@/types";
import { SlideContent } from "@/components/home/slideContent";
import Link from "next/link";

export const Hero = ({ media }: { media: Media }) => {
  return (
    <div className="min-[1090px]:pt-10">
      <Swiper
        className="min-h-fit pb-10! caret-transparent"
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
        <SwiperSlide>
          <SlideContent media={media} />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent media={media} />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent media={media} />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent media={media} />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent media={media} />
        </SwiperSlide>
      </Swiper>

      <div className="min-[1090px]:px-20 px-2 min-[1090px]:mt-0 mt-5">
        <div className="max-w-7xl mx-auto min-[1090px]:space-y-5">
          <p className="font-bold text-2xl min-[1090px]:mb-5 mb-3">
            Latest Release Schedule
          </p>

          <div className="min-[1090px]:mb-3 mb-2">
            <div className="space-x-2 min-[1090px]:mb-0 mb-2">
              <span className="font-semibold">Today :</span>
              <br className="min-[1090px]:hidden inline" />
              <span className="text-gray-300 min-[1090px]:ml-0 ml-4">
                One Piece (ep 1450) 15:30
              </span>
            </div>

            <div className="space-x-2 min-[1090px]:mb-0 mb-2">
              <span className="font-semibold">Tomorrow :</span>
              <br className="min-[1090px]:hidden inline" />
              <span className="text-gray-300 min-[1090px]:ml-0 ml-4">
                Gachiakuta (ep 15) 16:00
              </span>
            </div>
          </div>

          <Link
            href={"/schedule"}
            className="py-2 px-5 border-2 border-blue-400 rounded block w-fit"
          >
            View Full Calender
          </Link>
        </div>
      </div>
    </div>
  );
};
