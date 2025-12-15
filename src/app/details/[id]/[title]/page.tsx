import { getMediaWithId } from "@/queries";

export default async function Details({
  params,
}: {
  params: Promise<{ id: string; title: string }>;
}) {
  const { id, title } = await params;
  const media = await getMediaWithId(Number(id));

  return (
    <div>
      <div className="flex items-center justify-center h-screen text-8xl text-center font-blanka">
        <p className="w-1/2">This is the Motherfucking details page gang</p>
      </div>
    </div>
  );
}
