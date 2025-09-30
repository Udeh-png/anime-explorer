import { Media } from "@/types";
import { SpecificationCard } from "./SpecificationCard";

export const InformationCard = ({ media }: { media: Media }) => {
  const {
    episodes,
    nextAiringEpisode,
    duration,
    status,
    format,
    source,
    seasonYear,
    season,
  } = media;
  return (
    <SpecificationCard>
      <p className="mb-4 min-[600]:text-lg font-semibold">Information</p>
      <div className="flex flex-col gap-y-3 min-[600px]:text-base text-xs">
        <div className="flex justify-between">
          <p className="text-white/50">Episodes</p>
          <p>{episodes || nextAiringEpisode.episode - 1}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50">Duration</p>
          <p>{duration} mins</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50">Status</p>
          <p className="text-green-500">{status}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50">Season</p>
          <p>
            {season} {seasonYear}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50">Format</p>
          <p>{format}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50">Source</p>
          <p>{source}</p>
        </div>
      </div>
    </SpecificationCard>
  );
};
