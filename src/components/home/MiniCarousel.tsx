"use client";

import { Card } from "@/components/shared/Card";
import { getPageObject, PresetType } from "@/queries";
import { PageObject } from "@/types";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";

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
    //TODO: Work on how far the buttons scroll on mobile
    if (carrouselRef.current) {
      const carrousel = carrouselRef.current;
      carrousel.scrollLeft += 500;
    }
  }

  function scrollLeft() {
    //TODO: Work on how far the buttons scroll on mobile
    if (carrouselRef.current) {
      const carrousel = carrouselRef.current;
      carrousel.scrollLeft -= 500;
    }
  }

  async function loadMore() {
    if (hasNextPageState) {
      setLoading(true);
      const newPageObject = await getPageObject({
        pageNo: currentPage + 1,
        type: type,
      });
      setLoading(false);
      setPageObjectState(newPageObject);
      setMediaArray((prev) => [...prev, ...newPageObject.media]);
    }
  }

  function checkScrollPosition() {
    const carrousel = carrouselRef.current;
    const scrollLeft = carrousel?.scrollLeft;
    if (scrollLeft! <= 0) {
      setAtEnd("left");
      return;
    }
    if (scrollLeft! + carrousel?.clientWidth! === carrousel?.scrollWidth) {
      setAtEnd("right");
      if (!loading) {
        loadMore();
        setTimeout(() => {
          carrousel.scrollLeft += 100;
        }, 1);
      }
      return;
    }

    setAtEnd("");
  }

  useEffect(() => {
    checkScrollPosition();
    if (currentPage === 5) {
      setHasNextPageState(false);
    }
  }, [currentPage]);

  return (
    <div className="overflow-clip">
      <div className="flex text-2xl md:text-2xl lg:text-4xl gap-2 mb-1.5 text-accent-one ml-2 md:ml-5 ld:ml-8 items-center">
        {icon}
        <p className="font-semibold">{title}</p>
      </div>
      <div
        className="overflow-auto mini-carrousel scroll-smooth -ml-9 -mr-9 md:-ml-15 md:-mr-15 relative"
        onScroll={checkScrollPosition}
        ref={carrouselRef}
      >
        <div className="flex gap-x-3 w-fit">
          <motion.div
            className={`sticky cursor-pointer left-15 md:left-21 w-[25px] h-[25px] md:w-[55px] md:h-[55px] duration-200 rounded-full top-1/2 bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center text-sm md:text-3xl -translate-y-1/2 z-10 ${
              atEnd === "left" ? "opacity-0" : "opacity-100"
            }`}
            onClick={scrollLeft}
          >
            <FaChevronLeft />
          </motion.div>
          {mediaArray.map((media, i) => {
            return <Card media={media} key={i} />;
          })}

          {hasNextPageState && loading && (
            <div className="text-4xl flex items-center justify-center w-20">
              <ImSpinner9 className="animate-spin text-accent-one" />
            </div>
          )}
          <motion.div
            className={`sticky cursor-pointer right-15 md:right-21 w-[25px] h-[25px] md:w-[55px] md:h-[55px] duration-200 rounded-full top-1/2 bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center text-sm md:text-3xl -translate-y-1/2 ${
              atEnd === "right" ? "opacity-0" : "opacity-100"
            }`}
            transition={{
              duration: 0.1,
            }}
            onClick={scrollRight}
          >
            <FaChevronRight />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
