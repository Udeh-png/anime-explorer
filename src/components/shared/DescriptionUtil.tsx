"use client";

import { useEffect, useRef } from "react";

export const DescriptionUi = ({ description }: { description: string }) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (descriptionRef.current) {
      const descriptionContainer = descriptionRef.current;
      descriptionContainer.innerHTML = description;
    }
  }, []);

  return (
    <p
      ref={descriptionRef}
      className="mb-5 min-[600px]:text-sm text-[10px]"
    ></p>
  );
};
