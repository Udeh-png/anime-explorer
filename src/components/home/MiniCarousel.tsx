"use client";

import { Card } from "@/components/shared/Card";
import { getTenTrending } from "@/queries";
import { PageObject } from "@/types";
import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { TbRefresh } from "react-icons/tb";

export const MiniCarousel = ({ pageObject }: { pageObject: PageObject }) => {
  const [pageObjectState, setPageObjectState] = useState(pageObject);
  const [mediaArray, setMediaArray] = useState(pageObject.media);
  const [loading, setLoading] = useState(false);
  const { currentPage, hasNextPage } = pageObjectState.pageInfo;
  return (
    <div className="mt-8">
      <div className="flex py-2 text-4xl gap-2 mb-1.5 text-accent-one ml-8">
        <FaFire />
        <p className="font-semibold">Trending Now</p>
      </div>
      <div className="overflow-auto mini-carrousel scroll-smooth">
        <div className="flex gap-x-3 w-fit overflow-auto">
          {mediaArray.map((media, i) => {
            return (
              <Card
                key={i}
                bgImage={media.coverImage.large}
                title={media.title.english || media.title.romaji}
                color={media.coverImage.color}
              />
            );
          })}
          {hasNextPage && (
            <div className="w-[230px] h-75 flex items-center justify-center text-accent-one flex-col">
              <div
                className=" cursor-pointer flex flex-col items-center justify-center"
                onClick={async () => {
                  setLoading(true);
                  const newPageObject = await getTenTrending(currentPage + 1);
                  setLoading(false);
                  setPageObjectState(newPageObject);
                  setMediaArray((prev) => [...prev, ...newPageObject.media]);
                }}
              >
                <LuRefreshCw
                  className={`text-6xl ${loading ? "animate-spin" : ""}`}
                />
                <p>Load More</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

{
  /* <div
  className="grid grid-rows-[8fr_1fr] gap-y-4 relative rounded-2xl p-4 w-70 h-100"
  style={{
    background: `url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="absolute overflow-clip top-0 left-0 w-full h-full backdrop-blur-sm rounded-2xl"></div>
  <div className="relative rounded-2xl overflow-clip">
    <Image src={imgUrl} fill alt="img" className="object-fill" />
  </div>
  <div className="z-10">
    <p>Anime Name</p>
  </div>

  <div className="text-3xl absolute bg-gradient-to-br p-2 rounded-full right-5 top-5">
    <IoBookmark className="" />
  </div>
</div>; */
}
