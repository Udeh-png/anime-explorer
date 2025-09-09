"use client";

import { Card } from "@/components/shared/Card";
import { getTenTrending, PresetType } from "@/queries";
import { PageObject } from "@/types";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";

export const MiniCarousel = ({
  pageObject,
  type,
  title,
  icon,
}: {
  pageObject: PageObject;
  type: PresetType;
  title: string;
  icon: React.ReactNode;
}) => {
  const [pageObjectState, setPageObjectState] = useState(pageObject);
  const [atEnd, setAtEnd] = useState("");
  const [mediaArray, setMediaArray] = useState(pageObject.media);
  const [loading, setLoading] = useState(false);
  const { currentPage, hasNextPage } = pageObjectState.pageInfo;
  const [hasNextPageState, setHasNextPageState] = useState(hasNextPage);

  const carrouselRef = useRef<HTMLDivElement>(null);

  function scrollRight() {
    if (carrouselRef.current) {
      const carrousel = carrouselRef.current;
      carrousel.scrollLeft += 500;
    }
  }

  function scrollLeft() {
    if (carrouselRef.current) {
      const carrousel = carrouselRef.current;
      carrousel.scrollLeft -= 500;
    }
  }

  async function loadMore() {
    setLoading(true);
    const newPageObject = await getTenTrending({
      pageNo: currentPage + 1,
      type: type,
    });
    setLoading(false);
    setPageObjectState(newPageObject);
    setMediaArray((prev) => [...prev, ...newPageObject.media]);
  }

  function checkScrollPosition() {
    if (carrouselRef.current) {
      const carrousel = carrouselRef.current;
      const scrollLeft = carrousel.scrollLeft;
      setTimeout(() => {
        if (scrollLeft <= 0) {
          setAtEnd("left");
          return;
        }
        if (scrollLeft + carrousel.clientWidth === carrousel.scrollWidth) {
          setAtEnd("right");
          return;
        }
        setAtEnd("");
      }, 1);
    }
  }

  useEffect(() => {
    checkScrollPosition();
    if (currentPage === 5) {
      setHasNextPageState(false);
    }
  }, [pageObjectState]);

  return (
    <div className="overflow-clip">
      <div className="flex py-2 text-4xl gap-2 mb-1.5 text-accent-one ml-8">
        {icon}
        <p className="font-semibold">{title}</p>
      </div>
      <div
        className="overflow-auto mini-carrousel scroll-smooth -ml-16 -mr-19 relative"
        onScrollEnd={checkScrollPosition}
        ref={carrouselRef}
      >
        <div className="flex gap-x-3 w-fit">
          <motion.div
            className="sticky text-accent-one cursor-pointer left-16 top-0 flex items-center bottom-0 h-[318px] hover:bg-linear-to-b hover:from-transparent via-black/50 to-transparent text-6xl z-10"
            animate={
              atEnd === "left"
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 1,
                  }
            }
            onClick={scrollLeft}
          >
            <TbChevronCompactLeft />
          </motion.div>
          {mediaArray.map((media, i) => {
            return (
              <Card
                key={i}
                bgImage={media.coverImage.large}
                title={media.title.english || media.title.romaji}
                color={media.coverImage.color}
                hasDub={Boolean(media.characters.edges[0].voiceActors)}
                id={media.id}
              />
            );
          })}
          {hasNextPageState && (
            <div className="w-[230px] h-75 flex items-center justify-center text-accent-one flex-col">
              <button
                className=" cursor-pointer flex flex-col items-center justify-center"
                onClick={loadMore}
                disabled={loading}
              >
                <LuRefreshCw
                  className={`text-6xl ${loading ? "animate-spin" : ""}`}
                />
                <span>Load More</span>
              </button>
            </div>
          )}
          <motion.div
            className="sticky text-accent-one cursor-pointer right-19 top-0 flex items-center bottom-0 h-[318px] hover:bg-linear-to-b hover:from-transparent via-black/50 to-transparent text-6xl"
            animate={
              atEnd === "right"
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 1,
                  }
            }
            onClick={scrollRight}
          >
            <TbChevronCompactRight />
          </motion.div>
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
