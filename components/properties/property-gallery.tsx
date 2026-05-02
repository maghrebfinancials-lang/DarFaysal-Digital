import Image from "next/image";

export function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
      <div className="relative min-h-[320px] overflow-hidden rounded-[28px]">
        <Image src={images[0]} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 65vw" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
        {images.slice(1, 3).map((image, index) => (
          <div key={image} className="relative min-h-[152px] overflow-hidden rounded-[24px]">
            <Image
              src={image}
              alt={`${title} interior view ${index + 2}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
