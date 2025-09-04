import { Card } from "@/components/shared/Card";
import { FaFire } from "react-icons/fa";

export const TrendingNow = () => {
  const imgUrl = "https://picsum.photos/id/1/200/300";

  return (
    <div className="px-12 mt-8">
      <div className="flex py-2 text-4xl gap-2 mb-1.5 text-accent-one">
        <FaFire
          style={{
            backgroundClip: "text",
          }}
        />
        <p className="font-semibold">Trending Now</p>
      </div>
      <div className="flex gap-5">
        <Card />
      </div>
    </div>
  );
};

{
  /* <div
  className="grid grid-rows-[8fr_1fr] gap-y-4 relative rounded-2xl p-4 w-70 h-100"
  style={{
    background: `url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="absolute overflow-clip top-0 left-0 w-full h-full backdrop-blur-sm rounded-2xl"></div>
  <div className="relative rounded-2xl overflow-clip">
    <Image src={imgUrl} fill alt="img" className="object-fill" />
  </div>
  <div className="z-10">
    <p>Anime Name</p>
  </div>

  <div className="text-3xl absolute bg-gradient-to-br p-2 rounded-full right-5 top-5">
    <IoBookmark className="" />
  </div>
</div>; */
}
