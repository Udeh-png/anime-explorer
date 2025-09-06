// "use client";

// import { useState } from "react";
// import { motion } from "motion/react";
import Image from "next/image";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
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
  // const [clicked, setClicked] = useState(false);
  // console.log(bgImage);

  return (
    <div className="w-[230px] h-95 grid grid-rows-[5fr_1fr]">
      <div className="relative">
        <Image src={bgImage} fill alt="" className=""></Image>
      </div>
      <div className={`flex flex-col justify-center`}>
        <div className="grid grid-cols-[5fr_1fr]">
          <p className="whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </p>
          <div className="flex justify-end">
            <MdFavoriteBorder className="text-2xl" />
          </div>
        </div>
        <p className="text-xs">Sub | Dub</p>
      </div>
    </div>
  );
};
