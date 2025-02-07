import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar logoVariant="wlogo" textVariant="white" headerVariant="blue" />
      <div className="min-h-screen bg-red-300 flex items-center justify-center">
        pages
      </div>
    </div>
  );
};

export default page;
