import CaseStudies from "@/components/page-components/home/CaseStudies";
import Hero from "@/components/page-components/home/Hero";
import LogoCarousel from "@/components/page-components/home/LogoCarousel";
import Proposal from "@/components/page-components/home/Proposal";

export default function Home() {
  return (
    <div>
      <div className="mt-17.5">
        <Hero />
      </div>
      <div className="mt-17.5">
        <LogoCarousel />
      </div>
      <div className="mt-17.5">
        <Proposal />
      </div>
      <div className="mt-35">
        <CaseStudies />
      </div>
    </div>
  );
}
