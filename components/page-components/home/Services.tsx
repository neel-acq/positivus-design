import { Card } from "@/components/ui/card";
import GreenArrow from "@/components/ui/green-arrow";
import Image from "next/image";

export default function Services() {
  return (
    <div>
      <div className="flex items-center gap-10 mb-20">
        <h2 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl">
          Services
        </h2>
        <p className="w-130">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card className="p-12.5 bg-[#F3F3F3] border-black border-b-5">
          <div className="flex flex-col gap-6">
            <div className="flex gap-30">
              <div>
                <h3 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl w-fit max-w-[210px]">
                  Search engine optimization
                </h3>
                <div className="flex text-center mt-23">
                  <div className="bg-black rounded-full p-2 w-fit">
                    <GreenArrow />
                  </div>
                  <p className="text-black ml-4">Learn more</p>
                </div>
              </div>
              <div className="text-center justify-center w-full">
                <Image
                  src={
                    "/images/Services/tokyo-magnifier-web-search-with-elements 2.png"
                  }
                  width={170}
                  height={210}
                  alt="Search engine optimization"
                />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-12.5 bg-[#B9FF66] border-black border-b-5">
          <div className="flex flex-col gap-6">
            <div className="flex gap-30">
              <div>
                <h3 className="bg-[#F3F3F3] rounded-[7px] font-bold p-2 text-2xl w-fit max-w-[210px]">
                  Pay-per-click advertising
                </h3>
                <div className="flex text-center mt-23">
                  <div className="bg-black rounded-full p-2 w-fit">
                    <GreenArrow />
                  </div>
                  <p className="text-black ml-4">Learn more</p>
                </div>
              </div>
              <div className="text-center justify-center ">
                <Image
                  src={
                    "/images/Services/tokyo-selecting-a-value-in-the-browser-window 1.png"
                  }
                  width={170}
                  height={210}
                  alt="Pay-per-click advertising"
                />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-12.5 bg-[#191A23] border-black border-b-5">
          <div className="flex flex-col gap-6">
            <div className="flex gap-30">
              <div>
                <h3 className="bg-white text-black rounded-[7px] font-bold p-2 text-2xl w-fit max-w-[210px]">
                  Social Media Marketing
                </h3>
                <div className="flex text-center mt-23">
                  <div className="bg-white rounded-full p-2 w-fit">
                    <GreenArrow fill="#000000" />
                  </div>
                  <p className="text-white ml-4">Learn more</p>
                </div>
              </div>
              <div className="text-center justify-center ">
                <Image
                  src={
                    "/images/Services/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png"
                  }
                  width={170}
                  height={210}
                  alt="Social Media"
                />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-12.5 bg-[#F3F3F3] border-black border-b-5">
          <div className="flex flex-col gap-6">
            <div className="flex gap-30">
              <div>
                <h3 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl w-fit max-w-[210px]">
                  Email Marketing
                </h3>
                <div className="flex text-center mt-23">
                  <div className="bg-black rounded-full p-2 w-fit">
                    <GreenArrow />
                  </div>
                  <p className="text-black ml-4">Learn more</p>
                </div>
              </div>
              <div className="text-center justify-center ">
                <Image
                  src={
                    "/images/Services/tokyo-sending-messages-from-one-place-to-another 1.png"
                  }
                  width={170}
                  height={210}
                  alt="Email Marketing"
                />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-12.5 bg-[#B9FF66] border-black border-b-5">
          <div className="flex flex-col gap-6">
            <div className="flex gap-30">
              <div>
                <h3 className="bg-[#F3F3F3] rounded-[7px] font-bold p-2 text-2xl w-fit max-w-[210px]">
                  Content Creation
                </h3>
                <div className="flex text-center mt-23">
                  <div className="bg-black rounded-full p-2 w-fit">
                    <GreenArrow />
                  </div>
                  <p className="text-black ml-4">Learn more</p>
                </div>
              </div>
              <div className="text-center justify-center ">
                <Image
                  src={
                    "/images/Services/tokyo-many-browser-windows-with-different-information 1.png"
                  }
                  width={170}
                  height={210}
                  alt="Content Creation"
                />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-12.5 bg-[#191A23] border-black border-b-5">
          <div className="flex flex-col gap-6">
            <div className="flex gap-30">
              <div>
                <h3 className="bg-white text-black rounded-[7px] font-bold p-2 text-2xl w-fit max-w-[210px]">
                  Analytics and Tracking
                </h3>
                <div className="flex text-center mt-23">
                  <div className="bg-white rounded-full p-2 w-fit">
                    <GreenArrow fill="#000000" />
                  </div>
                  <p className="text-white ml-4">Learn more</p>
                </div>
              </div>
              <div className="text-center justify-center ">
                <Image
                  src={
                    "/images/Services/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png"
                  }
                  width={170}
                  height={210}
                  alt="Analytics and Tracking"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
