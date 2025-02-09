"use client";

import React from "react";
import { WorldMap } from "./ui/world-map";

const Map = () => {
  return (
    <div className="flex flex-col py-10 w-full overflow-hidden">
      {/* WorldMap */}
      <div className="flex w-full h-[320px] lg:h-[640px] p-4">
        <WorldMap />
      </div>
    </div>
  );
};

export default Map;
