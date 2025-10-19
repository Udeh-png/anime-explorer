import { ForwardedRef, forwardRef } from "react";
import { FaCheck } from "react-icons/fa";

export const Checkbox = forwardRef(
  (
    {
      round,
      ...props
    }: { round?: boolean } & React.InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className="w-4.5 h-4.5 relative flex justify-center items-center caret-transparent"
        ref={ref}
      >
        <input
          type="checkbox"
          name=""
          className="hidden peer"
          id={props.id || "check"}
          {...props}
        />
        <label
          htmlFor={props.id || "check"}
          className={`absolute w-full h-full top-0 left-0 peer-checked:bg-accent-two peer-checked:border-0 border border-white/50 flex justify-center items-center cursor-[inherit] rounded-${
            round ? "full" : "sm"
          }`}
        ></label>
        {round && (
          <div className="w-2/5 h-2/5 peer-checked:bg-white rounded-full z-10 pointer-events-none absolute top-1/2 left-1/2 -translate-1/2"></div>
        )}
        {!round && (
          <FaCheck className="text-[10px] peer-checked:text-white z-10 pointer-events-none text-transparent" />
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
