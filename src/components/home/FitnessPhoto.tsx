import Image from "next/image";

export function FitnessPhoto({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 640px) calc(100vw - 28px), (max-width: 980px) 92vw, 50vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`fitness-photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
