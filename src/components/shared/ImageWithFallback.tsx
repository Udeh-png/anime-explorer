import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { FaTv } from "react-icons/fa";

interface CustomImageProps extends ImageProps {
  alt: string;
}

export const ImageWithFallback = ({ alt, ...props }: CustomImageProps) => {
  const [error, setError] = useState(false);

  return (
    <div>
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center text-5xl text-white/20">
          <FaTv />
        </div>
      ) : (
        <Image
          {...props}
          alt={alt}
          onError={(e) => {
            e.preventDefault();
            setError(true);
          }}
        />
      )}
    </div>
  );
};
