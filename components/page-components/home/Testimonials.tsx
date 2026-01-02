"use client";
import { ArrowLeft } from "@/components/ui/arrow-left";
import { ArrowRight } from "@/components/ui/arrow-right";
import { Card } from "@/components/ui/card";
import { GreenVector } from "@/components/ui/green-vector";
import { WhiteVector } from "@/components/ui/white-vector";
import { useState } from "react";

type TestimonialItemType = {
  name: string;
  designation: string;
  content: string;
};

export default function Testimonials() {
  const TESTIMONIAL_ITEMS: TestimonialItemType[] = [
    {
      name: "John Smith",
      designation: "Marketing Director at XYZ Corp",
      content:
        "We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      name: "John Smith",
      designation: "Marketing Director at XYZ Corp",
      content:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      name: "John Smith",
      designation: "Marketing Director at XYZ Corp",
      content:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      name: "John Smith",
      designation: "Marketing Director at XYZ Corp",
      content:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
  ];

  const [index, setIndex] = useState(1);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? TESTIMONIAL_ITEMS.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === TESTIMONIAL_ITEMS.length - 1 ? 0 : prev + 1));

  const current = (index: number) => {
    setIndex(index);
  };

  return (
    <div>
      <div className="items-center mb-20">
        <div className="flex gap-10">
          <h2 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl">
            Testimonials
          </h2>
          <p className="sm:block hidden w-145 hover:underline hover:decoration-dotted hover:decoration-[#000000] hover:underline-offset-4 transition-all cursor-text">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
        <div className="sm:hidden block">
          <br />
          <p className="w-auto underline decoration-dotted decoration-[#000000] underline-offset-4 transition-all cursor-text">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
      </div>
      <Card className="rounded-[45px] bg-[#191A23] pt-21 pb-17 overflow-hidden">
        <div className="relative max-w-7xl mx-[5%]">
          <div
            className="flex transition-transform duration-500 ease-in-out mb-31"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIAL_ITEMS.map((item, index) => (
              <div
                key={index}
                className="min-w-[100%] lg:px-6 md:px-10 px-6 items-center justify-center"
              >
                <div className="border border-[#B9FF66] p-13 text-white rounded-[45px] relative">
                  <p>"{item?.content}"</p>
                  <div className="left-16 w-6 h-6 bg-[#191A23] border-l border-b border-[#B9FF66] rotate-315 absolute mt-[41px]" />
                </div>
                <div className="mt-10 ml-16">
                  <h4 className="text-[#B9FF66] font-semibold text-lg">
                    {item?.name}
                  </h4>
                  <p className="text-white text-sm">{item?.designation}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-between ml-[30%] mr-[30%] lg:ml-[30%] lg:mr-[30%] md:ml-[10%] md:mr-[40%] sm:ml-[10%] sm:mr-[10%] items-center gap-10"> */}
          <div className="flex justify-center items-center">
            <button
              onClick={prev}
              className="text-gray-500 hover:text-white transition text-2xl cursor-pointer"
            >
              <ArrowLeft />
            </button>
            <div className="flex gap-2 ml-[20%] mr-[20%]">
              {TESTIMONIAL_ITEMS.map((_, i) => (
                <div
                  onClick={() => current(i)}
                  key={i}
                  className="cursor-pointer"
                >
                  {index == i ? <GreenVector /> : <WhiteVector />}
                </div>
              ))}
            </div>
            <button
              onClick={next}
              className="text-gray-500 hover:text-white transition text-2xl cursor-pointer"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
