"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div>
      <div className="items-center mb-20">
        <div className="flex gap-10">
          <h2 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl">
            Contact Us
          </h2>
          <p className="sm:block hidden w-145">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
        <div className="sm:hidden block">
          <br />
          <p className="w-auto">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
      </div>
      <Card className="rounded-[45px] bg-[#F3F3F3] pt-15 pb-20 pl-25 lg:pr-0  pr-25">
        <div className="flex justify-between">
          <div className="w-[600px]">
            <form action="#" method="post">
              <div className="flex gap-8 mb-10 radio-group">
                <label className="radio-option">
                  <input type="radio" name="type" />
                  <svg width="30" height="30" viewBox="0 0 30 30">
                    <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" />
                    <circle cx="15" cy="15" r="8" />
                  </svg>
                  <span>Say Hi</span>
                </label>

                <label className="radio-option">
                  <input type="radio" name="type" />
                  <svg width="30" height="30" viewBox="0 0 30 30">
                    <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" />
                    <circle cx="15" cy="15" r="8" />
                  </svg>
                  <span>Get a Quote</span>
                </label>
              </div>

              <div className="mb-6">
                <span className="font-[16px]">Name</span>
                <Input
                  type="text"
                  placeholder="Name"
                  className="border-black bg-white"
                />
              </div>
              <div className="mb-6">
                <span className="font-[16px]">Email*</span>
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-black bg-white"
                />
              </div>
              <div className="mb-6">
                <span className="font-[16px]">Message*</span>
                <Textarea
                  placeholder="Message"
                  className="border-black bg-white"
                />
              </div>
              <div>
                <Button variant={"custom_button_black"} className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          <div className="float-right flex hidden lg:block">
            <div className="relative left-85 top-20 sm:left-45 sm:top-65">
              <Image
                src={"/images/Vector-black.png"}
                width={150}
                height={150}
                alt=""
              />
            </div>
            <div className="absolute ">
              <div className="relative left-65 top-65 sm:left-35 sm:top-55">
                <Image
                  src={"/images/Vector-green.png"}
                  width={150}
                  height={150}
                  alt=""
                />
              </div>
            </div>

            <div className="relative left-[200px] top-[-100]">
            {/* <div className="relative lg:left-[200px] lg:md:left-[200px] lg:md:md:left-[145px] lg:sm:left-[145px] lg:top-[-100]"> */}
              <Image
                src={"/images/Mask-group.png"}
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
