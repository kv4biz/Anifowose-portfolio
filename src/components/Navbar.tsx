"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import WLogo from "@/components/WLogo";

interface NavbarProps {
  /** Determines the text color for the nav links. */
  textVariant?: "black" | "white";
  /**
   * Determines the header background when scrolled:
   * - `"blue"` will use a blue background,
   * - `"blurishWhite"` will use a white background with a blur.
   */
  headerVariant?: "blue" | "blurishWhite";
  /**
   * Chooses which logo component to render:
   * - `"default"` uses `Logo.tsx` (desktop logo),
   * - `"wlogo"` uses `WLogo.tsx` (mobile logo).
   */
  logoVariant?: "default" | "wlogo";
}

interface NavItem {
  label: string;
  href: string;
  /** For in-page anchors on the home page */
  section?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  textVariant = "black",
  headerVariant = "blurishWhite",
  logoVariant = "default",
}) => {
  // Since this is a one-page site, pathname is always "/"
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  // Update header background based on scroll.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define your navigation items.
  const navItems: NavItem[] = [
    { label: "Home", href: "#home", section: "home" },
    { label: "About", href: "#about", section: "about" },
    { label: "Experience", href: "#experience", section: "experience" },
    { label: "Portfolio", href: "#portfolio", section: "portfolio" },
    { label: "Contacts", href: "#contact", section: "contact" },
  ];

  // Returns true if the link's section matches the activeSection.
  const isActive = (item: NavItem) => activeSection === item.section;

  // Custom smooth scrolling function.
  const smoothScrollTo = (target: HTMLElement, duration: number = 1000) => {
    const startY = window.pageYOffset;
    const targetY = target.getBoundingClientRect().top + startY;
    const distanceY = targetY - startY;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startY + distanceY * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  // Use IntersectionObserver to update activeSection as sections scroll into view.
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.substring(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [navItems]);

  // Handle clicks on nav links.
  const handleNavClick =
    (item: NavItem) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const targetId = item.href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        smoothScrollTo(targetElement, 1000);
        setActiveSection(item.section || "home");
      }
      if (isSheetOpen) {
        setTimeout(() => setIsSheetOpen(false), 100);
      }
    };

  // Choose the logo.
  const LogoComponent = logoVariant === "wlogo" ? WLogo : Logo;

  // Base CSS classes.
  const linkBaseClass =
    "px-3 py-2 text-[18px] font-roboto font-medium transition-colors cursor-pointer";
  const textColorClass =
    textVariant === "black" ? "text-white lg:text-black" : "text-white";

  // Header background.
  let headerBgClass = "bg-transparent";
  if (scrolled) {
    headerBgClass =
      headerVariant === "blue"
        ? "bg-[#133679]"
        : "bg-[#133679] lg:bg-white/85 backdrop-blur-md";
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${headerBgClass} px-10 md:px-16 lg:px-28 py-2 transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <LogoComponent />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={handleNavClick(item)}
                  className={`${linkBaseClass} ${textColorClass} flex flex-col group`}
                >
                  <span
                    className={` ${isActive(item) ? "lg:text-[#133679]" : ""}`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`block h-0.5 bg-white lg:bg-[#133679] transition-all duration-300 mt-1 ${
                      isActive(item) ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button className={textColorClass + " p-2"}>
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 py-10">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick(item)}
                    className={`${linkBaseClass} text-black uppercase group`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`block h-0.5 bg-[#133679] transition-all duration-300 mt-1 ${
                        isActive(item) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                ))}
              </div>
              <SheetClose />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
