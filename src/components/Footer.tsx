// Footer.tsx
"use client";
import React from "react";
import WLogo from "./WLogo";
import { socialLinks } from "@/constant/socials";

const Footer = () => {
  return (
    <footer className="bg-[#000080] font-roboto text-white">
      <div className="container mx-auto px-4 pt-6 lg:pt-10">
        {/* Row 1: socials Section */}
        <div className="flex flex-col items-center py-4 gap-4">
          <div>
            <WLogo />
          </div>
          <div>
            <div className="flex space-x-4 lg:space-x-8 mt-5 my-3 justify-center">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#000080] hover:bg-[#000080] hover:text-white hover:border hover:border-[#ffffff] transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Row 2: Logo & Copyright */}
        <div className="flex items-end justify-center border-t border-white/60 py-4">
          <div className="text-sm">© 2025 Nextflo. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
