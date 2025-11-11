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
    <div className="md:pt-15 md:pl-15 h-full flex md:items-stretch items-end md:justify-start justify-center pb-10 relative">
      <Image src={"/"} alt="" fill sizes="" />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="flex flex-col md:items-start items-center relative">
        <p className="font-bold md:text-7xl text-3xl mb-2 md:line-clamp-1 line-clamp-2 md:leading-23 text-center md:text-left">
          {title}
        </p>
        <div className="text-xs text-white/60 font-light flex gap-x-2 items-center mb-3 max-w-md pr-1 md:px-0 px-2">
          <span>{hasDub ? "Sub | Dub" : "Subtitle"}</span>
          <FaRegDotCircle className="text-[8px]" />
          <span className="italic line-clamp-1 pr-1">{genres.join(", ")}</span>
        </div>
        <DescriptionUi description={description} />

        <div className="flex gap-x-2.5">
          <Link
            href={streamingLink || externalLink}
            className="flex items-center text-sm gap-x-2 px-4 bg-blue-500 uppercase"
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
