import { useState } from "react";

export const usePersistentUrl = (coverImage: {
  extraLarge: string;
  large: string;
  medium: string;
}): [string, () => undefined] => {
  const [urlIndex, setUrlIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const imageUrls = [
    coverImage.extraLarge,
    coverImage.large,
    coverImage.medium,
    "/",
  ];

  return [
    imageUrls[urlIndex],
    function handleError(): undefined {
      setAttempts((prev) => {
        if (prev === 5) {
          setUrlIndex(3);
          return 0;
        }
        return prev + 1;
      });
      setUrlIndex((prev) => {
        if (prev === 2) {
          return 1;
        }
        return prev + 1;
      });
    },
  ];
};
