"use client";

import React from "react";
import { Globe } from "./magicui/globe";
import { WorldMap } from "./ui/world-map";

const Map = () => {
  return (
    <div className="flex flex-col py-10 w-full overflow-hidden">
      {/* Desktop View: Render WorldMap */}
      <div className="hidden lg:flex w-full h-[640px] p-4">
        <WorldMap />
      </div>
      {/* Mobile View: Render Globe */}
      <div className="lg:hidden relative flex w-[450px] h-[450px] items-center justify-center overflow-hidden">
        <Globe className="top-0" />
      </div>
    </div>
  );
};

export default Map;
