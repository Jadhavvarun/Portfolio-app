import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export const Header: React.FC = () => {
  const [isAffixed, setIsAffixed] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setIsAffixed(window.scrollY > 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`mx-3 md:fixed md:top-2 md:right-0 md:left-0 md:mx-0 ${
          isAffixed ? "affix" : ""
        }`}
      >
        <div className={`py-3  ${isAffixed ? "affix" : ""}`} id="main-header">
          <div className="md:m-auto md:w-[1140px]">
            <div>
              <div className={`py-3 ${isAffixed ? "navbar" : ""}`}>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-[#4318FF] ">
                    Varun
                  </div>
                  <nav className="hidden space-x-6 md:flex">
                    <a
                      href="#about"
                      className="text-gray-600  hover:text-gray-800"
                    >
                      About
                    </a>
                    <a
                      href="#service"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Skills
                    </a>
                    <a
                      href="#pricing"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Projects
                    </a>
                    <a
                      href="#resource"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Contact
                    </a>
                  </nav>
                  <div className="hidden  space-x-4 md:flex">
                    <a
                      href="mailto:jadhavvarun67@gmail.com"
                      className="rounded border border-[#4318FF] px-4 py-2 text-[#4318FF] hover:bg-blue-50"
                    >
                      Email Me
                    </a>
                    <button className="rounded bg-[#4318FF] px-4 py-2 text-white hover:bg-blue-600">
                      Resume
                    </button>
                  </div>
                  <button
                    className="text-gray-600 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? (
                      <RiCloseLine className="mx-auto h-10 w-10 " />
                    ) : (
                      <RiMenu3Line className="mx-auto h-10 w-10" />
                    )}
                  </button>
                </div>
                {isMenuOpen && (
                  <div className=" bg-white  md:hidden  ">
                    <nav className="mt-4 space-y-4">
                      <a
                        href="#about"
                        className="block text-gray-600 hover:text-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </a>
                      <a
                        href="#service"
                        className="block text-gray-600 hover:text-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Skills
                      </a>
                      <a
                        href="#docs"
                        className="block text-gray-600 hover:text-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Projects
                      </a>
                      <a
                        href="#pricing"
                        className="block text-gray-600 hover:text-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </a>
                    </nav>
                    <div className="mt-6 flex w-full items-center justify-center gap-4 py-4">
                      <a
                        href="mailto:jadhavvarun67@gmail.com"
                        className="w-full rounded border border-[#4318FF] px-4 py-2 text-[#4318FF] hover:bg-blue-50"
                      >
                        Email Me
                      </a>
                      <button className="w-full rounded bg-[#4318FF] px-4 py-2 text-white hover:bg-blue-600">
                        Resume
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
