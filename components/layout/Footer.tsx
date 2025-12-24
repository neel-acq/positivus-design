import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

export default function Footer() {
  return (
    <footer className="bg-black h-128 rounded-t-[48px] mt-35">
      <Container className="lg:px-[60px]">
        <div>
          <div className="">
            <div className="h-13.5"></div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Positivus Logo"
                  width={220}
                  height={36}
                  className="invert brightness-0"
                />
              </div>
              <div className="flex items-center gap-10">
                <Link href="#" className="text-white underline">
                  About us
                </Link>
                <Link href="#" className="text-white underline">
                  Services
                </Link>
                <Link href="#" className="text-white underline">
                  Use Cases
                </Link>
                <Link href="#" className="text-white underline">
                  Pricing
                </Link>
                <Link href="#" className="text-white underline">
                  Blog
                </Link>
              </div>
              <div className="flex items-center gap-5">
                <Image
                  src="/images/Socials-media/LinkedIn.png"
                  alt="LinkedIn Icons"
                  width={30}
                  height={30}
                />
                <Image
                  src="/images/Socials-media/Facebook.png"
                  alt="LinkedIn Icons"
                  width={30}
                  height={30}
                />
                <Image
                  src="/images/Socials-media/Twitter.png"
                  alt="LinkedIn Icons"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div className="h-16.5"></div>
            <div className="flex justify-between gap-auto">
              <div>
                <Badge className="bg-[#B9FF66] text-black text-lg pl-1.5 pr-1.5 rounded mb-7">
                  Contact us:
                </Badge>
                <p className="text-white mb-5">Email: info@positivus.com</p>
                <p className="text-white mb-5">Phone: 555-567-8901</p>
                <p className="text-white">
                  Address: 1234 Main St Moonstone City, Stardust State 12345
                </p>
              </div>
              <div>
                <Card className="bg-[#292A32] border-none">
                  <div className="p-6">
                    <form className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="flex-grow px-4 py-2 rounded-md border border-white text-white "
                      />
                      <button
                        type="submit"
                        className="bg-[#B9FF66] text-black px-4 py-2 rounded-md hover:bg-[#B9FF66] transition-colors"
                      >
                        Subscribe to news
                      </button>
                    </form>
                  </div>
                </Card>
              </div>
            </div>
            <div className="mb-12.5"></div>
          </div>
          <div className="text-left text-sm text-white ">
            <div className="border-t border-white" />
            <div className="mt-12.5">
              &copy; {new Date().getFullYear()} Positivus. All Rights Reserved.
              <Link href="#" className="ml-4 underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
