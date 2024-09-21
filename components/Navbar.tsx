import { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenuButton from "./MobileMenuButton";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Reusable links array
  const navLinks = [
    { label: "Showcase", href: "/calculator" },
    { label: "Docs", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Analytics", href: "/" },
    { label: "Templates", href: "/" },
    { label: "Enterprise", href: "/" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200">
      {/* Logo and Links */}
      <div className="flex space-x-6">
        {/* AEON - Always visible */}
        <Link
          href="/"
          className="text-blue-400 md:text-gray-500 hover:text-gray-800"
        >
          AEON
        </Link>

        {/* Links visible only on desktop */}
        <NavLinks links={navLinks} className="hidden md:flex space-x-6" />
      </div>

      {/* Search Input - Visible on larger screens */}
      <div className="hidden md:block">
        <SearchBar />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        {/* Magnifying Glass Icon */}
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" />
        </svg>

        {/* Toggle Button */}
        <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu - Visible when isOpen is true */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <NavLinks links={navLinks} className="flex flex-col space-y-5 p-4" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
