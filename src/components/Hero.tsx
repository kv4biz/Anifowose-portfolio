"use client";

import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/magicui/ripple";

const Hero = () => {
  return (
    <section
      className="flex  items-center justify-between overflow-hidden pt-20 bg-cover w-full"
      style={{ backgroundImage: "url('/herobackground.png')" }}
    >
      {/* Left Column: Texts and Button */}
      <div className="z-10 flex flex-col max-w-2xl pl-20 font-roboto">
        <p className="text-xl font-semibold">Hello Mate</p>
        <h1 className="text-2xl font-regular tracking-tight">
          I’m Taofik Anifowose
        </h1>
        <h2 className="text-5xl font-medium italic text-[#133679]">
          <TypingAnimation>A Chartered Accountant</TypingAnimation>
        </h2>
        <div className="flex max-w-lg">
          <p className="text-sm  text-gray-600">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
        </div>

        <Button
          className="mt-6 w-40 bg-[#133679] rounded-sm hover:bg-white hover:text-[#133679] hover:border hover:border-[#133679]"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
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
          className="-top-20 -left-12"
        />
        <img
          src="/desktopheroimg.png"
          alt="Hero"
          className="relative -right-24 -bottom-20 z-20 w-full max-w-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
