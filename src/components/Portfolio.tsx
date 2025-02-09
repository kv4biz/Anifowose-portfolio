"use client";

import React from "react";
import { motion } from "framer-motion";
import { titleVariants, tagVariants, desVariants } from "@/utils/animation";

interface DocumentItem {
  id: number;
  name: string;
  url: string;
}

const documents: DocumentItem[] = [
  {
    id: 1,
    name: "2020 AGM Brochure Annual Reports",
    url: "https://drive.google.com/file/d/1KIUW7EbYuIvCoD9w3x0S90bI9ZI-ecyB/view?usp=drive_link",
  },
  {
    id: 2,
    name: "2021 CIPM AGM Accounts",
    url: "https://drive.google.com/file/d/1KIUW7EbYuIvCoD9w3x0S90bI9ZI-ecyB/view?usp=drive_link",
  },
  {
    id: 3,
    name: "2022 CIPM AGM Brochure Final",
    url: "https://drive.google.com/file/d/1KIUW7EbYuIvCoD9w3x0S90bI9ZI-ecyB/view?usp=drive_link",
  },
];

const Portfolio: React.FC = () => {
  const openPreview = (doc: DocumentItem) => {
    // Opens the Google Drive link in a new tab.
    window.open(doc.url, "_blank");
  };

  return (
    <div className="flex items-center justify-center w-full py-20 px-4 font-roboto">
      <div className="flex w-full flex-col items-center justify-center container mx-auto">
        {/* Title and description */}
        <div className="text-center mb-10">
          <motion.h1
            className="title text-3xl font-bold mb-2"
            variants={titleVariants("down")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My Portfolio
          </motion.h1>
          <motion.p
            className="text-gray-700 text-sm"
            variants={desVariants("down")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Click on the preview button to view the portfolio project document.
          </motion.p>
        </div>

        {/* Document list */}
        <ul className="flex flex-col items-center justify-center w-full max-w-2xl space-y-4">
          {documents.map((doc, index) => (
            <motion.li
              key={doc.id}
              variants={tagVariants("up")}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 1 }}
              className="flex w-full justify-between items-center border p-4 rounded shadow-sm"
            >
              <span className="text-lg">{doc.name}</span>
              <button
                onClick={() => openPreview(doc)}
                className="bg-white text-[#133679] hover:bg-[#133679] hover:text-white transition-colors py-1 px-3 rounded border border-[#133679]"
              >
                Preview
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
