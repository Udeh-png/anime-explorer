import { getMediaWithId } from "@/queries";
import { Episodes } from "@/sections/details/Episodes";
import { DetailsHero } from "@/sections/details/Hero";
import { TabInterface } from "@/sections/details/TabInterface";
import { Specification } from "@/sections/details/Specifications";

export default async function DetailsPage({
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

      <div className="min-[600px]:mt-10 mt-2 px-5 gap-y-5 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-10">
        <TabInterface media={media} />
        <div className="min-[600px]:hidden block">
          <Episodes media={media} />
        </div>
        <Specification media={media} />
      </div>

      <div className="min-[600px]:block hidden mt-2 pl-1">
        <Episodes media={media} />
      </div>
    </div>
  );
}
