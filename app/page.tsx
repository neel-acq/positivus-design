import Hero from "@/components/page-components/home/Hero";
import LogoCarousel from "@/components/page-components/logo-carousel/LogoCarousel";

export default function Home() {
  return (
    <div>
      <div className="mt-17.5">
        <Hero />
      </div>
      <div className="mt-17.5">
        <LogoCarousel />
      </div>
    </div>
  );
}
