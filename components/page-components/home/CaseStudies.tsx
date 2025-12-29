"use client";
import { ArrowLeft } from "@/components/ui/arrow-left";
import { ArrowRight } from "@/components/ui/arrow-right";
import { Card } from "@/components/ui/card";
import GreenArrow from "@/components/ui/green-arrow";
import { GreenVector } from "@/components/ui/green-vector";
import VerticalLine from "@/components/ui/vertical-line";
import { WhiteVector } from "@/components/ui/white-vector";
import Link from "next/link";
import { useState } from "react";

type CASE_STUDIE_ITEMS = {
  content: string;
};

export default function CaseStudies() {
  const CASE_STUDIE_ITEMS: CASE_STUDIE_ITEMS[] = [
    {
      content: `For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.`,
    },
    {
      content: `For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.`,
    },
    {
      content: `For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.`,
    },
  ];
  const [index, setIndex] = useState(1);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? CASE_STUDIE_ITEMS.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === CASE_STUDIE_ITEMS.length - 1 ? 0 : prev + 1));

  const current = (index: number) => {
    setIndex(index);
  };
  return (
    <div>
      <div className="flex items-center gap-10 mb-20">
        <h2 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl">
          Case Studies
        </h2>
        <p className="w-130">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <Card className="bg-black pt-17.5 pb-17.5 pl-15 pr-15">
        <div className="flex overflow-hidden">
          {CASE_STUDIE_ITEMS.map((item, index) => (
            <div key={index} className="flex">
              <div className="w-auto lg:w-auto md:w-150">
                <p className="text-white">{item?.content}</p>
                <div className="flex gap-4 mt-5">
                  <Link href={"#"} className="text-[#B9FF66]">
                    Learn more
                  </Link>
                  <GreenArrow />
                </div>
              </div>
              {index + 1 != CASE_STUDIE_ITEMS.length && (
                <div className="ml-16 mr-16">
                  <VerticalLine />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="block sm:hidden">
          <div className="flex justify-between ml-[30%] mr-[30%] lg:ml-[30%] lg:mr-[30%] md:ml-[10%] md:mr-[40%] sm:ml-[10%] sm:mr-[10%] items-center gap-10 mt-15">
            <button
              onClick={prev}
              className="text-gray-500 hover:text-white transition text-2xl"
            >
              <ArrowLeft />
            </button>
            <div className="flex gap-2">
              {CASE_STUDIE_ITEMS.map((_, i) => (
                <div onClick={() => current(i)} key={i}>
                  {index == i ? <GreenVector /> : <WhiteVector />}
                </div>
              ))}
            </div>
            <button
              onClick={next}
              className="text-gray-500 hover:text-white transition text-2xl"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
