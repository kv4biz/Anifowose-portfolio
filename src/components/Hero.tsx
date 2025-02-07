"use client";

import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/magicui/ripple";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full">
      {/* Desktop Layout */}
      <section
        className="hidden lg:flex items-center justify-between overflow-hidden pt-20 bg-cover w-full"
        style={{ backgroundImage: "url('/herobackground.png')" }}
      >
        {/* Left Column: Texts and Button */}
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
          <Button
            className="mt-6 w-40 bg-[#133679] rounded-sm hover:bg-white hover:text-[#133679] hover:border hover:border-[#133679]"
            onClick={scrollToContact}
          >
            Contact
          </Button>
        </div>

        {/* Right Column: Ripple Effect with Hero Image */}
        <div className="relative z-10 -top-10 -left-12 flex items-end justify-center">
          <Ripple
            mainCircleSize={350}
            mainCircleOpacity={0.2}
            numCircles={3}
            className="-top-20 -left-8"
          />
          <img
            src="/heroimg.png"
            alt="Hero"
            className="relative -right-24 -bottom-20 z-20 w-full max-w-lg"
          />
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative flex items-end justify-center min-h-screen py-10 w-full">
        {/* Mirrored Background Image */}
        <img
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
            <p className="px-4 title2 text-4xl">Hello Mate</p>
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
          <Button
            className="mt-6 w-40 hover:bg-[#133679] font-semibold rounded-sm bg-white text-[#133679] hover:text-white mx-auto"
            onClick={scrollToContact}
          >
            Contact
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
