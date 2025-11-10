import Image from "next/image";
import Link from "next/link";
import {
  FaPlay,
  FaRegBookmark,
  FaRegDotCircle,
  FaRegHeart,
} from "react-icons/fa";

export const HeroSliderContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="md:pt-15 md:pl-15 h-full flex md:items-stretch items-end md:justify-start justify-center pb-10 relative">
      <Image src={"/"} alt="" fill sizes="" />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="flex flex-col md:items-start items-center relative">
        <p className="font-bold md:text-7xl text-3xl mb-2 md:line-clamp-1 line-clamp-2 md:leading-23 text-center md:text-left">
          {title}
        </p>
        <div className="text-xs text-white/60 font-light flex gap-x-2 items-center mb-3">
          <span>Sub | Dub</span>
          <FaRegDotCircle className="text-[8px]" />
          <span className="italic">Action, Fantasy, Shonen</span>
        </div>
        <p className="md:[display:-webkit-box] max-w-md hidden text-sm text-white/60 font-light line-clamp-4 mb-9 leading-relaxed">
          {description}
        </p>

        <div className="flex gap-x-2.5">
          <Link
            href={"/"}
            className="flex items-center text-sm gap-x-2 px-4 bg-blue-500 uppercase"
          >
            <FaPlay className="" />
            Start Watching EP 1
          </Link>
          <div className="grid grid-cols-2 gap-x-2.5 w-23 h-10 text-xl">
            <button className="border-2 border-blue-500 text-blue-500 flex justify-center items-center cursor-pointer">
              <FaRegBookmark />
            </button>
            <button className="border-2 border-blue-500 text-blue-500 flex justify-center items-center cursor-pointer">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
