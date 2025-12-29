"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div>
      <div className="flex items-center gap-10 mb-20">
        <h2 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl">
          Contact Us
        </h2>
        <p className="w-130">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <Card className="rounded-[45px] bg-[#F3F3F3] pt-15 pb-20 pl-25">
        <div className="flex justify-between">
          <div className="w-[600px]">
            <form action="#" method="post">
              <div className="flex gap-5 mb-10">
                <input type="radio" name="type" id="hi" /> Say Hi
                <input type="radio" name="type" id="quote" /> Get a Quote
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
          <div className="float-right flex">
            <div className="relative left-85 top-20">
              <Image
                src={"/images/Vector-black.png"}
                width={150}
                height={150}
                alt=""
              />
            </div>
            <div className="absolute ">
              <div className="relative left-65 top-65">
                <Image
                  src={"/images/Vector-green.png"}
                  width={150}
                  height={150}
                  alt=""
                />
              </div>
            </div>
            <div className="relative left-[200px]">
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
