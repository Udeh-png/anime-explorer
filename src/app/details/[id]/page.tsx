import { getMediaWithId } from "@/queries";

export default async function ({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id);
  const media = await getMediaWithId(id);
  console.log(media);

  return <div></div>;
}
