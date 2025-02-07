import type { Metadata } from "next";
import { Roboto, Inria_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const inriaSerif = Inria_Serif({
  weight: ["300", "400", "700"],
  variable: "--font-inria-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taofik Anifowose - Portfolio",
  description:
    "Personal portfolio of Taofik Anifowose, a Chartered Accountant.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${inriaSerif.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
