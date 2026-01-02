import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

export default function MobileFooter() {
  return (
    <>
      <footer className="bg-black rounded-t-3xl h-auto mt-35">
        <Container className="px-6">
          <div className="">
            <div className="">
              <div className="h-8"></div>
              <div className="flex justify-center">
                <div className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Positivus Logo"
                    width={180}
                    height={30}
                    className="invert brightness-0"
                  />
                </div>
              </div>
              <div className="h-8"></div>
              <div className="flex flex-col items-center gap-6">
                <Link href="#" className="text-white underline">
                  About us
                </Link>
                <Link href="#Services" className="text-white underline">
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
              <div className="h-8"></div>
              <div className="flex flex-col items-center gap-3">
                <Badge className="bg-[#B9FF66] text-black">Contact us:</Badge>
                <p className="text-white">Email: info@positivus.com</p>
                <p className="text-white">Phone: 555-567-8901</p>
                <p className="text-white">
                  Address: 1234 Main St Moonstone City, Stardust State 12345
                </p>
              </div>
              <div className="h-8"></div>
              <div>
                <Card className="bg-[#292A32] border-none">
                  <div className="p-6">
                    <form className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="p-3 rounded-md border border-white text-white flex-grow"
                      />
                      <button
                        type="submit"
                        className="bg-[#B9FF66] text-black border-none p-3 rounded-md"
                      >
                        Subscribe to news
                      </button>
                    </form>
                  </div>
                </Card>
              </div>
              <div className="h-8"></div>
              <div className="flex justify-center gap-5">
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
              <div className="mb-5"></div>
            </div>
            <div className="text-center text-sm text-white">
              <div className="border-t border-white" />
              <div className="mt-5 flex flex-col">
                &copy; {new Date().getFullYear()} Positivus. All Rights
                Reserved.
                <Link href="#" className="ml-4 underline">
                  Privacy Policy
                </Link>
                <div className="mb-5"></div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
