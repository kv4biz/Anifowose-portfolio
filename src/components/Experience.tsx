"use client";

import React from "react";
import { Timeline, TimelineEvent } from "./Timeline";

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
    <div className="flex w-full py-20">
      <div className="flex flex-col container mx-auto items-center justify-center gap-5 lg:gap-10">
        <div className="">
          <h3 className="title">Professional Experience</h3>
        </div>
        <div className="">
          <Timeline events={timelineData} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
