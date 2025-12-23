"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../shared/Card";
import { FreeMode, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Media } from "@/types";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { AnimeCarouselSkeleton } from "../skeletons/AnimeCarouselSkeleton";

export const AnimeCarousel = ({
  mediaArrayFetchFn,
  title,
  subtitle,
}: {
  mediaArrayFetchFn: () => Promise<Media[]>;
  title: string;
  subtitle: string;
}) => {
  const [position, setPosition] = useState<"beginning" | "end" | "middle">(
    "beginning"
  );
  const [mediaArray, setMediaArray] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    async function fetchMediaArray() {
      const mediaArr = await mediaArrayFetchFn();
      setMediaArray(() => mediaArr);
      setIsLoading(false);
    }
    fetchMediaArray();
  }, [mediaArrayFetchFn]);

  if (isLoading || !isMounted)
    return <AnimeCarouselSkeleton title={title} subtitle={subtitle} />;

  return (
    <div>
      <div>
        <p className="3md:text-3xl 2md:text-2xl text-xl font-bold md:mb-3 mb-1">
          {title}
        </p>
        <p className="text-white/50 font-light md:text-base text-sm">
          {subtitle}
        </p>
      </div>

      <div className="pt-3.5 lg:-mx-15 2md:-mx-10 -mx-5">
        <Swiper
          className="mini-carousel"
          style={{ width: "100%" }}
          modules={[Navigation, FreeMode]}
          simulateTouch={false}
          observer={true}
          observeParents={true}
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
          {isLoading || !isMounted
            ? [...Array(10)].map((_, i) => (
                <SwiperSlide key={i}>
                  <CardSkeleton />
                </SwiperSlide>
              ))
            : mediaArray.map((media, i) => (
                <SwiperSlide key={i}>
                  <Card media={media} />
                </SwiperSlide>
              ))}

          <div
            className={`text-4xl w-fit absolute top-1/2 -translate-y-1/2 z-5 cursor-pointer transition-opacity md:block hidden right-0 nextEl ${
              isLoading ? "hidden" : ""
            } ${
              position === "end"
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
          >
            <FaChevronRight />
          </div>
          <div
            className={`text-4xl w-fit absolute top-1/2 -translate-y-1/2 z-5 cursor-pointer transition-opacity md:block hidden left-0 prevEl ${
              isLoading ? "hidden" : ""
            } ${
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
