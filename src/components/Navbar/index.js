import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { name: "Services", href: "#services" },
    { name: "Case Study", href: "#case-study" },
    { name: "Technical Stack", href: "#technical-stack" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-sm w-full">
        <div className="flex items-center justify-between h-sm py-6 lg:h-24">
          {/* Logo Section */}
          <div className="flex items-center gap-x-6">
            <Link href="/" className="flex items-center h-8 w-auto lg:h-12">
              <Image
                src="https://assets.bacancytechnology.com/landing/images/bacancy-logo-black.svg"
                alt="Bacancy Technology"
                width={120}
                height={40}
                className="svg-icon h-full w-full"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="dark font-normal text-sm relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="font-normal"
              href="https://calendly.com/americas-3/30min?_gl=1*11z2jzn*_gcl_au*MjYzMjE4MzIzLjE3NTcwNjUyNjk.*_ga*MTMwNjQxMjg5NS4xNzQ4ODQyMDM5*_ga_5ZSTFLNPDY*czE3NTgxODgwMjAkbzIxJGcxJHQxNzU4MTg5NzIyJGo2MCRsMCRoMTIwODY4MzY2Nw.."
              target="_blank"
              uppercase
            >
              Schedule a Call
            </Button>
            <Button className="font-normal" href="#form" uppercase>
              Start My Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-dark hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white">
            <div className="px-sm py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <nav className="space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block dark font-normal text-sm py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full font-normal"
                  onClick={() => setIsMenuOpen(false)}
                  href="https://calendly.com/americas-3/30min?_gl=1*11z2jzn*_gcl_au*MjYzMjE4MzIzLjE3NTcwNjUyNjk.*_ga*MTMwNjQxMjg5NS4xNzQ4ODQyMDM5*_ga_5ZSTFLNPDY*czE3NTgxODgwMjAkbzIxJGcxJHQxNzU4MTg5NzIyJGo2MCRsMCRoMTIwODY4MzY2Nw.."
                  target="_blank"
                  uppercase
                >
                  Schedule a Call
                </Button>
                <Button
                  variant="filled"
                  className="w-full font-normal"
                  onClick={() => setIsMenuOpen(false)}
                  href="#form"
                  uppercase
                >
                  Start My Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
