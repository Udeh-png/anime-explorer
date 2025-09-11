import { getTenTrending } from "@/queries";
import { Hero } from "@/sections/home/Hero";
import { MiniCarousel } from "@/components/home/MiniCarousel";
import { PageObject } from "@/types";
import { FaFire, FaMedal } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";

export default async function Home() {
  const trendingPageObj: Promise<PageObject> = getTenTrending({
    type: "trending",
  });

  const airingPageObj: Promise<PageObject> = getTenTrending({
    type: "airing",
  });

  const classicsPageObj: Promise<PageObject> = getTenTrending({
    type: "classics",
  });

  const topFiftyPageObj: Promise<PageObject> = getTenTrending({
    type: "top_fifty",
  });

  const [
    trendingPageObject,
    airingPageObject,
    classicsPageObject,
    topFiftyPageObject,
  ] = await Promise.all([
    trendingPageObj,
    airingPageObj,
    classicsPageObj,
    topFiftyPageObj,
  ]);

  return (
    <div>
      <Hero />
      <div className="mt-8">
        <MiniCarousel
          pageObject={trendingPageObject}
          type="trending"
          title="Trending Now"
          icon={<FaFire />}
        />
      </div>

      <div className="mt-8">
        <MiniCarousel
          pageObject={airingPageObject}
          type="airing"
          title="Top Airing"
          icon={<MdEventAvailable />}
        />
      </div>

      <div className="mt-15">
        <MiniCarousel
          pageObject={classicsPageObject}
          type="classics"
          title="Classics"
          icon={<FaDiamond />}
        />
      </div>

      <div className="mt-15">
        <MiniCarousel
          pageObject={topFiftyPageObject}
          type="top_fifty"
          title="Top 50"
          icon={<FaMedal />}
        />
      </div>
    </div>
  );
}
