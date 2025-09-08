"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";

export const Card = ({
  title,
  hasDub,
  bgImage,
  color,
}: {
  title?: string;
  hasDub?: boolean;
  bgImage: string;
  color: string;
}) => {
  const [clicked, setClicked] = useState(false);
  const slideContainerRef = useRef<HTMLParagraphElement>(null);
  const slideRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (slideContainerRef.current) {
      const slideContainer = slideContainerRef.current;
      const hiddenPart =
        slideContainer.scrollWidth - slideContainer.clientWidth;
      if (hiddenPart > 0) {
        slideContainer.style.setProperty("--text-slide-duration", "10s");
      }

      console.log(hiddenPart, title);
    }
  }, []);

  return (
    <div className="w-[230px] h-95 grid grid-rows-[5fr_1fr]">
      <div className="relative">
        <Image src={bgImage} fill alt="" className=""></Image>
      </div>
      <div className={`flex flex-col justify-center`}>
        <div className="grid grid-cols-[5fr_1fr]">
          <p
            className="relative overflow-hidden text-sm font-semibold"
            ref={slideContainerRef}
          >
            <span
              className="whitespace-nowrap animated-text absolute left-0 top-0 text-ellipsis"
              ref={slideRef}
            >
              {title}
            </span>
          </p>
          <div className="flex justify-end">
            <MdFavoriteBorder className="text-2xl" />
          </div>
        </div>
        <p className="text-[10px] text-white/80">
          {hasDub ? "Sub | Dub" : "Sub only"}
        </p>
      </div>
    </div>
  );
};
