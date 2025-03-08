"use client";
import React, { useState } from "react";
import { Star, User } from "lucide-react";
import { motion } from "framer-motion";
import { titleVariants, tagVariants, desVariants } from "@/utils/animation";
import { Marquee } from "@/components/magicui/marquee";

const feedbackData = [
  {
    quote:
      "Taofik is a very resourceful and proactive professional to have within a team. I had the opportunity of working with him, and I can confidently say he is detailed, focused, and a team player. He can deliver on any given project and adheres to timelines. He is an asset to any organisation",
    name: "Jimmy Aronokhale",
  },
  {
    quote:
      "Highly Skilled in Financial Accounting, Well experienced in management Accounting and finance management.I hereby recommend Taofik for any senior manager role in any organisation, as he is highly dedicated and focused on his work.",
    name: "Peter Clarke",
  },
  {
    quote:
      "Taofik is a professional who is hard-working and stands for the ethics of his profession. I would work with him all over again if life presents me the opportunity.",
    name: "Patrick Umo-Adiasung",
  },
  {
    quote: `The CIPM is the National Regulator of the Human Resources Profession in Nigeria. I served as a council member, while Taofik was an employee and accountant.
    <br/>The financial controller resigned, and Taofeek had to step into the role. Taofik was professional, effective, and a good team player. The quality of the institute's books improved significantly while he was in the role.
    <br/>Taofeek is also a good listener, a calm and amiable professional, and demonstrated a high level of integrity, professionalism, and emotional intelligence.`,
    name: "Yomi Fawehinmi",
  },
  {
    quote:
      "TK, as he is fondly called, is hard-working. He likes getting things done as quickly as possible. He is very diligent and skilful. He has vast knowledge in allied matters, financial reporting, management accounting, accounts payable, and receivables. He is a great team player and an asset to every team.",
    name: "Oluwatomilola Odeyemi",
  },
];

const Feedback = () => {
  // State to track the review selected for full display.
  const [selectedReview, setSelectedReview] = useState<{
    quote: string;
    name: string;
  } | null>(null);

  // Opens the overlay with the full review.
  const openReviewOverlay = (review: { quote: string; name: string }) => {
    setSelectedReview(review);
  };

  // Closes the overlay.
  const closeOverlay = () => {
    setSelectedReview(null);
  };

  // Helper to truncate a review.
  const truncateReview = (quote: string) => {
    // Remove <br/> tags for counting purposes.
    const plainText = quote.replace(/<br\s*\/?>/gi, " ");
    if (plainText.length > 100) {
      return plainText.slice(0, 100) + "...";
    }
    return plainText;
  };

  return (
    <section className="w-full py-10 lg:pt-20 px-4 lg:px-10 bg-[#f6f7f8] relative">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          className="title text-center mb-2"
          variants={titleVariants("up")}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Clients feedback
        </motion.h2>
        <motion.p
          className="text-center font-roboto text-gray-600 mb-8"
          variants={desVariants("up")}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our clients rave about our personalized service and expertise.
        </motion.p>

        {/* Marquee for Reviews */}
        <Marquee className="mb-10" repeat={2} pauseOnHover>
          {feedbackData.map((feedback, index) => {
            // Remove <br/> for length checking.
            const plainText = feedback.quote.replace(/<br\s*\/?>/gi, " ");
            const isLong = plainText.length > 100;
            return (
              <motion.div
                key={index}
                variants={tagVariants("up")}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 1 }}
                className="flex flex-col justify-between p-6 border-2 border-gray-600 bg-transparent rounded-md shadow-md mx-4 max-w-[360px]"
              >
                <div className="flex flex-col mb-2">
                  {/* Stars */}
                  <div className="flex items-center mb-1">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="text-[#C3910A]"
                          fill="#C3910A"
                          size={16}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Review Quote */}
                  <blockquote className="italic text-sm text-gray-800">
                    {isLong ? (
                      <>
                        "{truncateReview(feedback.quote)}"
                        <button
                          className="text-gray-500 ml-1 text-xs underline"
                          onClick={() =>
                            openReviewOverlay({
                              quote: feedback.quote,
                              name: feedback.name,
                            })
                          }
                        >
                          Read More
                        </button>
                      </>
                    ) : (
                      // Use dangerouslySetInnerHTML to render any <br/> tags
                      <span
                        dangerouslySetInnerHTML={{ __html: feedback.quote }}
                      />
                    )}
                  </blockquote>
                </div>
                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
                    <User className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {feedback.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Marquee>
      </div>

      {/* Overlay for Full Review */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-6 rounded-md max-w-xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl"
              onClick={closeOverlay}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Full Review</h3>
            <blockquote className="italic text-sm text-gray-800">
              <span
                // Render full review with <br/> effect preserved.
                dangerouslySetInnerHTML={{ __html: selectedReview.quote }}
              />
            </blockquote>
            <p className="mt-4 font-semibold text-gray-800">
              - {selectedReview.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;
