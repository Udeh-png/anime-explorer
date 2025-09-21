import { useState } from "react";

export const usePersistentUrl = (
  imageUrls: string[],
  fallback: string
): [string, () => void] => {
  const [attempts, setAttempts] = useState(0);

  const attemptLimit = imageUrls.length * 2;
  const index = attempts % imageUrls.length;
  const imageSrc = attempts < attemptLimit ? imageUrls[index] : fallback;

  return [
    imageSrc,
    function handleError(): void {
      if (attempts < attemptLimit) {
        setAttempts((prev) => prev + 1);
      }
    },
  ];
};
