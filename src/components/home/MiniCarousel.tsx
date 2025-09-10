"use client";

import { Card } from "@/components/shared/Card";
import { getTenTrending, PresetType } from "@/queries";
import { PageObject } from "@/types";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";

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
  }, [currentPage]);

  return (
    <div className="overflow-clip">
      <div className="flex py-2 text-4xl gap-2 mb-1.5 text-accent-one ml-8">
        {icon}
        <p className="font-semibold">{title}</p>
      </div>
      <div
        className="overflow-auto mini-carrousel scroll-smooth -ml-15 -mr-15 relative"
        onScrollEnd={checkScrollPosition}
        ref={carrouselRef}
      >
        <div className="flex gap-x-3 w-fit">
          <motion.div
            className="sticky cursor-pointer left-21 p-3 rounded-full top-1/2 h-fit bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center text-3xl -translate-y-1/2 z-10"
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
            <FaChevronLeft />
          </motion.div>
          {mediaArray.map((media, i) => {
            return <Card media={media} key={i} />;
          })}
          {hasNextPageState && (
            <div className="w-63 h-95 flex items-center justify-center text-accent-one flex-col">
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
            className="sticky cursor-pointer right-21 p-3 rounded-full top-1/2 h-fit bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center text-3xl -translate-y-1/2"
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
            <FaChevronRight />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
