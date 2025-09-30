import { InformationCard } from "@/components/details/InformationCard";
import { ScoresCard } from "@/components/details/ScoresCard";
import { StudiosCard } from "@/components/details/StudiosCard";
import { Media } from "@/types";

export const Specification = ({ media }: { media: Media }) => {
  return (
    <div className="flex flex-col gap-y-5">
      <InformationCard media={media} />
      <StudiosCard media={media} />
      <ScoresCard media={media} />
    </div>
  );
};
