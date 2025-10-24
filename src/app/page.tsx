import { getMediaWithId } from "@/queries";
import { Hero } from "@/sections/home/Hero";

export default async function Home() {
  const media = await getMediaWithId(1);
  return (
    <div className="">
      <Hero media={media} />
    </div>
  );
}
