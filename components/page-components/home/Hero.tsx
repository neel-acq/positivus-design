import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="max-w-lg">
        <h1 className="text-6xl font-bold mb-6">
          Navigating the digital landscape for success
        </h1>
        <p className="text-body mb-8">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <div className="flex space-x-4">
          <Button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Book a consultation
          </Button>
        </div>
      </div>
      <div>
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
