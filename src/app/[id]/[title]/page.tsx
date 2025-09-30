import { getMediaWithId } from "@/queries";
import { Episodes } from "@/sections/details/Episodes";
import { DetailsHero } from "@/sections/details/Hero";
import { SpecificationCard } from "@/sections/details/SpecificationCard";
import { TabInterface } from "@/sections/details/TabInterface";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const InformationCard = () => {
  return (
    <SpecificationCard>
      <p className="mb-4 text-lg font-semibold">Information</p>
      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between">
          <p className="text-white/50">Episodes</p>
          <p>24</p>
        </div>
        {
          //TODO: Make related display grid
        }
        <div className="flex justify-between">
          <p className="text-white/50">Duration</p>
          <p>24 mins</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50">Status</p>
          <p className="text-green-500">FINISHED</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50">Season</p>
          <p>Spring 2013</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50">Format</p>
          <p>TV</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50">Source</p>
          <p>MANGA</p>
        </div>
      </div>
    </SpecificationCard>
  );
};

const StudiosCard = () => {
  return (
    <SpecificationCard>
      <p className="mb-4 text-lg font-semibold">Studios</p>

      <div className="flex flex-col gap-y-3 text-blue-600">
        <Link href={"/"} className="hover:underline">
          Pierrot
        </Link>
        <Link href={"/"} className="hover:underline">
          WIT Studio
        </Link>
      </div>
    </SpecificationCard>
  );
};

const ScoresCard = () => {
  return (
    <SpecificationCard>
      <p className="mb-4 text-lg font-semibold">Scores</p>

      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between">
          <p className="text-white/50">Average</p>
          <p className="flex items-center gap-x-2">
            <FaStar className="text-yellow-400" />
            <span>8.5</span>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-white/50">Popularity</p>
          <p>#647,019</p>
        </div>

        <div className="flex justify-between">
          <p className="text-white/50">Duration</p>
          <p>24 mins</p>
        </div>

        <div className="flex justify-between">
          <p className="text-white/50">Duration</p>
          <p>24 mins</p>
        </div>
      </div>
    </SpecificationCard>
  );
};

export default async function ({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id);
  const media = await getMediaWithId(id);

  return (
    <div className="">
      <div className="h-70 min-[600px]:h-120 min-[790px]:h-105">
        <DetailsHero media={media} />
      </div>

      <div className="min-[600px]:mt-10 mt-2 px-5 gap-y-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-10">
        <TabInterface media={media} />

        <div className="flex flex-col gap-y-5">
          <InformationCard />
          <StudiosCard />
          <ScoresCard />
        </div>
      </div>

      <div className="min-[600px]:mt-7 mt-2 pl-1">
        <Episodes media={media} />
      </div>
    </div>
  );
}
