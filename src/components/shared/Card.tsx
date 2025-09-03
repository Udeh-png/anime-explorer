"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export const Card = ({ favorites }: { favorites?: any[] }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-70 h-100 bg-no-repeat bg-center bg-[url(https://picsum.photos/id/1/500/600)] transition-all bg-[120%,120%] hover:bg-[130%,130%]  relative rounded-2xl duration-300 cursor-pointer">
      <div className="flex justify-between px-4 items-center absolute bottom-10 w-full">
        <div className="">
          <p className="text-xl">Anime Name</p>
          <p className="text-xs text-[rgba(255,255,255,0.8)]">Sub | dub</p>
        </div>
        <div
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          {clicked ? (
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: { duration: 0.4, type: "spring" },
              }}
            >
              <FaBookmark className="text-3xl text-accent-white" />
            </motion.div>
          ) : (
            <motion.p
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: { duration: 0.4, type: "spring" },
              }}
            >
              <FaRegBookmark className="text-3xl text-accent-white" />
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};
