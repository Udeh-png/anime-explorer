export default function Home() {
  return (
    <div className="h-90 flex items-center">
      <div className="mx-auto w-fit">
        <p className="text-6xl font-bold text-center text-accent-one leading-15 mb-3">
          Discover Your Next <br /> Favorite Anime
        </p>

        <p className="mb-7 text-center">
          Explore trending anime and save your favorites to watch later
        </p>

        <div className="flex justify-center">
          <button className="py-3 px-8 text-xl rounded-xl bg-accent-two shadow-ve">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
