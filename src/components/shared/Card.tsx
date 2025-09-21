"use client";

import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaHeart,
  FaMicrophone,
  FaRegHeart,
  FaSpinner,
  FaStar,
} from "react-icons/fa";
import { AnimatedButton } from "./AnimatedButton";

export const Card = ({ media }: { media: Media }) => {
  const {
    id,
    title: titleObject,
    coverImage,
    averageScore,
    characters,
    seasonYear: year,
    isFavorite,
  } = media;
  const title = titleObject.english || titleObject.romaji;

  const titleForUrl = title
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
  const hasDub = characters.edges.some((edge) =>
    edge.voiceActors.some(
      ({ language }) => language.toLocaleLowerCase() === "english"
    )
  );
  const [isFavorited, setIsFavorited] = useState(isFavorite);
  const rating = Number(averageScore / 10).toFixed(1);
  //TODO: Add a "Add to WatchList" button
  return (
    <div className="w-45 h-67 md:w-55 md:h-87 lg:w-63 relative lg:h-95 overflow-clip group">
      <div>
        <Link href={`/${id}/${titleForUrl}`} className="w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <FaSpinner className="text-sm animate-spin" />
          </div>
          <Image
            fill
            alt={title}
            src={coverImage.extraLarge}
            placeholder="blur"
            blurDataURL={coverImage.medium}
            className="absolute object-cover transition-transform group-hover:scale-105 image"
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
          />
          <div className="mask-linear-from-black mask-linear-from-75% mask-linear-to-transparent py-4 absolute bottom-0 left-0 w-full px-1 md:px-3 min-h-15 md:h-25 bg-linear-to-b from-transparent to-black/70 flex flex-col justify-center rounded-b-[inherit]">
            <p className="text-white font-semibold text-[12px] md:text-[15px] leading-tight mb-1 md:mb-2 line-clamp-2 md:line-clamp-1 transition-colors md:w-full w-[80%]">
              {title}
            </p>
            <p className="text-[10px] md:text-xs text-white/80">{year}</p>
          </div>

          {hasDub && (
            <div className="absolute top-3 left-1 flex gap-x-1 items-center bg-green-500 px-[2px] py-[1px] md:px-[8px] md:py-[4px] rounded-[2px] md:rounded">
              <FaMicrophone className="text-[8px] md:text-[10px]" />
              <p className="text-[7px] md:text-[10px]">has dub</p>
            </div>
          )}

          <div className="absolute top-3 right-1 flex pt-[2px] md:items-center md:gap-x-[6px] gap-x-[3px] justify-center text-yellow-500 bg-black/70 h-3 w-8 md:h-fit md:w-fit md:px-[8px] md:py-[4px] rounded-[2px] md:rounded">
            <FaStar className="text-[7px] md:text-[10px]" />
            <p className="text-[7px] md:text-[10px] h-fit leading-[7px]">
              {rating}
            </p>
          </div>
        </Link>
        <div
          onClick={() => {
            setIsFavorited(!isFavorited);
          }}
          className="absolute right-2 bottom-21 cursor-pointer h-6 w-6 md:text-lg text-[10px] md:h-11 md:w-11 rounded-full"
        >
          <AnimatedButton
            condition={isFavorited}
            styleOnFalse="bg-black/80"
            styleOnTrue="bg-accent-one"
            icon1={<FaHeart />}
            icon2={<FaRegHeart />}
          />
        </div>
      </div>
    </div>
  );
};
