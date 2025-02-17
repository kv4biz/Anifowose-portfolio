"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { tagVariants } from "@/utils/animation";

// Define the timeline event type.
export interface TimelineEvent {
  title: string;
  period: string;
}

// Props for the Timeline component.
interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Update container height when component mounts or events change.
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }
  }, [events]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100%", "end 100%"],
  });
  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full py-10 mx-auto overflow-hidden font-roboto"
    >
      {/* Vertical timeline line */}
      <div className="absolute top-0 h-full w-[2px] bg-gray-300 left-1/2 transform -translate-x-1/2">
        <motion.div
          style={{ height: heightTransform, opacity: opacityTransform }}
          className="absolute top-0 w-[2px] bg-gradient-to-t from-[#C3910A] via-blue-500 to-transparent rounded-full"
        />
      </div>

      {/* Timeline events container */}
      <div className="max-w-4xl mx-auto relative">
        {events.map((event, index) => {
          // Alternate sides for each event.
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className="relative py-24 lg:py-32">
              {/* Dot marker positioned on the timeline */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-500" />
              </div>

              <motion.div
                variants={tagVariants("up")}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                transition={{ delay: index * 1 }}
              >
                {isLeft ? (
                  <div className="w-1/2 pr-2 lg:pr-8 text-right">
                    <h3 className="lg:text-xl text-[16px] font-semibold lg:font-bold text-gray-800">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600">{event.period}</p>
                  </div>
                ) : (
                  <div className="w-1/2 pl-2 lg:pl-8 text-left ml-auto">
                    <h3 className="lg:text-xl text-[16px] font-semibold lg:font-bold text-gray-800">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600">{event.period}</p>
                  </div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
