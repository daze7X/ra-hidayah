"use client";

import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed right-8 z-40 transition-all duration-500 ease-in-out ${isVisible ? "bottom-[110px] opacity-100 translate-y-0" : "bottom-20 opacity-0 translate-y-4 pointer-events-none"}`}>
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-[50px] h-[50px] bg-white text-[#188B48] rounded-full shadow-lg border border-gray-100 hover:bg-[#FCD116] hover:text-white hover:border-[#FCD116] transition-all duration-300 group"
        aria-label="Back to top"
      >
        <span className="material-symbols-outlined text-[24px] group-hover:-translate-y-1 transition-transform duration-300">
          arrow_upward
        </span>
      </button>
    </div>
  );
}
