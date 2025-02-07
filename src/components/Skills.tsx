"use client";

import React from "react";

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
    <section className="flex py-10 lg:py-20 px-4 ">
      <div className="flex flex-col gap-8 container mx-auto items-center">
        <div className="flex flex-col gap-4 max-w-2xl items-center justify-center text-center">
          <h2 className="title">My Skills</h2>
          <p className="text-center text-gray-600 mb-8">
            As a Chartered Accountant, I leverage my financial expertise to
            ensure compliance, budgeting, planning, and risk management for
            success.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 font-roboto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 lg:px-8 bg-white border border-gray-300/40 rounded-md"
              style={{ boxShadow: "-4px 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <p className="text-lg font-normal">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
