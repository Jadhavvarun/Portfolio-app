import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export const Header: React.FC = () => {
  const [isAffixed, setIsAffixed] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setIsAffixed(window.scrollY > 50);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isAffixed ? "bg-white shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto w-full max-w-screen-xl py-4 lg:py-6 px-4">
        <div className="flex items-center justify-between">
          <div className={`text-3xl font-bold ${isAffixed ? "text-blue-600" : "text-yellow-300"}`}>
            Varun
          </div>
          <nav className="hidden space-x-6 md:flex">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition duration-300 ${
                  isAffixed 
                    ? "text-gray-700 hover:text-blue-600" 
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden space-x-4 md:flex">
            <a
              href="mailto:jadhavvarun67@gmail.com"
              className={`rounded-full px-4 py-2 font-medium transition duration-300 ${
                isAffixed
                  ? "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  : "border border-white text-white hover:bg-white hover:text-blue-600"
              }`}
            >
              Email Me
            </a>
            <a
              href="/VarunJ-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-4 py-2 font-medium transition duration-300 ${
                isAffixed
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-yellow-300 text-blue-600 hover:bg-yellow-400"
              }`}
            >
              Resume
            </a>
          </div>
          <button
            className={`md:hidden ${isAffixed ? "text-blue-600" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <RiCloseLine className="h-8 w-8" />
            ) : (
              <RiMenu3Line className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 rounded-lg ${
            isAffixed ? "bg-white shadow-lg" : "bg-blue-600 bg-opacity-90"
          }`}>
            <nav className="flex flex-col space-y-4 p-4">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition duration-300 ${
                    isAffixed 
                      ? "text-gray-700 hover:text-blue-600" 
                      : "text-white hover:text-yellow-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="mailto:jadhavvarun67@gmail.com"
                className={`rounded-full px-4 py-2 font-medium text-center transition duration-300 ${
                  isAffixed
                    ? "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    : "border border-white text-white hover:bg-white hover:text-blue-600"
                }`}
              >
                Email Me
              </a>
              <a
                href="/path-to-your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full px-4 py-2 font-medium text-center transition duration-300 ${
                  isAffixed
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-yellow-300 text-blue-600 hover:bg-yellow-400"
                }`}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;