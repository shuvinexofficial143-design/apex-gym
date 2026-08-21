import Image from "next/image";

export function FitnessPhoto({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`fitness-photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 92vw, 46vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
