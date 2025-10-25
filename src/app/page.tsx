import { getPageObject } from "@/queries";
import { Hero } from "@/sections/home/Hero";
import { getCurrentSeason } from "@/utils/sharedUtils";

export default async function Home() {
  const pageObjs = await getPageObject({
    customFilter: { status: "RELEASING", season: getCurrentSeason() },
    customSort: ["POPULARITY_DESC"],
    perPage: 5,
  });
  return (
    <div>
      <Hero pageObjs={pageObjs} />
    </div>
  );
}
