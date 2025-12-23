import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <ImSpinner9 className="absolute top-1/2 left-1/2 -translate-1/2 text-5xl animate-spin text-accent-one" />
      <div className="h-full lg:pl-15 lg:pt-17 3md:pl-10 3md:pt-30 space-y-20">
        <div className="space-y-15">
          <div className="3md:space-y-5 space-y-3.5">
            <div className="bg-white/5 w-100 h-18" />
            <div className="bg-white/5 w-50 h-2.5" />
            <div className="space-y-2.5">
              <div className="bg-white/5 w-90 h-2.5" />
              <div className="bg-white/5 w-90 h-2.5" />
              <div className="bg-white/5 w-90 h-2.5" />
              <div className="bg-white/5 w-90 h-2.5" />
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="bg-white/5 w-60 h-11 rounded" />
            <div className="bg-white/5 size-11 rounded" />
            <div className="bg-white/5 size-11 rounded" />
          </div>

          <div className="flex gap-x-3">
            <div className="w-12 h-2 bg-white/5 rounded-full" />
            <div className="w-6 h-2 bg-white/5 rounded-full" />
            <div className="w-6 h-2 bg-white/5 rounded-full" />
          </div>
        </div>

        <div>
          <div className="space-y-3">
            <div className="w-90 h-8.5 bg-white/5" />
            <div className="w-45 h-4.5 bg-white/5" />
          </div>
          <div className="flex justify- gap-x-7 mt-5">
            <div className="bg-white/5 min-w-57 h-100" />
            <div className="bg-white/5 min-w-57 h-100" />
            <div className="bg-white/5 min-w-57 h-100" />
            <div className="bg-white/5 min-w-57 h-100" />
            <div className="bg-white/5 min-w-57 h-100" />
            <div className="bg-white/5 min-w-57 h-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
