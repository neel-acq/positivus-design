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
    <div className="relative overflow-hidden">
      <div className="flex gap-20 animate-logo-scroll">
        {logos.map((logo, index) => {
          return (
            <div
              key={index}
              className="flex-shrink-0 w-28 sm:w-32 h-14 sm:h-16 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={128}
                height={48}
                className="object-contain grayscale brightness-0 opacity-70 hover:opacity-100 transition"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
