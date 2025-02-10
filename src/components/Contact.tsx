"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";
import {
  titleVariants,
  desVariants,
  tagVariants,
  imgVariant,
} from "@/utils/animation";

// Map for contact details
const contactDetails = [
  {
    id: 1,
    icon: <MapPin className="w-6 h-6 text-gray-900" />,
    title: "Address",
    text: "Luton",
  },
  {
    id: 2,
    icon: <Phone className="w-6 h-6 text-gray-900" />,
    title: "Phone Number",
    text: "07494232442",
  },
  {
    id: 3,
    icon: <Mail className="w-6 h-6 text-gray-900" />,
    title: "Email",
    text: "taofiqanney@gmail.com",
  },
];

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10 py-20">
      {/* Row 1: Headline & Consultation Button */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
        <div className="max-w-xl font-roboto">
          <motion.h2
            className="text-2xl lg:text-3xl font-bold text-gray-500"
            variants={titleVariants("right")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's Elevate Your Financial Strategy
          </motion.h2>
          <motion.p
            className="mt-2 text-sm font-light text-gray-700"
            variants={desVariants("right")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Schedule a consultation to discuss your financial goals today.
          </motion.p>
        </div>
        <motion.div
          className="mt-6 lg:mt-0"
          variants={tagVariants("left")}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="outline"
            className="hover:bg-gray-700 bg-white hover:text-white text-gray-700"
          >
            Schedule
          </Button>
        </motion.div>
      </div>

      {/* Row 2: Contact Details & Contact Form */}
      <div className="flex flex-col lg:flex-row gap-10 font-semibold lg:px-10">
        {/* Left Column: Contact Details */}
        <div className="lg:w-1/2">
          <motion.h3
            className="text-2xl font-bold mb-4 text-gray-700"
            variants={titleVariants("right")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get in Touch
          </motion.h3>
          <motion.div
            className="flex max-w-sm"
            variants={desVariants("right")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="mb-4 lg:mb-8 text-sm font-light text-gray-600">
              Lorem ipsum dolor sit amet. Ab harum quos non quod corrupti ut
              possimus quam hic cumque recusandae quo ipsum fugiat ea magn.
            </p>
          </motion.div>
          <div className="flex flex-col gap-4 lg:gap-10">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.id}
                className="flex items-center space-x-4"
                variants={tagVariants("right")}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-white rounded-full shadow-lg">
                    {detail.icon}
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium text-[#000080]">
                    {detail.title}
                  </p>
                  <p className="font-light text-sm text-gray-600">
                    {detail.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div
          className="lg:w-1/2 mx-5"
          variants={imgVariant("left")}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
