"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Ripple } from "@/components/magicui/ripple";
import Image from "next/image";
import {
  tagVariants,
  titleVariants,
  desVariants,
  imgVariant,
} from "@/utils/animation";
import { socialLinks } from "@/constant/socials";

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
          <motion.p
            className="text-xl font-semibold"
            variants={tagVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            Hello
          </motion.p>
          <motion.h1
            className="text-2xl tracking-tight"
            variants={titleVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            I’m Taofik Anifowose
          </motion.h1>
          <h2 className="text-5xl font-medium italic text-[#000080]">
            <TypingAnimation>A Chartered Accountant</TypingAnimation>
          </h2>
          <motion.div
            className="flex max-w-lg"
            variants={desVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-600">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
            </p>
          </motion.div>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#000080] text-white hover:bg-white hover:text-[#000080] hover:border hover:border-[#000080] transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
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
          <motion.div
            variants={imgVariant("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="relative -right-24 -bottom-20 z-20 w-full max-w-lg"
          >
            <Image
              width={800}
              height={800}
              src="/heroimg.png"
              alt="Hero"
              className="w-full"
            />
          </motion.div>
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
          <motion.div
            className="flex w-full items-center justify-center mb-10"
            variants={tagVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <hr className="border-t w-16 border-white" />
            <p className="px-4 title2 text-4xl text-white">Hello</p>
          </motion.div>
          <motion.h1
            className="text-2xl tracking-tight text-white"
            variants={titleVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            I’m Taofik Anifowose
          </motion.h1>
          <h2 className="text-4xl font-medium italic text-white">
            <TypingAnimation>A Chartered Accountant</TypingAnimation>
          </h2>
          <motion.div
            className="flex max-w-lg mx-auto"
            variants={desVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <p className="text-sm text-white">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
            </p>
          </motion.div>
          <div className="flex space-x-4 mt-6 justify-center">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#000080] hover:bg-[#000080] hover:text-white hover:border hover:border-[#000080] transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
