import { getMediaWithId } from "@/queries";
import { Episodes } from "@/sections/details/Episodes";
import { DetailsHero } from "@/sections/details/Hero";
import { TabInterface } from "@/sections/details/TabInterface";

export default async function ({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id);
  const media = await getMediaWithId(id);

  return (
    <div className="pb-1000">
      <div className="h-70 min-[600px]:h-120 min-[790px]:h-130">
        <DetailsHero media={media} />
      </div>

      <div className="min-[600px]:mt-7 min-[600]:pl-10 mt-2 pl-1">
        <TabInterface media={media} />
      </div>

      <div className="min-[600px]:mt-7 min-[600]:pl-10 mt-2 pl-1">
        <Episodes media={media} />
      </div>
    </div>
  );
}
