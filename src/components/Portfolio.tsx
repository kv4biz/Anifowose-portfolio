"use client";

import React from "react";
import { motion } from "framer-motion";
import { titleVariants, desVariants } from "@/utils/animation";

const Portfolio: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full py-20 px-4 font-roboto">
      <div className="flex w-full flex-col items-center justify-center container mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <motion.h1
            className="title text-3xl font-bold mb-2"
            variants={titleVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My Portfolio
          </motion.h1>
          <motion.div
            className="p-8 mt-16 flex flex-col border-2 rounded-md bg-white drop-shadow-lg"
            variants={desVariants("up")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-700 tracking-widest text-2xl">
              {" "}
              To view my portfolio,
            </p>
            <p className="text-gray-700 tracking-wider font-semibold text-lg">
              please{" "}
              <a
                href="https://herts365-my.sharepoint.com/:f:/g/personal/ta22aaq_herts_ac_uk/EsIL6GfbbI9FvvG7X1zU2WIBMajRnVmqWG1A5shvNUD1Fw?e=2s8W7i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                click here
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
