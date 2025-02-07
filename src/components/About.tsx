"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 lg:pt-24 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse gap-8 lg:gap-20 items-start justify-center px-8 lg:px-10">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-3 lg:gap-5 lg:w-2/3">
          <h2 className="title2 text-2xl text-center lg:text-left">About me</h2>
          <h3 className="title3 text-center lg:text-left">
            More Than 12+ Years Banking Experience
          </h3>
          <div className="flex flex-col gap-3 font-roboto font-regular text-sm lg:text-[16px]">
            <p>
              I am an experienced finance professional with over 12 years of
              expertise in financial analysis, strategic financial planning, and
              management accounting. My skill set includes economic modeling,
              investment analysis, budgeting, forecasting, payroll management,
              tax compliance, financial reporting systems, account management,
              and operations.
            </p>
            <div className="hidden lg:flex flex-col gap-3">
              <p>
                As a finance leader, I excel in driving strategic financial
                planning, ensuring robust budget management and financial
                control, and translating complex financial data into actionable
                insights that fuel business growth. My detail-orientated,
                results-driven approach allows me to consistently meet deadlines
                and achieve targets, even in high-pressure environments.
              </p>
              <p>
                Key achievements include implementing a cost-reduction strategy
                that lowered operational expenses by 5–10% and optimising the
                month-end closing process, reducing completion time by 80% to
                enhance reporting speed and accuracy. My ability to anticipate
                challenges and deliver innovative solutions has consistently
                added value to the organizations I served.
              </p>
              <p>
                With strong interpersonal skills, I foster collaborative
                relationships across functions, enabling seamless project
                execution and promoting a culture of continuous improvement. My
                commitment to delivering results and a data-driven mindset drive
                sustainable growth and long-term profitability.
              </p>
            </div>
          </div>
        </div>
        {/* Right Column: Image */}
        <div className="lg:w-1/3 max-w-xl">
          <div className="relative left-3 lg:left-0 border-t-2 border-r-2 border-[#C3910A] rounded-tr-lg">
            <Image
              src="/aboutimg.png"
              alt="About Image"
              width={900}
              height={900}
              className="relative w-full right-5 top-5 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
