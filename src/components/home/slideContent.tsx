"use client";

import { Media } from "@/types";
import { formatTitle, getStarCount } from "@/utils/sharedUtils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiBookmark, BiHeart } from "react-icons/bi";
import { FaPlay, FaPlus } from "react-icons/fa6";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

export const SlideContent = ({ media }: { media: Media }) => {
  const { bannerImage, coverImage, externalLinks, id, title, averageScore } =
    media;
  const { emptyStars, fullStars, hasHalfStars } = getStarCount(averageScore, 5);
  const mediaTitle = title.english || title.romaji;
  const desktopImage = bannerImage || coverImage.extraLarge;
  const mobileImage = coverImage.extraLarge;
  const [isMobile, setIsMobile] = useState(false);
  const imageUrl = isMobile ? mobileImage : desktopImage;
  useEffect(() => {
    setIsMobile(navigator.userAgent.toLowerCase().includes("mobi"));
  }, []);
  return (
    <div
      className="mx-auto relative overflow-clip"
      style={{
        maskImage:
          "linear-gradient(to bottom, var(--background) 60%, transparent",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-5"></div>
      <div
        className={`relative min-[1090px]:h-110 h-120 overflow-clip`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute min-[1090px]:top-auto min-[1090px]:bottom-50 top-5 bottom-20 min-[1090px]:left-25 left-4 z-10 space-y-4">
          <p className="min-[1090px]:text-4xl text-2xl font-semibold line-clamp-2">
            {mediaTitle}
          </p>
          <div className="flex gap-2 max-w-full flex-wrap">
            {media.genres.map((genre, i) => (
              <p
                key={i}
                className="px-2 py-0.5 bg-background/50 rounded-full text-xs min-[1090px]:text-sm"
              >
                {genre}
              </p>
            ))}
          </div>
          <div className="flex text-yellow-300 min-[1090px]:text-xl text-base">
            {Array.from({ length: fullStars }).map((_, i) => (
              <TiStarFullOutline key={i} />
            ))}
            {hasHalfStars && <TiStarHalfOutline />}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <TiStarOutline key={i} />
            ))}
          </div>
          <div className="flex min-[1090px]:gap-x-3 gap-x-2">
            <Link
              href={externalLinks[0].url}
              type="blank"
              className="min-[1090px]:px-5 min-[1090px]:py-2 px-2 py-2 bg-blue-400 min-[1090px]:text-base text-sm rounded-lg flex items-center w-fit gap-x-2"
            >
              <FaPlay />
              <span>Watch Now</span>
            </Link>
            <button className="min-[1090px]:px-5 min-[1090px]:py-2 px-2 py-2 border-2 min-[1090px]:text-base text-sm rounded-lg flex items-center w-fit gap-x-2">
              <FaPlus className="text-lg" />
              <span>Add To Watchlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
