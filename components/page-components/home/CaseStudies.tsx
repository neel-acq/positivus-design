import { Card } from "@/components/ui/card";
import GreenArrow from "@/components/ui/green-arrow";
import VerticalLine from "@/components/ui/vertical-line";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <div>
      <div className="flex items-center gap-10 mb-20">
        <h2 className="bg-[#B9FF66] font-bold p-2 text-2xl">Case Studies</h2>
        <p className="w-130">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <Card className="bg-black pt-17.5 pb-17.5 pl-15 pr-15">
        <div className="flex">
          <div className="w-auto">
            <p className="text-white">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div className="flex gap-4 mt-5">
              <Link href={"#"} className="text-[#B9FF66]">
                Learn more
              </Link>
              <GreenArrow />
            </div>
          </div>
          <div className="ml-16 mr-16">
            <VerticalLine />
          </div>
          <div className="w-auto">
            <p className="text-white">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <div className="flex gap-4 mt-5">
              <Link href={"#"} className="text-[#B9FF66]">
                Learn more
              </Link>
              <GreenArrow />
            </div>
          </div>
          <div className="ml-16 mr-16">
            <VerticalLine />
          </div>
          <div className="w-auto">
            <p className="text-white">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <div className="flex gap-4 mt-5">
              <Link href={"#"} className="text-[#B9FF66]">
                Learn more
              </Link>
              <GreenArrow />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
