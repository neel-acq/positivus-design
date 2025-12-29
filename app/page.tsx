import CaseStudies from "@/components/page-components/home/CaseStudies";
import ContactUs from "@/components/page-components/home/ContactUs";
import Hero from "@/components/page-components/home/Hero";
import LogoCarousel from "@/components/page-components/home/LogoCarousel";
import OurWorkingProcess from "@/components/page-components/home/OurWorkingProcess";
import Proposal from "@/components/page-components/home/Proposal";
import Services from "@/components/page-components/home/Services";
import Team from "@/components/page-components/home/Team";
import Testimonials from "@/components/page-components/home/Testimonials";

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
      <div className="mt-17.5" id="Services">
        <Services />
      </div>
      <div className="mt-35">
        <CaseStudies />
      </div>
      <div className="mt-35">
        <OurWorkingProcess />
      </div>
      <div className="mt-35">
        <Team />
      </div>
      <div className="mt-35">
        <Testimonials />
      </div>
      <div className="mt-35">
        <ContactUs />
      </div>
    </div>
  );
}
