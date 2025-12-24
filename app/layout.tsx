import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/Icon.png",
  },
  title: "Positivus",
  description: "Navigating the digital landscape for success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased bg-white">
        <Navbar />
        <Container>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
