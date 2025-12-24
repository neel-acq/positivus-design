import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="bg-white mt-15">
      <div className="border border-black">
        <Container>
          <div className="h-17 flex justify-between">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Positivus Logo"
                width={220}
                height={36}
              />
            </div>
            <div className="flex items-center gap-10">
              <Link href="#" className="text-black">
                About us
              </Link>
              <Link href="#" className="text-black">
                Services
              </Link>
              <Link href="#" className="text-black">
                Use Cases
              </Link>
              <Link href="#" className="text-black">
                Pricing
              </Link>
              <Link href="#" className="text-black">
                Blog
              </Link>
              <Button variant="custom_button" >
                Request a quote
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
}
