import { getMediaWithId } from "@/queries";
import { DetailsHero } from "@/sections/details/Hero";

export default async function ({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id);
  const media = await getMediaWithId(id);

  return (
    <div className="">
      <DetailsHero media={media} />
    </div>
  );
}
