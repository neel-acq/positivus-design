import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LinkedIn from "@/components/ui/linkedIn";
import Image from "next/image";

export default function Team() {
  type TeamItemType = {
    image: string;
    name: string;
    designation: string;
    content: string;
  };

  const TEAMS: TeamItemType[] = [
    {
      image: "/images/Team/Picture1.png",
      name: "John Smith",
      designation: "CEO and Founder",
      content:
        "10+ years of experience in digital marketing. Expertise in SEO,PPC, and content strategy",
    },
    {
      image: "/images/Team/Picture2.png",
      name: "Jane Doe",
      designation: "Director of Operations",
      content:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      image: "/images/Team/Picture3.png",
      name: "Michael Brown",
      designation: "Senior SEO Specialist",
      content:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      image: "/images/Team/Picture4.png",
      name: "Emily Johnson",
      designation: "PPC Manager",
      content:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      image: "/images/Team/Picture5.png",
      name: "Brian Williams",
      designation: "Social Media Specialist",
      content:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      image: "/images/Team/Picture6.png",
      name: "Sarah Kim",
      designation: "Content Creator",
      content:
        "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];
  return (
    <div>
      <div className="items-center mb-20">
        <div className="flex gap-10">
          <h2 className="bg-[#B9FF66] rounded-[7px] font-bold p-2 text-2xl">
            Team
          </h2>
          <p className="sm:block hidden w-145">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="sm:hidden block">
          <br />
          <p className="w-auto">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 md:md:sm:grid-cols-2 grid-cols-1 gap-10">
        {TEAMS.map((item, index) => (
          <Card
            key={index + 1}
            className="shadow-2xl shadow-accent-foreground bg-[#FFFFFF] pt-10 pb-10 pl-9 pr-9 border-black border-b-5 rounded-[45px] cursor-pointer"
          >
            <div>
              <div className="flex justify-between">
                <div>
                  <Image
                    src={item?.image}
                    width={106}
                    height={102}
                    alt="Picture1"
                  />
                </div>
                <div className="flex items-end justify-center pl-5">
                  <div className="md:block hidden ">
                    <h4 className="font-medium">{item?.name}</h4>
                    <p>{item?.designation}</p>
                  </div>
                </div>
                <div className="float-right">
                  <LinkedIn />
                </div>
              </div>
              <div className="flex items-end justify-start">
                <div className="block md:hidden ">
                  <br />
                  <h4 className="font-medium">{item?.name}</h4>
                  <p>{item?.designation}</p>
                </div>
              </div>
              <hr className="border-black mt-7 mb-7" />
              <div>
                <p>{item?.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-10 float-right w-full sm:w-auto">
        <Button
          variant={"custom_button_black"}
          className="rounded-2xl p-5 w-full sm:w-[269px]"
        >
          See all team
        </Button>
      </div>
    </div>
  );
}
