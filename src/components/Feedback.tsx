"use client";

import React from "react";
import { Star, User } from "lucide-react";
import { motion } from "framer-motion";
import { titleVariants, tagVariants, desVariants } from "@/utils/animation";

const feedbackData = [
  {
    quote: "The best decision I made for my finances! ",
    name: "John Doe",
    job: "CEO, Tech Innovations",
  },
  {
    quote: "Professional, reliable, and always available to help.",
    name: "Jane Smith",
    job: "Manager, Finance Corp",
  },
  {
    quote: "Their insights transformed my business strategy!",
    name: "Emily Johnson",
    job: "Owner, Design Studio",
  },
];

const Feedback = () => {
  return (
    <section className="flex w-full py-10 lg:pt-20 px-4 lg:px-10 bg-[#f6f7f8]">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          className="title text-center mb-2"
          variants={titleVariants("down")}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Clients feedback
        </motion.h2>
        <motion.p
          className="text-center font-roboto text-gray-600 mb-8"
          variants={desVariants("down")}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our clients rave about our personalized service and expertise.
        </motion.p>
        {/* Feedback Cards Grid */}
        <div className="font-roboto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
          {feedbackData.map((feedback, index) => (
            <motion.div
              key={index}
              variants={tagVariants("up")}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 1 }}
              className="flex flex-col p-6 border-2 border-gray-600 bg-transparent"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#C3910A]"
                      fill="#C3910A"
                      size={16}
                    />
                  ))}
                </div>
              </div>
              {/* Quoted Review */}
              <blockquote className="italic min-h-16 text-gray-800 mb-4">
                "{feedback.quote}"
              </blockquote>
              {/* User Info */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                  <User className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{feedback.name}</p>
                  <p className="text-gray-700 text-sm">{feedback.job}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
