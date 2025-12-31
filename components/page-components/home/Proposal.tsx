import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Proposal() {
  return (
    <div className="pt-6 pb-6">
      <Card className="bg-[#F3F3F3] border-none">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <Container>
            <div className="flex">
              <div className="pt-6">
                <h3 className="text-3xl font-bold">Let’s make things happen</h3>
                <div className="relative w-full h-[50%] flex items-center justify-center  sm:hidden">
                  <Image
                    src="/images/ProposalIllustration.png"
                    alt="Proposal Illustration"
                    width={359}
                    height={394}
                  />
                </div>
                <p className="leading-relaxed mt-6.5 md:w-3/4">
                  Contact us today to learn more about how our digital marketing
                  services can help your business grow and succeed online.
                </p>
                <Button variant={"custom_button_black"} className="mt-6.5">
                  Get your free proposal
                </Button>
              </div>

              <div className="relative w-[420px] h-[275px] sm:w-[420px] sm:h-[275px] flex items-center justify-center hidden sm:flex lg:sm:mr-35 ">
                <Image
                  src="/images/ProposalIllustration.png"
                  alt="Proposal Illustration"
                  width={359}
                  height={394}
                />
              </div>
            </div>
          </Container>
        </div>
      </Card>
    </div>
  );
}
