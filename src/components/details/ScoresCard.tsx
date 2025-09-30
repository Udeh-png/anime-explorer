import { FaStar } from "react-icons/fa";
import { SpecificationCard } from "./SpecificationCard";
import { Media } from "@/types";

export const ScoresCard = ({ media }: { media: Media }) => {
  const { averageScore, popularity, favoriteCount, watchListCount } = media;
  return (
    <SpecificationCard>
      <p className="mb-4 min-[600px]:text-lg font-semibold">Scores</p>

      <div className="flex flex-col gap-y-3 min-[600px]:text-base text-xs">
        <div className="flex justify-between">
          <p className="text-white/50">Average</p>
          <p className="flex items-center gap-x-2">
            <FaStar className="text-yellow-400" />
            <span>{(averageScore / 10).toFixed(1)}</span>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-white/50">Popularity</p>
          <p>#{popularity.toLocaleString("US-en")}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-white/50">Favorites</p>
          <p>{favoriteCount || "Working on it"}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-white/50">WatchList</p>
          <p>{watchListCount || "Working on it"}</p>
        </div>
      </div>
    </SpecificationCard>
  );
};
