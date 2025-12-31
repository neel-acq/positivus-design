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
          <p className="sm:block hidden w-145">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="sm:hidden block">
          <br />
          <p className="w-auto">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
      </div>

      {ACCORDION_ITEMS.map((item, index) => (
        <Card
          key={index + 1}
          className={`bg-[#${
            openIndex == index ? "B9FF66" : "F3F3F3"
          }] pt-5 pb-5 pl-15 pr-15 border-black border-b-5 mb-7.5`}
        >
          <AccordionItem
            index={index + 1}
            key={item.title}
            title={item.title}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          >
            {item.content}
          </AccordionItem>
        </Card>
      ))}
    </section>
  );
}

/* ---------------- Accordion Item ---------------- */

function AccordionItem({
  index,
  title,
  isOpen,
  onToggle,
  children,
}: {
  index: number;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-default last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between p-5 font-medium text-body hover:text-fg-brand hover:bg-brand-softer transition cursor-pointer"
      >
        <div className="flex items-center">
          <span className="mr-6 text-[30px]">0{index}</span>
          <h3>{title}</h3>
        </div>

        {isOpen ? <MinusCircle /> : <PlusCircle />}
      </button>
      {isOpen && (
        <div>
          <hr className="border-black pt-7.5 pb-7.5" />
          <div className="px-5 pb-5 text-body animate-in fade-in slide-in-from-top-1">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
