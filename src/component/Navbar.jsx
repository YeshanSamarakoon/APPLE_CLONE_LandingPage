import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { gsap } from "gsap";

const NavItems = ({ onClick = () => {} }) => {
  return (
    <ul className="space-y-4 sm:space-y-0 sm:flex sm:gap-8">
      {navLinks.map(({ id, href, name }) => (
        <li key={id}>
          <a
            href={href}
            className="text-neutral-800 hover:text-black transition-colors font-medium"
            onClick={onClick}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      gsap.to(".navbar", { duration: 0.5, y: -100 });
    } else {
      gsap.to(".navbar", { duration: 0.5, y: 0 });
    }
  }, [isScrolled]);

  return (
    <header className="navbar fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4 relative">

          {/* Logo */}
          <a
            href="/"
            className="text-black font-bold text-xl hover:text-neutral-600 transition-colors z-20"
          >
            Samsung Galaxy S24
          </a>

          {/* Centered Nav Items (Desktop only) */}
          <nav className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
            <NavItems />
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-white hover:text-neutral-600 focus:outline-none z-20"
            aria-label="Toggle menu"
          >
            <img
              src={
                isOpen
                  ? "/public/assets/images/close.svg"
                  : "/public/assets/images/menu.svg"
              }
              alt="toggle menu"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 sm:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-black/90 px-4 pb-4">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
