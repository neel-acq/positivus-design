import Image from "next/image";

export default function LogoCarousel() {
  const logos = [
    "/images/Company-Logos/amazon.png",
    "/images/Company-Logos/dribbble.png",
    "/images/Company-Logos/hubspot.png",
    "/images/Company-Logos/notion.png",
    "/images/Company-Logos/netflix.png",
    "/images/Company-Logos/zoom.png",
  ];

  return (
      <div className="flex items-center justify-between gap-8 ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-h-full max-w-full object-contain grayscale brightness-0 opacity-70 hover:opacity-100 transition"
              height={48}
              width={128}
            />
          </div>
        ))}
      </div>
  );
}
