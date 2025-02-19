"use client";

import React from "react";
import { motion } from "framer-motion";
import { tagVariants, titleVariants, desVariants } from "@/utils/animation";

const skills = [
  "Compliance Management",
  "Budgeting",
  "Business Strategy",
  "Corporate Finance",
  "Financial Accounting",
  "Financial Analysis",
  "Financial Management",
  "Financial Modelling",
  "Financial Strategy",
  "Forecasting",
  "Management Accounting",
  "Project Finance",
  "Risk Management",
  "Various Analysis",
  "Strategic Planning",
  "Regulatory Compliance",
];

const Skills = () => {
  return (
    <section className="flex w-full overflow-hidden py-10 lg:py-10 px-4 ">
      <div className="flex flex-col gap-8 container mx-auto items-center">
        <div className="flex flex-col gap-4 max-w-2xl items-center justify-center text-center">
          <motion.h2
            className="title"
            variants={titleVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-8"
            variants={desVariants("down")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            As a Chartered Accountant, I leverage my financial expertise to
            ensure compliance, budgeting, planning, and risk management for
            success.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 font-roboto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={tagVariants("up")}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              transition={{ delay: index * 1 }}
            >
              <div
                className="flex items-center justify-center p-4 lg:px-8 bg-white border text-center border-gray-300/40 h-20 md:h-10 rounded-md"
                style={{ boxShadow: "-4px 4px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm lg:text-[13px] font-normal">{skill}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
