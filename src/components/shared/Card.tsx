"use client";

import Image from "next/image";
import { WatchListButton, FavoriteButton, PlayButton } from "./ActionButtons";
import { Media } from "@/types";
import { FaStar, FaTv } from "react-icons/fa";
import Link from "next/link";
import { getStreamingLink } from "@/utils/sharedUtils";
import { useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";

export const Card = ({ media }: { media: Media }) => {
  const imageSrc = media.coverImage.extraLarge;
  const title = media.title.english || media.title.romaji;
  const hasDub = Boolean(
    media.characters.edges.some((edge) =>
      edge.voiceActors.some((va) => va.languageV2.toLowerCase() === "english")
    )
  );
  const score = ((media.averageScore * 5) / 100).toFixed(1);
  const isWatchListed = media.isWatchListed;
  const isFavorited = media.isFavorite;
  const streamingLink = getStreamingLink(media.externalLinks);
  const externalLink = media.externalLinks[0]?.url;
  return (
    <div className="3md:px-3.5 2md:px-2.5 px-[0.3rem]">
      <Link href={"/"} className="flex flex-col">
        <div className="relative mb-2 flex items-end justify-end aspect-[2/3] w-full overflow-clip bg-[rgb(25,25,25)]">
          <ImageWithFallback
            src={imageSrc}
            alt={`${title}s' cover image`}
            fill
            sizes=""
          />
          <div
            className="relative flex justify-between w-full px-1 pb-1"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <PlayButton
              rounded
              streamingLink={streamingLink}
              externalLink={externalLink}
            />
            <div className="flex gap-x-2.5">
              <WatchListButton rounded initialIsWatchListed={isWatchListed} />
              <FavoriteButton rounded initialIsFavorited={isFavorited} />
            </div>
          </div>
        </div>
        <div className="space-y-2 text-sm flex-1">
          <p className="font-semibold line-clamp-3">{title}</p>
          <div className="flex justify-between text-white/50 font-light">
            <p>{hasDub ? "Sub | Dub" : "Subtitle"}</p>
            <div className="flex items-center gap-x-1">
              <p>{score}</p>
              <p className="text-yellow-500 pb-0.5">
                <FaStar />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
