"use client";

import { HTMLAttributes, useEffect, useRef } from "react";

export const DescriptionUi = ({
  description,
  ...props
}: { description: string } & HTMLAttributes<HTMLParagraphElement>) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (descriptionRef.current) {
      const descriptionContainer = descriptionRef.current;
      descriptionContainer.innerHTML = description;
    }
  }, [description]);

  return (
    <p
      ref={descriptionRef}
      {...props}
      className="md:[display:-webkit-box] max-w-md hidden text-sm text-white/60 font-light line-clamp-4 mb-9 leading-relaxed"
    ></p>
  );
};
