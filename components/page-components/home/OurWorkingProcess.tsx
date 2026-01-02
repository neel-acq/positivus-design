"use client";

import { Card } from "@/components/ui/card";
import MinusCircle from "@/components/ui/minus-circle-icon";
import PlusCircle from "@/components/ui/plus-circles-icon";
import { useCallback, useState } from "react";

type AccordionItemType = {
  title: string;
  content: React.ReactNode;
};

const ACCORDION_ITEMS: AccordionItemType[] = [
  {
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Implementation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Monitoring and Optimization",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Reporting and Communication",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Continual Improvement",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

export default function OurWorkingProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section>
      <div className="items-center mb-20">
        <div className="flex gap-10">
          <h2 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl">
            Our Working Process
          </h2>
          <p className="sm:block hidden w-145 hover:underline hover:decoration-dotted hover:decoration-[#000000] hover:underline-offset-4 transition-all cursor-text">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="sm:hidden block">
          <br />
          <p className="w-auto underline decoration-dotted decoration-[#000000] underline-offset-4 transition-all cursor-text">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
      </div>

      {ACCORDION_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        const { title, content: children } = item;
        return (
          <Card
            key={index + 1}
            className={`bg-[#${
              openIndex == index ? "B9FF66" : "F3F3F3"
            }] pt-10 pb-10 pl-15 pr-15 border-black border-b-5 mb-7.5 shadow-2xl shadow-accent-foreground`}
          >
            <div className="border-b border-default last:border-b-0">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <span className="mr-6 text-[60px]">0{index + 1}</span>
                  <span className="hidden sm:block text-[30px] ">{title}</span>
                </div>

                <div className="w-auto h-auto">
                  {isOpen ? <MinusCircle /> : <PlusCircle />}
                </div>
              </button>
              <h3
                onClick={() => toggle(index)}
                className="sm:hidden block cursor-pointer wrap-break-word"
              >
                {title}
              </h3>
              {isOpen && (
                <div>
                  <hr className="border-black mt-5 mb-7.5" />
                  <p className="">{children}</p>
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </section>
  );
}
