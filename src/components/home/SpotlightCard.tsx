import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { DescriptionUi } from "../shared/DescriptionUtil";

const Background = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative aspect-[3/1] bg-[rgb(24,24,24)]">
      <div className="absolute inset-0 flex gap-x-15"></div>
      <div className="absolute inset-0 backdrop-blur-2xl"></div>
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
};

export const SpotlightCard = () => {
  return (
    <Background>
      <div className="grid grid-cols-[2fr_1fr] h-full">
        <div className="lg:pl-15 2md:pl-10 md:pl-3 pl-2 lg:py-7 2md:py-5 md:py-2.5 py-1.5 flex-2">
          <div className="flex flex-col justify-between h-full w-3/4">
            <div className="">
              <div className="flex 2md:gap-x-2 gap-x-1 2md:text-sm text-xs text-white/50 2md:mb-2">
                <p className="">Winter 2025</p>
                &middot;
                <p>TV</p>
                &middot;
                <p className="flex 2md:gap-x-1 gap-x-0.5 items-center">
                  4.4 <FaStar className="text-yellow-500" />
                </p>
              </div>
              <h3 className="lg:text-4xl 2md:text-3xl font-semibold line-clamp-2 lg:mb-3 2md:mb-2">
                The Apothecary Diaries Season 2
              </h3>

              <DescriptionUi
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis ipsa dignissimos autem blanditiis aliquid molestiae
                voluptate sit voluptatem debitis facilis dolores architecto
                omnis, repellat ad labore libero iure nostrum deleniti!"
              />
            </div>

            <div className="2md:space-y-4 2md:mt-0 mt-2 space-y-1">
              <button className="lg:w-53 lg:h-10 2md:h-7 2md:w-50 w-40 h-6 bg-accent-one rounded-full lg:text-lg 2md:text-base text-sm font-semibold">
                Watch Now On Hulu
              </button>
              <div>
                <span className="2md:text-sm text-xs px-2 py-0.5 bg-white/20 rounded-full">
                  Drama
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-500 [clip-path:polygon(5%_0,100%_0,100%_100%,0_100%)]"></div>
      </div>
    </Background>
  );
};
