"use client";

import React from "react";
import Image from "next/image";

interface EducationData {
  university: string;
  degree: string;
  period: string;
}

const educationData: EducationData[] = [
  {
    university: "University of Hertfordshire",
    degree: "Master of Science - MS, International Business With Placement",
    period: "Sep 2022 - 2024",
  },
  {
    university: "Tekedia Institute",
    degree: "Mini MBA",
    period: "Dec 2021",
  },
  {
    university: "Olabisi Onabanjo University (oou)",
    degree: "Bsc, Accounting",
    period: "April 2008",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="flex w-full py-20 lg:px-20 bg-[#D6D9DE]/20"
    >
      <div className="container mx-auto flex px-2 items-start justify-between">
        {/* Left Side: Text and Cards */}
        <div className="w-full lg:w-1/2 py-3 px-2">
          <h2 className="title mb-4 lg:mb-8 text-center lg:text-left">
            Educational Background
          </h2>
          <div className="space-y-3 lg:space-y-5 font-roboto">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-transparent">
                <h3 className="text-lg italic font-semibold">
                  {edu.university}
                </h3>
                <p className="text-[14px] lg:text-[16px] italic">
                  {edu.degree}
                </p>
                <p className="text-[14px] lg:text-[16px] italic text-gray-600">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side: Image (visible only on desktop) */}
        <div className="hidden lg:block w-full lg:w-1/2 right-0">
          <Image
            src="/eduimg.png"
            alt="Education Image"
            width={500}
            height={500}
            className="object-cover max-h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
