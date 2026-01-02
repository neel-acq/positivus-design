"use client";

import { useState } from "react";
import Link from "next/link";

import { ArrowLeft } from "@/components/ui/arrow-left";
import { ArrowRight } from "@/components/ui/arrow-right";
import { Card } from "@/components/ui/card";
import GreenArrow from "@/components/ui/green-arrow";
import { GreenVector } from "@/components/ui/green-vector";
import { WhiteVector } from "@/components/ui/white-vector";
import VerticalLine from "@/components/ui/vertical-line";

type CaseStudyItem = {
  content: string;
};

const CASE_STUDIES: CaseStudyItem[] = [
  {
    content:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    content:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    content:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? CASE_STUDIES.length - 1 : i - 1));

  const next = () =>
    setActiveIndex((i) => (i === CASE_STUDIES.length - 1 ? 0 : i + 1));

  return (
    <section>
      <div className="items-center mb-20">
        <div className="flex gap-10">
          <h2 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl">
            Case Studies
          </h2>
          <p className="sm:block hidden w-145 hover:underline hover:decoration-dotted hover:decoration-[#000000] hover:underline-offset-4 transition-all cursor-text">
            Explore real-life examples of our proven digital marketing success
            through our case studies.
          </p>
        </div>
        <div className="sm:hidden block">
          <br />
          <p className="w-auto underline decoration-dotted decoration-[#000000] underline-offset-4 transition-all cursor-text">
            Explore real-life examples of our proven digital marketing success
            through our case studies.
          </p>
        </div>
      </div>

      <Card className="bg-black pl-15 pr-15 pt-17.5 pb-17.5 overflow-hidden">
        <div className="hidden lg:grid grid-cols-3 gap-12">
          {CASE_STUDIES.map((item, i) => (
            <div key={i} className="flex gap-12">
              <div>
                <p className="text-white mb-6">{item.content}</p>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-[#B9FF66]"
                >
                  Learn more <GreenArrow />
                </Link>
              </div>
              <div className="h-full">
                {i !== CASE_STUDIES.length - 1 && <VerticalLine />}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <div className="flex overflow-hidden">
            <div className="relative flex">
              <div
                className="flex transition-transform duration-500 ease-in-out mb-15"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {CASE_STUDIES.map((item, i) => (
                  <div
                    key={i}
                    className="min-w-[100%] lg:px-6 md:px-10 px-6 items-center justify-center"
                  >
                    <p className="text-white mb-6">{item.content}</p>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-[#B9FF66]"
                    >
                      Learn more <GreenArrow />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <button onClick={prev}>
              <ArrowLeft />
            </button>

            <div className="flex gap-2  ml-[20%] mr-[20%]">
              {CASE_STUDIES.map((_, i) => (
                <button key={i} onClick={() => setActiveIndex(i)}>
                  {activeIndex === i ? <GreenVector /> : <WhiteVector />}
                </button>
              ))}
            </div>

            <button onClick={next}>
              <ArrowRight />
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
}
