import { Card } from "@/components/ui/card";
import GreenArrow from "@/components/ui/green-arrow";
import Image from "next/image";

type ServiceItemType = {
  title: string;
  image: string;
  bg_color: string;
  title_bg_color: string;
  title_text_color?: string;
  bg_text_color: string;
  arror_color?: string;
};

export default function Services() {
  const SERVICE_ITEMS: ServiceItemType[] = [
    {
      title: "Search engine optimization",
      image: "tokyo-magnifier-web-search-with-elements 2.png",
      bg_color: "F3F3F3",
      title_bg_color: "B9FF66",
      title_text_color: "black",
      bg_text_color: "black",
      arror_color: "#B9FF66",
    },
    {
      title: "Pay-per-click advertising",
      image: "tokyo-selecting-a-value-in-the-browser-window 1.png",
      bg_color: "B9FF66",
      title_bg_color: "F3F3F3",
      title_text_color: "black",
      bg_text_color: "black",
      arror_color: "#B9FF66",
    },
    {
      title: "Social Media Marketing",
      image: "tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png",
      bg_color: "191A23",
      title_bg_color: "F3F3F3",
      title_text_color: "black",
      bg_text_color: "white",
      arror_color: "#000000",
    },
    {
      title: "Email Marketing",
      image: "tokyo-sending-messages-from-one-place-to-another 1.png",
      bg_color: "F3F3F3",
      title_bg_color: "B9FF66",
      title_text_color: "black",
      bg_text_color: "black",
      arror_color: "#B9FF66",
    },
    {
      title: "Content Creation",
      image: "tokyo-many-browser-windows-with-different-information 1.png",
      bg_color: "B9FF66",
      title_bg_color: "F3F3F3",
      title_text_color: "black",
      bg_text_color: "black",
      arror_color: "#B9FF66",
    },
    {
      title: "Analytics and Tracking",
      image:
        "tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png",
      bg_color: "191A23",
      title_bg_color: "F3F3F3",
      title_text_color: "black",
      bg_text_color: "white",
      arror_color: "#000000",
    },
  ];

  return (
    <div>
      <div className="items-center mb-20">
        <div className="flex gap-10">
          <h2 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl">
            Services
          </h2>
          <p className="sm:block hidden w-145">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="sm:hidden block">
          <br />
          <p className="w-auto">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {SERVICE_ITEMS.map((item, index) => (
          <Card
            key={index}
            className={`p-12.5 bg-[#${item?.bg_color}] border-black border-b-5 shadow-2xl shadow-accent-foreground`}
          >
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex justify-between sm:w-full">
                <div className="">
                  <h3
                    className={`bg-[#${item?.title_bg_color}] text-${item?.title_text_color} rounded-[7px] font-bold p-2 text-2xl w-fit max-w-[210px] `}
                  >
                    {item?.title}
                  </h3>
                  <div className="mt-5.5 mb-5.5 lg:hidden block">
                    <Image
                      src={`/images/Services/${item?.image}`}
                      width={170}
                      height={210}
                      alt={item?.title}
                    />
                  </div>
                  <div className="flex items-center lg:mt-23">
                    <div
                      className={`bg-${item?.bg_text_color} rounded-full p-2 w-fit`}
                    >
                      <GreenArrow fill={item?.arror_color} />
                    </div>
                    <p className={`text-${item?.bg_text_color} ml-4`}>
                      Learn more
                    </p>
                  </div>
                </div>
                <div className="mt-5.5 mb-5.5 lg:block hidden">
                  <Image
                    src={`/images/Services/${item?.image}`}
                    width={170}
                    height={210}
                    alt={item?.title}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
