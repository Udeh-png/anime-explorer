"use client";

import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiShare, BiShareAlt } from "react-icons/bi";
import { BsPlay } from "react-icons/bs";
import {
  FaEye,
  FaMicrophone,
  FaMicrophoneAlt,
  FaRegHeart,
} from "react-icons/fa";
import { FaPlus, FaStar } from "react-icons/fa6";

export const DetailsHero = ({ media }: { media: Media }) => {
  const {
    id,
    title: titleObject,
    coverImage,
    averageScore,
    characters,
    seasonYear: year,
    isFavorite,
  } = media;

  return (
    <div>
      <div
        className={`h-40 min-[600px]:h-70 min-[789px]:h-70 w-full absolute top-0 left-0`}
        style={{
          background: `url(${media.bannerImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute -bottom-30 left-5 min-[600px]:-bottom-50 min-[789px]:-bottom-60 min-[600px]:left-[8%] min-[789px]:left-[13%] w-35 min-[600px]:w-50 min-[789px]:w-fit">
          <Image
            src={coverImage.extraLarge}
            placeholder="blur"
            blurDataURL={coverImage.medium}
            alt={titleObject.english}
            width={250}
            height={380}
            quality={100}
          />

          <div className="absolute bottom-0 left-[110%] flex flex-col">
            <div className="mb-2 min-[600px]:mb-3 min-[789px]:mb-3">
              <p className="min-[600px]:text-[32px] min-[789px]:text-[38px] text-lg font-semibold">
                {titleObject.english || titleObject.romaji}
              </p>
              {titleObject.english && (
                <p className="text-white/80 min-[600px]:text-[18px] min-[789px]:text-base text-xs">
                  {titleObject.romaji}
                </p>
              )}
            </div>

            <div className="flex min-[600px]:text-[12px] min-[789px]:text-sm text-[10px] min-[600px]:gap-x-1 min-[789px]:gap-x-3 mb-3 min-[600px]:mb-2 min-[789px]:mb-5 gap-1 w-fit">
              <div className="flex px-3 py-[1px] min-[789px]:py-[3px] justify-center bg-black gap-x-2 rounded-full items-center">
                <FaStar className="text-yellow-400" />
                <p>{(averageScore / 10).toFixed(1)}</p>
              </div>

              <div className="min-[600px]:flex min-[789px]:flex px-3 py-[1px] hidden justify-center bg-black gap-x-2 rounded-full items-center">
                <FaEye />
                <p>647,019</p>
              </div>

              <div className="flex px-3 py-[2px] min-[789px]:py-[5px] bg-green-500 justify-center gap-x-2 rounded-full items-center">
                <FaMicrophoneAlt className="text-xs" />
                <p>Dub</p>
              </div>

              <div className="min-[600px]:flex min-[789px]:flex hidden px-3 py-[2px] min-[789px]:py-[5px] bg-accent-two justify-center gap-x-2 rounded-full items-center">
                <p>Finished</p>
              </div>
            </div>

            <div className="flex min-[789px]:gap-x-4 gap-x-1 items-center">
              <Link
                href={""}
                className="min-[600px]:w-26 min-[789px]:w-50 min-[600px]:h-9 min-[789px]:h-13 text-[10px] w-20 h-7 min-[600px]:text-[12px] min-[789px]:text-xl flex justify-center items-center bg-accent-one rounded-sm min-[789px]:rounded-lg"
              >
                <BsPlay />
                Watch Now
              </Link>
              <div className="bg-gray-500 flex justify-center items-center rounded-sm min-[789px]:rounded-xl min-[600px]:w-9 min-[789px]:w-13 min-[600px]:h-9 min-[789px]:h-13 w-7 h-7">
                <FaPlus className="min-[789px]:text-lg text-sm" />
              </div>
              <div className="bg-gray-500 flex justify-center items-center rounded-sm min-[789px]:rounded-xl min-[600px]:w-9 min-[789px]:w-13 min-[600px]:h-9 min-[789px]:h-13 w-7 h-7">
                <FaRegHeart className="min-[789px]:text-lg text-sm" />
              </div>

              <div className="bg-gray-500 flex justify-center items-center rounded-sm min-[789px]:rounded-xl min-[600px]:w-9 min-[789px]:w-13 min-[600px]:h-9 min-[789px]:h-13 w-7 h-7">
                <BiShareAlt className="min-[789px]:text-lg text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
