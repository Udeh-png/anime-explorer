import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { FavoriteButton, LikeButton } from "./ActionButtons";

export const Card = () => {
  return (
    <div className="min-w-55 h-92 md:px-3">
      <div className="relative min-h-[85%] mb-2 flex items-end justify-end">
        <div className="absolute inset-0 bg-red-600" />
        <div className="relative flex gap-x-2.5 px-1 pb-1">
          <FavoriteButton rounded />
          <LikeButton rounded />
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <p className="font-semibold line-clamp-3">Demon Slayer Season 5</p>
        <div className="flex justify-between text-white/50 font-light">
          <p>Subtitle</p>
          <div className="flex items-center gap-x-1">
            <p>4.5</p>
            <p className="text-yellow-500">
              <BiStar />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
