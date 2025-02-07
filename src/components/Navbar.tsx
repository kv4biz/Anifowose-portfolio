"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
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
  const pathname = usePathname();
  const router = useRouter();

  // Track active homepage section (for in-page links such as "#home", "#about", etc.)
  const [activeSection, setActiveSection] = useState<string>("home");

  // State for header background based on scroll position.
  const [scrolled, setScrolled] = useState<boolean>(false);

  // State to control the mobile sheet open/close.
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  // Update 'scrolled' state when the user scrolls.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define your navigation items.
  const navItems: NavItem[] = [
    { label: "Home", href: "#home", section: "home" },
    { label: "About", href: "#about", section: "about" },
    { label: "Experience", href: "#experience", section: "experience" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contacts", href: "/contact" },
  ];

  // Determines if a nav item is "active."
  const isActive = (item: NavItem) => {
    if (item.href.startsWith("#") && pathname === "/") {
      return activeSection === item.section;
    }
    return pathname === item.href;
  };

  // Custom smooth scrolling function.
  const smoothScrollTo = (target: HTMLElement, duration: number = 1000) => {
    const startY = window.pageYOffset;
    const targetY = target.getBoundingClientRect().top + startY;
    const distanceY = targetY - startY;
    let startTime: number | null = null;

    // Cubic ease-in-out function.
    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startY + distanceY * ease);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // IntersectionObserver to update activeSection as the user scrolls.
  useEffect(() => {
    // Only observe in-page sections if we're on the home page.
    if (pathname !== "/") return;

    // Extract the section ids from navItems.
    const sectionIds = navItems
      .filter((item) => item.href.startsWith("#") && item.section)
      .map((item) => item.href.substring(1));

    // Get the corresponding DOM elements.
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

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname, navItems]);

  // Handle navigation clicks: smooth-scroll for in-page anchors, update active state,
  // and if not on home page, navigate to home with the hash.
  const handleNavClick =
    (item: NavItem) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (item.href.startsWith("#")) {
        event.preventDefault();
        // If not on home page, navigate to home with the hash.
        if (pathname !== "/") {
          router.push("/" + item.href);
        } else {
          const targetId = item.href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            smoothScrollTo(targetElement, 1500);
            setActiveSection(item.section || "home");
          }
        }
      }
      // Close the mobile sheet shortly after a link is clicked.
      if (isSheetOpen) {
        setTimeout(() => {
          setIsSheetOpen(false);
        }, 2000);
      }
    };

  // Choose the appropriate logo component.
  const LogoComponent = logoVariant === "wlogo" ? WLogo : Logo;

  // Base class for nav links.
  const linkBaseClass =
    "px-3 py-2 text-[18px] font-roboto font-medium transition-colors cursor-pointer";

  // Text color for nav links.
  const textColorClass =
    textVariant === "black" ? "text-white lg:text-black" : "text-white";

  // When active, the link color becomes blue.
  const activeClass = "text-blue-500";

  // Header background:
  // - If not scrolled, the header remains transparent.
  // - Once scrolled, apply either a blue or a blurish white background.
  let headerBgClass = "bg-transparent";
  if (scrolled) {
    headerBgClass =
      headerVariant === "blue"
        ? "bg-[#354569]"
        : "bg-[#354569] lg:bg-white/90 backdrop-blur-md";
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${headerBgClass} px-10 md:px-16 lg:px-28 py-3 transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo (left side) */}
        <div className="flex-shrink-0">
          <Link href="/">
            <LogoComponent />
          </Link>
        </div>

        {/* Desktop Navigation (visible on md and larger) */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`${linkBaseClass} ${textColorClass} ${
                        isActive(item) ? activeClass : ""
                      }`}
                      onClick={handleNavClick(item)}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Navigation (hamburger menu for smaller screens) */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button className={`p-2 ${textColorClass}`}>
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 py-10">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${linkBaseClass} text-black uppercase ${
                      isActive(item) ? activeClass : ""
                    }`}
                    onClick={handleNavClick(item)}
                  >
                    {item.label}
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
