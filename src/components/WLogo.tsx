import Image from "next/image";
import React from "react";

const WLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <Image
          src={"/w-logo.svg"}
          width={150}
          height={150}
          alt="logo"
          className="h-8 w-8 lg:h-16 lg:w-16"
        />
      </div>
    </div>
  );
};

export default WLogo;
