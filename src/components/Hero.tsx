"use client";

import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Ripple } from "@/components/magicui/ripple";
import { Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    icon: <Facebook size={20} />,
    url: "https://facebook.com",
  },
  {
    name: "Linkedin",
    icon: <Linkedin size={20} />,
    url: "https://linkedin.com",
  },
  {
    name: "Instagram",
    icon: <Instagram size={20} />,
    url: "https://instagram.com",
  },
  { name: "Twitter", icon: <Twitter size={20} />, url: "https://twitter.com" },
  { name: "Youtube", icon: <Youtube size={20} />, url: "https://youtube.com" },
];

const Hero = () => {
  return (
    <div className="flex w-full">
      {/* Desktop Layout */}
      <section
        className="hidden lg:flex items-center justify-between overflow-hidden pt-20 bg-cover w-full"
        style={{ backgroundImage: "url('/herobackground.png')" }}
      >
        {/* Left Column: Texts and Social Icons */}
        <div className="z-10 flex flex-col max-w-2xl pl-28 font-roboto">
          <p className="text-xl font-semibold">Hello Mate</p>
          <h1 className="text-2xl tracking-tight">I’m Taofik Anifowose</h1>
          <h2 className="text-5xl font-medium italic text-[#133679]">
            <TypingAnimation>A Chartered Accountant</TypingAnimation>
          </h2>
          <div className="flex max-w-lg">
            <p className="text-sm text-gray-600">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
            </p>
          </div>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#133679] text-white hover:bg-white hover:text-[#133679] hover:border hover:border-[#133679] transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Ripple Effect with Hero Image */}
        <div className="relative z-10 -top-10 -left-12 flex items-end justify-center">
          <Ripple
            mainCircleSize={350}
            mainCircleOpacity={0.2}
            numCircles={3}
            className="-top-20 -right-24"
          />
          <Image
            width={800}
            height={800}
            src="/heroimg.png"
            alt="Hero"
            className="relative -right-24 -bottom-20 z-20 w-full max-w-lg"
          />
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative flex items-end justify-center min-h-screen py-10 w-full">
        {/* Mirrored Background Image */}
        <Image
          width={800}
          height={800}
          src="/heroimg.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />
        {/* Centered Text Content */}
        <div className="relative z-10 text-center px-4">
          <div className="flex w-full items-center justify-center mb-10">
            <hr className="border-t w-16 border-white" />
            <p className="px-4 title2 text-4xl text-white">Hello Mate</p>
          </div>
          <div className="flex-col font-roboto flex gap-2">
            <h1 className="text-2xl tracking-tight text-white">
              I’m Taofik Anifowose
            </h1>
            <h2 className="text-4xl font-medium italic text-white">
              <TypingAnimation>A Chartered Accountant</TypingAnimation>
            </h2>
            <div className="flex max-w-lg mx-auto">
              <p className="text-sm text-white">
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mt-6 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#133679] hover:bg-[#133679] hover:text-white hover:border hover:border-[#133679] transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
