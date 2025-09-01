export default function Home() {
  return (
    <div className="pt-[clamp(100px,8.5vw,122px)] flex items-center">
      <div className="mx-auto w-fit">
        <p className="text-[clamp(32px,5vw,60px)] font-bold text-center text-accent-one mb-[clamp(7px,0.8vw,10px)]">
          Discover Your Next <br /> Favorite Anime
        </p>

        <p className="mb-3 text-center text-[clamp(10px,1.3vw,16px)]">
          Explore trending anime and save your favorites to watch later
        </p>

        <div className="flex justify-center">
          <button className="h-[clamp(35px,4vw,52px)] w-[clamp(150px,15vw,200px)] md:text-xl rounded-full md:rounded-xl bg-accent-two shadow-ve">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
