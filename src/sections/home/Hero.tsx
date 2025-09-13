"use client";

import { motion } from "motion/react";

//Todo: make that moving circle stuff smaller and static on mobile
export const Hero = () => {
  return (
    <div className="relative pt-[clamp(100px,8.5vw,122px)] flex items-center overflow-x-clip">
      <motion.div
        className="absolute -top-70 right-130 w-200 h-200 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,0,0,0.15) 40%, transparent 70%)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          x: [0, 600, null, 0],
          y: [0, 200, 200, 0],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          times: [0, 0.5, 0.5, 1],
        }}
      ></motion.div>
      <div className="mx-auto w-fit">
        <p className="text-[clamp(32px,5vw,60px)] font-bold text-center text-accent-one mb-[clamp(7px,0.8vw,10px)]">
          Discover Your Next <br /> Favorite Anime
        </p>

        <p className="mb-3 text-center text-[clamp(10px,1.3vw,16px)]">
          Explore trending anime and save your favorites to watch later
        </p>

        <div className="flex justify-center">
          <button className="h-[clamp(35px,4vw,52px)] w-[clamp(150px,15vw,200px)] md:text-xl rounded-full md:rounded-xl bg-accent-two button-shadow">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};
