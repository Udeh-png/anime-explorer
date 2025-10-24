"use client";

import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { IoPlayOutline } from "react-icons/io5";

export const SlideContent = ({ media }: { media: Media }) => {
  const { bannerImage } = media;
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative min-[1090px]:h-60 h-40 min-[1090px]:rounded-lg overflow-clip mb-6">
        <Image
          src={bannerImage}
          alt=""
          fill
          className="object-cover"
          sizes="min-1090px:100vw, 100vw"
        />
        <BiHeart className="absolute text-7xl bottom-0 right-0 min-[1090px]:size-10 size-9 px-1 py-1" />
      </div>

      <div className="flex justify-center min-[1090px]:gap-x-5 gap-x-2 min-[1090px]:text-base text-xs">
        <Link
          href={"/"}
          className="bg-blue-400 min-[1090px]:px-5 min-[1090px]:py-2 px-1 py-1 min-[1090px]:rounded-lg flex items-center"
        >
          <IoPlayOutline className="text-2xl" />
          <span>Start Watching</span>
        </Link>

        <Link
          href={"/"}
          className="min-[1090px]:px-5 flex items-center min-[1090px]:py-2 px-1 py-1 border-2 border-gray-400 min-[1090px]:rounded-lg "
        >
          View Details
        </Link>
        <button className="min-[1090px]:px-5 min-[1090px]:py-2 px-1 py-1 border-2 border-gray-400 min-[1090px]:rounded-lg">
          Add To Watchlist
        </button>
      </div>
    </div>
  );
};
