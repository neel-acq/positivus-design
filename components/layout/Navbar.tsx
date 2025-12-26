"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "./Container";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border border-black mt-15">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Positivus Logo"
              width={220}
              height={36}
              className="w-36 sm:w-44 lg:w-[180px]"
            />
          </div>
          <div className="hidden lg:flex flex items-center gap-10">
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
            <Button variant="custom_button_white">Request a quote</Button>
          </div>
          <Button
            onClick={() => setOpen(!open)}
            className="lg:hidden border-none p-0"
            variant="custom_button_white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
        {open && (
          <div className="lg:hidden py-6">
            <div className="flex flex-col gap-6">
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
              <Button variant="custom_button_white" className="mx-auto w-65">
                Request a quote
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
