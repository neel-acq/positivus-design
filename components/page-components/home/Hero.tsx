import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="max-w-lg">
        <h1 className="text-6xl font-bold mb-6">
          Navigating the digital landscape for success
        </h1>
        <div className="lg:hidden">
          <Image
            src="/images/Illustration.png"
            alt="AI Insights"
            width={600}
            height={515}
          />
        </div>
        <p className="text-body mb-8">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <div className="flex lg:justify-start justify-center space-x-4">
          <Button variant={"custom_button_black"} className="lg:w-auto w-3/4">
            Book a consultation
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex">
        <Image
          src="/images/Illustration.png"
          alt="AI Insights"
          width={600}
          height={515}
        />
      </div>
    </div>
  );
}
