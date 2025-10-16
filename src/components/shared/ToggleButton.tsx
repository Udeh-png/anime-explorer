import { forwardRef } from "react";

export const ToggleButton = forwardRef<
  HTMLInputElement,
  { handleToggle?: (e: React.ChangeEvent<HTMLInputElement>) => void }
>(({ handleToggle }, ref) => {
  return (
    <label className="w-8 h-5 sm:w-10 sm:h-6 md:w-11 md:h-6 inline-block cursor-pointer rounded-full relative caret-transparent overflow-clip">
      <input
        type="checkbox"
        className="w-0 h-0 opacity-0 peer"
        ref={ref}
        onChange={handleToggle}
      />
      <div
        className="bg-white/50 absolute inset-0 peer-checked:bg-accent-two duration-300 
    before:content-[''] 
    before:w-3 before:h-3 
    sm:before:w-3.5 sm:before:h-3.5 
    md:before:w-4 md:before:h-4 
    before:absolute before:left-[2px] 
    sm:before:left-[3px] 
    md:before:left-[3px] 
    before:rounded-full before:bottom-1/2 before:translate-y-1/2 
    peer-checked:before:translate-x-[16px] 
    sm:peer-checked:before:translate-x-[20px] 
    md:peer-checked:before:translate-x-[22px] 
    before:bg-white before:duration-300"
      />
    </label>
  );
});

ToggleButton.displayName = "ToggleButton";
