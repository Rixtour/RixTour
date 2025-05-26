import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "../assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "#hero",
      "#about",
      "#services",
      "#places",
      "#hotels",
      "#transportation",
      "#contact",
    ];
    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean) as HTMLElement[];

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new window.IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px", // Trigger when section is 40% from top
        threshold: [0.2, 0.5, 0.8],
      }
    );

    sections.forEach((section) => {
      observerRef.current!.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const navItems = [
    { name: "Bosh sahifa", href: "#hero" },
    { name: "Haqimizda", href: "#about" },
    { name: "Xizmatlar", href: "#services" },
    { name: "Joylar", href: "#places" },
    { name: "Mehmonxonalar", href: "#hotels" },
    { name: "Transport", href: "#transportation" },
    { name: "Aloqa", href: "#contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      setActiveSection(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-purple-100"
          : "bg-white/90 backdrop-blur-lg shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-1">
              <div className="w-25 h-12">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold ">RixTour</h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`text-gray-700 hover:text-purple-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-purple-50 hover:scale-105 ${
                    activeSection === item.href
                      ? "bg-purple-600 text-white scale-105 shadow-lg"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-purple-600 focus:outline-none transition-colors bg-purple-50 hover:bg-purple-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-purple-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-gray-700 hover:text-purple-600 block px-4 py-3 rounded-xl text-base font-semibold hover:bg-purple-50 transition-all duration-300 ${
                  activeSection === item.href
                    ? "bg-purple-600 text-white scale-105 shadow-lg"
                    : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
