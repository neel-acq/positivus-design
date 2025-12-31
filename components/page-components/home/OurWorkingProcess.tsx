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
          }] pt-10 pb-10 pl-15 pr-15 border-black border-b-5 mb-7.5`}
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
        className="flex w-full items-center justify-between cursor-pointer"
      >
        <div className="flex items-center">
          <span className="mr-6 text-[60px]">0{index}</span>
          <span className="hidden sm:block text-[30px] ">{title}</span>
        </div>

        <div className="w-auto h-auto hidden sm:block">
          {isOpen ? (
            <MinusCircle />
          ) : (
            <PlusCircle />
          )}
        </div>
        <div className="w-auto h-auto sm:hidden block">
          {isOpen ? (
            <MinusCircle width={35} height={35} />
          ) : (
            <PlusCircle width={35} height={35} />
          )}
        </div>
      </button>
      <h3 onClick={onToggle} className="sm:hidden block cursor-pointer">
        {title}
      </h3>
      {isOpen && (
        <div>
          <hr className="border-black mt-5 mb-7.5" />
          <p className="">{children}</p>
        </div>
      )}
    </div>
  );
}
