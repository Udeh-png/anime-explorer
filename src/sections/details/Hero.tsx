"use client";

import { usePersistentUrl } from "@/utils/hooks/UsePersistedUrl";
import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsPlay } from "react-icons/bs";
import {
  FaBookmark,
  FaEye,
  FaHeart,
  FaMicrophoneAlt,
  FaRegBookmark,
  FaRegHeart,
} from "react-icons/fa";
import { FaClapperboard, FaPlus, FaStar } from "react-icons/fa6";
import { getMediaCategory, getStatusMessage } from "@/utils/detailsPageUtils";
import { AnimatedButton } from "@/components/shared/AnimatedButton";
import { FiShare } from "react-icons/fi";

export const DetailsHero = ({ media }: { media: Media }) => {
  const {
    id,
    title: titleObject,
    coverImage,
    averageScore,
    characters,
    seasonYear: year,
    popularity,
    isFavorite,
    format,
    status,
  } = media;

  const hasDub = characters.edges.some((edge) =>
    edge.voiceActors.some(
      ({ languageV2 }) => languageV2.toLocaleLowerCase() === "english"
    )
  );

  const averageScoreDes = (averageScore / 10).toFixed(1);
  const popularityString = popularity.toLocaleString("US-en");
  const [imageUrl, handleError] = usePersistentUrl(
    [coverImage.extraLarge, coverImage.large, coverImage.medium],
    "/"
  );
  const mediaFormat = getMediaCategory(format);

  const [clickFavorite, setClickFavorite] = useState(false);
  const [clickAddToList, setClickAddToList] = useState(false);

  return (
    <div>
      <div
        className={`h-40 min-[600px]:h-70 min-[789px]:h-110 w-full absolute top-0 left-0`}
        style={{
          background: `${
            media.bannerImage
              ? `url(${media.bannerImage})`
              : `linear-gradient(to right, ${coverImage.color}, rgba(0,0,0,0.3))`
          }`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-background"
          style={{
            maskImage: "linear-gradient(to bottom,transparent,black)",
          }}
        ></div>
        <div className="absolute max-[350px]:left-2 -bottom-30 left-5 min-[600px]:-bottom-50 min-[789px]:bottom-10 min-[600px]:left-[8%] min-[1025px]:left-[5%] w-35 min-[600px]:w-50 min-[789px]:w-fit">
          <Image
            src={imageUrl}
            placeholder="blur"
            blurDataURL={coverImage.medium}
            alt={titleObject.english || titleObject.romaji}
            onError={handleError}
            width={250}
            height={380}
            className="rounded-lg"
          />

          <div className="absolute bottom-0 left-[109%] flex flex-col">
            <div className="mb-1 min-[600px]:mb-3 overflow-clip w-[52vw]">
              <p className="min-[600px]:text-[32px] min-[789px]:text-[38px] text-lg font-semibold text-nowrap leading-tight">
                {titleObject.english || titleObject.romaji}
              </p>
              <p className="text-white/80 hidden min-[600px]:flex min-[789px]:text-xs text-[10px] min-[600px]:mb-1">
                {year}
              </p>
              {titleObject.english && (
                <p className="text-white/80 min-[789px]:text-base text-[10px]">
                  {titleObject.romaji}
                </p>
              )}
            </div>

            <div className="flex min-[600px]:text-[12px] min-[789px]:text-sm text-[10px] min-[600px]:gap-x-1 min-[789px]:gap-x-3 mb-1 min-[600px]:mb-2 min-[789px]:mb-5 gap-1 w-[50vw] flex-wrap">
              <div className="flex px-3 py-[1px] min-[789px]:py-[3px] justify-center bg-black gap-x-1 rounded-full items-center">
                <FaStar className="text-yellow-400" />
                <p>{averageScoreDes}</p>
              </div>

              <div className="min-[600px]:flex min-[789px]:flex px-3 py-[1px] hidden justify-center bg-black gap-x-2 rounded-full items-center">
                <FaEye />
                <p>{popularityString}</p>
              </div>

              <div className="min-[600px]:flex min-[789px]:flex px-3 py-[1px] hidden justify-center bg-black gap-x-2 rounded-full items-center">
                <FaClapperboard />
                <p>{mediaFormat}</p>
              </div>

              <div className="flex px-3 py-[2px] min-[789px]:py-[5px] bg-green-500 justify-center gap-x-1 rounded-full items-center">
                <FaMicrophoneAlt className="text-xs" />
                <p>{hasDub ? "Dub" : "Subtitles"}</p>
              </div>

              <div className="min-[600px]:flex min-[789px]:flex hidden px-3 py-[2px] min-[789px]:py-[5px] bg-accent-two justify-center gap-x-2 rounded-full items-center">
                <p>{getStatusMessage(status)}</p>
              </div>
            </div>

            <div className="flex min-[789px]:gap-x-4 gap-x-1 items-center max-w-[100%]">
              <Link
                href={""}
                className="min-[600px]:w-26 min-[789px]:w-50 min-[600px]:h-9 min-[789px]:h-13 text-[10px] w-20 h-7 min-[600px]:text-[12px] min-[789px]:text-xl flex justify-center items-center bg-accent-two rounded-sm min-[789px]:rounded-lg"
              >
                <BsPlay />
                Watch Now
              </Link>
              <div
                className="flex justify-center items-center rounded-sm min-[789px]:rounded-xl min-[600px]:w-9 min-[789px]:w-13 min-[600px]:h-9 min-[789px]:h-13 w-7 h-7 min-[789px]:text-lg text-sm"
                onClick={() => {
                  setClickAddToList(!clickAddToList);
                }}
              >
                <AnimatedButton
                  styleOnFalse="bg-gray-500"
                  styleOnTrue="bg-green-500"
                  icon1={<FaBookmark />}
                  icon2={<FaRegBookmark />}
                  condition={clickAddToList}
                />
              </div>
              <div
                className="flex justify-center items-center rounded-sm min-[789px]:rounded-xl min-[600px]:w-9 min-[789px]:w-13 min-[600px]:h-9 min-[789px]:h-13 w-7 h-7 min-[789px]:text-lg text-sm"
                onClick={() => {
                  setClickFavorite(!clickFavorite);
                }}
              >
                <AnimatedButton
                  styleOnFalse="bg-gray-500"
                  styleOnTrue="bg-accent-one"
                  icon1={<FaHeart />}
                  condition={clickFavorite}
                  icon2={<FaRegHeart />}
                />
              </div>

              <div className="bg-gray-500 flex justify-center items-center rounded-sm min-[789px]:rounded-xl min-[600px]:w-9 min-[789px]:w-13 min-[600px]:h-9 min-[789px]:h-13 w-7 h-7 min-[789px]:text-lg text-sm">
                <FiShare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
