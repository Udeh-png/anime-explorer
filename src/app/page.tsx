import { getPageObject } from "@/queries";
import { Hero } from "@/sections/home/Hero";

export default async function Home() {
  const peakTrendingAnime = await getPageObject({
    customSort: ["TRENDING_DESC", "POPULARITY_DESC"],
    perPage: 6,
  });

  return (
    <div>
      <div>
        <Hero peakTrendingAnime={peakTrendingAnime} />
      </div>
    </div>
  );
}
