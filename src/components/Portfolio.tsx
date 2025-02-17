"use client";

import React from "react";
import { motion } from "framer-motion";
import { titleVariants, tagVariants, desVariants } from "@/utils/animation";

// Extend the document interface to include description and date.
interface DocumentItem {
  id: number;
  name: string;
  url: string;
  description: string;
  date: string;
}

// Updated documents array with description and date for each document.
const documents: DocumentItem[] = [
  {
    id: 1,
    name: "2020 AGM Brochure Annual Reports",
    url: "https://drive.google.com/file/d/1KIUW7EbYuIvCoD9w3x0S90bI9ZI-ecyB/view?usp=drive_link",
    description:
      "2020 AGM annual report brochure showcasing achievements & financial performance.",
    date: "March 2020",
  },
  {
    id: 2,
    name: "2021 CIPM AGM Accounts",
    url: "https://drive.google.com/file/d/1KIUW7EbYuIvCoD9w3x0S90bI9ZI-ecyB/view?usp=drive_link",
    description: "Detailed financial accounts and commentary for the 2021 AGM.",
    date: "April 2021",
  },
  {
    id: 3,
    name: "2022 CIPM AGM Brochure Final",
    url: "https://drive.google.com/file/d/1KIUW7EbYuIvCoD9w3x0S90bI9ZI-ecyB/view?usp=drive_link",
    description:
      "Final version of the AGM brochure for 2022 with comprehensive reports.",
    date: "May 2022",
  },
];

const Portfolio: React.FC = () => {
  const openPreview = (doc: DocumentItem) => {
    // Opens the document URL in a new browser tab.
    window.open(doc.url, "_blank");
  };

  return (
    <div className="flex items-center justify-center w-full py-20 px-4 font-roboto">
      <div className="flex w-full flex-col items-center justify-center container mx-auto">
        {/* Title and Description */}
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

        {/* Document List */}
        <ul className="flex flex-col items-center justify-center w-full max-w-xl space-y-4 lg:space-y-8">
          {documents.map((doc, index) => (
            <motion.li
              key={doc.id}
              variants={tagVariants("up")}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 1 }}
              // Responsive card: column layout on small screens, row on larger screens.
              className="flex flex-col w-full justify-between items-start border p-4 rounded shadow-lg"
            >
              {/* Document Details */}
              <div className="flex flex-col space-y-1">
                <span className="text-lg font-bold">{doc.name}</span>
                <span className="text-gray-600 text-sm">{doc.description}</span>
                <span className="text-gray-500 text-xs">{doc.date}</span>
              </div>
              {/* Preview Button */}
              <button
                onClick={() => openPreview(doc)}
                // Adds margin-top on small screens; resets on large screens.
                className="mt-4 w-full bg-white text-[#000080] hover:bg-[#000080] hover:text-white transition-colors py-1 px-3 rounded border border-[#000080]"
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
