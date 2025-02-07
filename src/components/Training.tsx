"use client";

import React from "react";

const trainingList = [
  "Corporate Finance Institute® (CFI)Corporate Finance Institute® (CFI)",
  "International Financial Reporting Standard (IFRS) (ICAN) August 2018",
  "Introduction to 3-Statement Modeling",
  "Introduction to Business Modeling",
  "Financial Analysis Fundamentals",
  "Introduction to Business Intelligence",
  "Budgetary Control & Forecasting, Pan Atlantic University Lagos",
  "Business School August 2019",
  "Business Communication University of Hertfordshire Jan. 2023",
  "AML Essentials: Anti Money Laundering, KYC and Compliance Jan. 2023",
  "QuickBooks Online Certified ProAdvisor August 2023",
  "Xero Advisor Certified – October 2023",
  "Xero Payroll Certified April 2024",
  "FCA – (Fellow Chartered Accountant) Institute of Chartered Accountants of Nigeria May 2024",
];

const Trainings = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="title mb-8 text-center">Trainings & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-roboto">
          {trainingList.map((training, index) => (
            <div
              key={index}
              className="flex items-start space-x-2 mx-4 lg:mx-0"
            >
              {/* Bullet as a list dot */}
              <span className="text-3xl text-[#133679]">&#8226;</span>
              <p className="text-gray-600 font-light mt-2 italic">{training}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings;
