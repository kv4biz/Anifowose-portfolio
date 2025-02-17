"use client";

import React from "react";
import { Timeline, TimelineEvent } from "./Timeline";
import { motion } from "framer-motion";
import { titleVariants } from "@/utils/animation";

const timelineData: TimelineEvent[] = [
  { title: "Financial Officer", period: "2008 - 2009" },
  {
    title: "Financial Control and Strategic Planning - Trainee",
    period: "2014 - 2020",
  },
  {
    title: "Financial Reporting Specialist and Management Accountant",
    period: "2014 - 2020",
  },
  {
    title: "Senior Financial Officer",
    period: "2020 - 2022",
  },
  {
    title: "MSc. Student, International Business, University of Hertfordshire",
    period: "2022 - present",
  },
];

const Experience = () => {
  return (
    <div className="flex w-full py-20 overflow-hidden px-4 lg:px-10">
      <div className="flex flex-col container mx-auto items-center justify-center gap-5 lg:gap-10">
        <div>
          <motion.h3
            className="title"
            variants={titleVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Professional Experience
          </motion.h3>
        </div>
        <div>
          <Timeline events={timelineData} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
