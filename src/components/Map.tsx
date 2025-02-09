"use client";

import React from "react";
import { WorldMap } from "./ui/world-map";
import { motion } from "framer-motion";
import { titleVariants } from "@/utils/animation";

const Map = () => {
  return (
    <div className="flex flex-col py-10 w-full overflow-hidden">
      {/* WorldMap */}
      <motion.div
        variants={titleVariants("down")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="flex w-full h-[320px] lg:h-[640px] p-4"
      >
        <WorldMap />
      </motion.div>
    </div>
  );
};

export default Map;
