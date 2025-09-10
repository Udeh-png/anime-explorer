import { getTenTrending } from "@/queries";
import { Hero } from "@/sections/home/Hero";
import { MiniCarousel } from "@/components/home/MiniCarousel";
import { PageObject } from "@/types";
import { FaFire } from "react-icons/fa";

export default async function Home() {
  let trendingPageObject: PageObject = await getTenTrending({
    type: "trending",
  });
  // let classicsPageObject: PageObject = await getTenTrending({});

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

      <div className="mt-15">
        {/* <MiniCarousel
          pageObject={classicsPageObject}
          type="classics"
          title="Classics"
          icon={<FaDiamond />}
        /> */}
      </div>
    </div>
  );
}
