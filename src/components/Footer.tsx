// Footer.tsx
"use client";
import React from "react";
import WLogo from "./WLogo";
import { Button } from "./ui/button";
import { FaLinkedin } from "react-icons/fa6";

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
            <div className="flex my-3 justify-center">
              <Button className="h-10 flex items-center justify-center rounded-lg bg-white text-[#000080] hover:bg-[#000080] hover:text-white hover:border hover:border-white transition-colors">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedIn"
                  className="flex gap-2 items-center justify-center"
                >
                  <p className="text-sm">Connect with me on</p>
                  <FaLinkedin />
                </a>
              </Button>
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
