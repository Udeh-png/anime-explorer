import Link from "next/link";
import { SpecificationCard } from "./SpecificationCard";
import { Media } from "@/types";

export const StudiosCard = ({ media }: { media: Media }) => {
  const { studios } = media;
  const studioNodes = studios.nodes;
  return (
    <SpecificationCard>
      <p className="mb-4 min-[600px]:text-lg font-semibold">Studios</p>

      <div className="grid grid-cols-1 gap-y-3 text-blue-600 min-[600px]:text-base text-xs">
        {studioNodes.map((studio, i) => (
          <Link
            href={studio.siteUrl}
            target="_blank"
            className="hover:underline"
            key={i}
          >
            {studio.name}
          </Link>
        ))}
      </div>
    </SpecificationCard>
  );
};
