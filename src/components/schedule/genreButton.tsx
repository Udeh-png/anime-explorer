"use client";

import { ForwardedRef, forwardRef } from "react";

export const GenreButton = forwardRef(
  (
    {
      title,
      ...props
    }: {
      title: string;
    } & React.InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref}>
        <input
          type="checkbox"
          name=""
          className="peer hidden"
          id={props.id || "check"}
          {...props}
        />
        <label
          htmlFor={props.id || "check"}
          className={`bg-card-background-two rounded-lg relative overflow-clip px-4 py-1.5 block cursor-pointer peer-checked:bg-accent-two`}
        >
          {title}
        </label>
      </div>
    );
  }
);

GenreButton.displayName = "GenreButton";
