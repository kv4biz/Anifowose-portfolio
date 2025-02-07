import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="hidden lg:block">
        <Image
          src={"/logo.svg"}
          width={180}
          height={180}
          alt="Logo"
          className="h-10 w-10 lg:h-16 lg:w-16"
        />
      </div>
      <div className="lg:hidden">
        <Image
          src={"/w-logo.svg"}
          width={150}
          height={150}
          alt="logo"
          className="h-10 w-10 lg:h-16 lg:w-16"
        />
      </div>
    </div>
  );
};

export default Logo;
