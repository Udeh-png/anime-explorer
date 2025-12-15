"use client";

import Image from "next/image";
import { Media } from "@/types";
import Link from "next/link";
import { getStreamingLink } from "@/utils/sharedUtils";
import { getDuration } from "@/utils/sharedUtils";
export const SpotlightCard = ({ media }: { media: Media }) => {
  const {
    season,
    seasonYear,
    format,
    episodes,
    bannerImage,
    title,
    genres,
    coverImage,
    studios,
    externalLinks,
    duration,
  } = media;
  const titleVar = title.english || title.romaji;
  const color = coverImage.color;
  const studio = studios.edges.find((studio) => studio.isMain)?.node.name;
  const streamingLink = getStreamingLink(externalLinks);

  return (
    <Link
      href={"/details"}
      className="relative md:aspect-[3/1] aspect-video bg-[rgb(24,24,24)] grid md:grid-cols-1 grid-cols-[1.5fr_1fr] overflow-clip"
    >
      <Image src={bannerImage} alt="" fill sizes="" className="object-cover" />
      <div className="md:block hidden absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      <div className="absolute inset-0 backdrop-blur-2xl md:hidden block"></div>
      <div className="flex flex-col justify-between lg:justify-start lg:gap-y-10 h-full lg:pl-15 2md:pl-10 pl-5 lg:py-13 2md:py-8 py-5 relative">
        <div className="flex flex-col gap-y-2">
          <div className="text-2xl flex items-center gap-x-1 text-white/60 leading-0.5">
            {season && (
              <span className="text-[0.45rem] md:text-xxs 2md:text-xs font-semibold capitalize">
                {season.toLowerCase()} {seasonYear}
              </span>
            )}
            {format && (
              <div className="contents">
                &middot;
                <span className="text-[0.45rem] md:text-xxs 2md:text-xs font-semibold">
                  {format}
                </span>
              </div>
            )}
            {duration && episodes && (
              <div className="contents">
                &middot;
                <p className="text-[0.45rem] md:text-xxs 2md:text-xs font-semibold flex items-center gap-x-0.5">
                  {format.toLowerCase() === "movie"
                    ? getDuration(duration, "mins")
                    : episodes + " Episodes"}
                </p>
              </div>
            )}
          </div>

          <div className="md:w-1/2 w-40 flex flex-col gap-y-1 m-0">
            <p className="font-bold leading-[1.3] md:line-clamp-2 line-clamp-3 m-0 2md:text-xl 3md:text-3xl lg:text-4xl text-base">
              {titleVar}
            </p>
            <span className="2md:text-sm md:text-xs text-xxs m-0 text-orange-300">
              {studio}
            </span>
          </div>
        </div>

        <div className="lg:space-y-3 2md:space-y-2 space-y-1.5">
          <div
            onClick={(e) => {
              e.preventDefault();
              window.open(streamingLink.url, "_blank");
            }}
            className={`2md:px-4 2md:py-1 py-0.5 px-2 2md:text-base text-xxs rounded-full w-fit relative overflow-clip`}
            style={{ backgroundColor: color }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative">
              {streamingLink.linkType === "streaming" &&
                `Watch Now On ${streamingLink.platform}`}
              {streamingLink.linkType === "social" && `Learn More`}
              {streamingLink.linkType === "none" &&
                `View ${
                  format.toLowerCase() === "movie" ? "Movie" : "Show"
                } Details`}
            </div>
          </div>

          <div className="text-[0.45rem] 2md:text-xs flex gap-1 flex-wrap">
            {genres.map((genre, i) => (
              <p key={i} className="md:px-1.5 px-1 bg-white/10 rounded-full">
                {genre}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="relative [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] md:hidden block">
        <Image
          src={coverImage.extraLarge}
          alt=""
          fill
          sizes=""
          className="object-cover"
        />
      </div>
    </Link>
  );
};
