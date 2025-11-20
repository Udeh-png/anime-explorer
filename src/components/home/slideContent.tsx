"use client";

import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookmark,
  FaHeart,
  FaPlay,
  FaRegBookmark,
  FaRegDotCircle,
  FaRegHeart,
} from "react-icons/fa";
import { DescriptionUi } from "../shared/DescriptionUtil";
import { streamingPlatforms } from "@/data";
import { ActionButton } from "../shared/ActionButton";
import { useState } from "react";

export const HeroSliderContent = ({ media }: { media: Media }) => {
  const title = media.title.english || media.title.romaji;
  const description = media.description;
  const hasDub =
    media.characters.edges.length > 0 &&
    media.characters.edges.some((edge) =>
      edge.voiceActors.some((va) => va.languageV2.toLowerCase() === "english")
    );
  const genres = media.genres;
  const streamingLink = media.externalLinks.find((link) => {
    return streamingPlatforms.some((platform) =>
      link.url.toLowerCase().includes(platform)
    );
  })?.url;
  const externalLink = media.externalLinks[0].url;
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleFavoriteButtonClick = () => {
    setIsFavorited((prev) => !prev);
  };

  const handleLikeButtonClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="md:pt-15 md:pl-15 md:pb-0 pb-15 h-full flex md:items-stretch items-end md:justify-start justify-center relative md:mask-b-from-97% mask-b-from-93%">
      <Image
        src={media.bannerImage}
        alt=""
        fill
        sizes=""
        className="object-cover md:block hidden select-none"
        quality={100}
      />

      <Image
        src={media.bannerImageMobile}
        alt=""
        fill
        sizes=""
        className="object-cover md:hidden block"
        quality={100}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.95), transparent), linear-gradient(to top, rgba(0,0,0,0.95) 5%, transparent 15%)",
        }}
      ></div>
      <div className="flex flex-col md:items-start items-center relative">
        <p className="font-bold md:text-7xl text-3xl mb-2 md:line-clamp-1 line-clamp-2 md:leading-23 text-center md:text-left md:max-w-full max-w-2xs">
          {title}
        </p>
        <div className="text-xs text-white/60 font-light flex items-center space-x-2 mb-3 md:max-w-md max-w-2xs pr-1">
          <span className="text-nowrap">
            {hasDub ? "Sub | Dub" : "Subtitle"}
          </span>

          <FaRegDotCircle className="text-[8px] block min-w-fit" />

          <span className="italic pr-1 text-nowrap overflow-hidden text-ellipsis">
            {genres.join(", ")}
          </span>
        </div>

        <DescriptionUi description={description} />

        <div className="flex gap-x-2.5">
          <Link
            href={streamingLink || externalLink}
            className="flex items-center text-sm gap-x-2 px-4 bg-accent-one uppercase"
          >
            <FaPlay className="" />
            {streamingLink ? "Start Watching Now" : "See Socials"}
          </Link>
          <div className="grid grid-cols-2 gap-x-2.5 w-23 h-10 text-xl">
            <ActionButton
              iconOne={<FaRegBookmark />}
              iconTwo={<FaBookmark />}
              condition={isFavorited}
              onClick={handleFavoriteButtonClick}
            />

            <ActionButton
              iconOne={<FaRegHeart />}
              iconTwo={<FaHeart />}
              condition={isLiked}
              onClick={handleLikeButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
