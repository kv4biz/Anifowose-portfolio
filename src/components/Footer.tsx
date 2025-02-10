// Footer.tsx
"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WLogo from "./WLogo";

const Footer = () => {
  const linkColumns = [
    {
      title: "Quick Links",
      links: [
        { text: "About me", href: "#" },
        { text: "Service Offered", href: "#" },
        { text: "Contact Support", href: "#" },
        { text: "FAQs", href: "#" },
        { text: "Blog Posts", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Case Studies", href: "#" },
        { text: "Testimonials", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Sitemap", href: "#" },
      ],
    },
    {
      title: "Connect to Me",
      links: [
        { text: "Facebook Page", href: "#" },
        { text: "Twitter Feed", href: "#" },
        { text: "LinkedIn Profile", href: "#" },
        { text: "Instagram Gallery", href: "#" },
        { text: "YouTube Channel", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Help center", href: "#" },
        { text: "Live chat", href: "#" },
        { text: "Feedback forum", href: "#" },
        { text: "Email", href: "#" },
        { text: "Newsletter Signup", href: "#" },
      ],
    },
    {
      title: "Stay Connected",
      links: [
        { text: "Join My Community", href: "#" },
        { text: "Get in Touch", href: "#" },
        { text: "Follow My Journey", href: "#" },
        { text: "Explore My Services", href: "#" },
        { text: "Discover My Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "terms and conditions", href: "#" },
        { text: "cookie policy", href: "#" },
        { text: "user agreement", href: "#" },
        { text: "data Protection", href: "#" },
        { text: "Contact me", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#000080] font-roboto text-white">
      <div className="container mx-auto px-4 pt-10 lg:pt-16 space-y-12">
        {/* Row 1: Subscribe Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left side */}
          <div>
            <h2 className="text-lg font-semibold">Subscribe to updates</h2>
            <p className="text-sm">
              Stay informed with our latest news and offers.
            </p>
          </div>
          {/* Right side */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <Input type="email" placeholder="Your Email Here" />
              <Button variant="outline">Join</Button>
            </div>
            <p className="text-xs">
              We respect your privacy and protect your information.
            </p>
          </div>
        </div>

        {/* Row 2: Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t px-4 py-10 lg:pt-16">
          {linkColumns.map((column, colIndex) => (
            <div key={colIndex}>
              <h3 className="font-semibold mb-2 lg:mb-4">{column.title}</h3>
              <ul className="space-y-3 text-sm">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Row 3: Logo & Copyright */}
        <div className="flex items-end justify-between border-t border-white py-4 lg:pt-8">
          <div>
            <WLogo />
          </div>
          <div className="text-sm">© 2025 Nextflo. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
