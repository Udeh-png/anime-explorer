"use client";

import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatTitle, getStarCount } from "@/utils/sharedUtils";
import {
  TiStar,
  TiStarHalf,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

export const Card = ({ media }: { media: Media }) => {
  const {
    id,
    title: titleObject,
    coverImage,
    averageScore,
    characters,
    isFavorite,
  } = media;
  const title = titleObject.english || titleObject.romaji;

  const titleForUrl = formatTitle(title);
  const { fullStars, emptyStars, hasHalfStars } = getStarCount(averageScore, 5);

  const hasDub = characters.edges.some((edge) =>
    edge.voiceActors.some(
      ({ languageV2 }) => languageV2.toLocaleLowerCase() === "english"
    )
  );
  const [isFavorited, setIsFavorited] = useState(isFavorite);
  //TODO: Add a "Add to WatchList" button
  return (
    <div className="w-fit">
      <div
        className={`bg-[${coverImage.color}] min-[1090px]:w-50 min-[1090px]:h-70 w-39 h-60 relative overflow-clip mb-3`}
      >
        <Image
          src={coverImage.extraLarge}
          alt="1"
          fill
          sizes="min-[1090px]:100vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="line-clamp-1 min-[1090px]:text-base text-sm mb-1">
        {title}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-yellow-300 min-[1090px]:text-xl">
          {Array.from({ length: fullStars }).map((_, i) => (
            <TiStar key={i} />
          ))}
          {hasHalfStars && <TiStarHalfOutline />}

          {Array.from({ length: emptyStars }).map((_, i) => (
            <TiStarOutline key={i} />
          ))}
        </div>
        <p className="text-sm text-white/70">{hasDub ? "Sub | Dub" : "Sub"}</p>
      </div>
    </div>
  );
};
