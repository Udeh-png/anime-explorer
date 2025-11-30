"use client";

import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaRegDotCircle } from "react-icons/fa";
import { DescriptionUi } from "../shared/DescriptionUtil";
import { streamingPlatforms } from "@/data";
import { WatchListButton, FavoriteButton } from "../shared/ActionButtons";

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
  const isFavorited = media.isFavorite;
  const isWatchListed = media.isWatchListed;

  return (
    <div className="h-full flex relative lg:pl-15 lg:pt-17 3md:pl-10 3md:pt-30 3md:justify-start 3md:items-stretch justify-center items-end 3md:pb-0 md:pb-hpb pb-hpb-sm 3md:aspect-auto aspect-[3/4] 3md:mask-none mask-b-from-97%">
      <div className="absolute inset-0 3md:hidden block bg-linear-to-t from-black/90 from-12% to-transparent to-50%" />
      <div className="w-full aspect-[3/2] absolute top-0 left-0 3md:block hidden">
        <Image
          src={media.bannerImage}
          alt=""
          fill
          sizes="(max-width: 801px) 1vw"
          className="object-cover select-none"
          quality={100}
        />
        <div
          className="h-full relative"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.95), transparent), linear-gradient(to top, rgba(0,0,0,0.95) 10%, transparent 50%)",
          }}
        />
      </div>

      <div className="absolute inset-0 3md:hidden block">
        <Image
          src={media.bannerImageMobile}
          alt=""
          fill
          sizes="(min-width: 801px) 1vw"
          className="object-cover"
          quality={100}
        />

        <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0)] to-transparent"></div>
      </div>

      <div className="flex flex-col 3md:items-start items-center relative 3md:gap-y-2 gap-y-2.5">
        <p className="font-bold lg:text-7xl! 3md:text-6xl 2md:text-4xl text-3xl 3md:line-clamp-1 line-clamp-2 3md:mb-2 mb-1 text-center md:text-left md:max-w-full max-w-2xs">
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
            <WatchListButton initialIsWatchListed={isWatchListed} />

            <FavoriteButton initialIsFavorited={isFavorited} />
          </div>
        </div>
      </div>
    </div>
  );
};
