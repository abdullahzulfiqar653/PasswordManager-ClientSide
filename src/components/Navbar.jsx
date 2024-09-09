import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-10 relative bg-[linear-gradient(352deg,_rgba(14, 26, 96, 0.00)_4.12%,_#0E1A60_72.05%)]">
      <section className="container">
        <nav className="flex justify-between items-center py-[11px] gradient-border">
          <Link to="/" className="flex items-center gap-[15px]">
            <img src="/logo.svg" className="cursor-pointer w-10 md:w-full" />
            <h2 className="md:text-[22px] text-[19px] text-white whitespace-nowrap">
              Password Manager
            </h2>
          </Link>
          <div className="items-center gap-[95px] hidden md:flex">
            <button className="dm-sans outline-none cursor-pointer border-none text-[20px] leading-[26px] font-[400] text-white">
              Download
            </button>
            <div className="flex items-center gap-[39px]">
              <Link
                to="/auth/login"
                className="dm-sans outline-none border-none cursor-pointer text-[20px] leading-[26px] font-[400] text-white"
              >
                Login{" "}
              </Link>
              <Link
                to="/auth/register"
                className="dm-sans outline-none text-[20px] border-[1px] cursor-pointer border-[#FFFFFF] py-[22px] px-[40px] rounded-[22px] leading-[26px] font-[400] text-white"
              >
                Register web
              </Link>
            </div>
          </div>

          {!isOpen ? (
            <img
              src="/hamburger.svg"
              className="sm:block md:hidden cursor-pointer"
              onClick={toggleMenu}
              alt="Menu"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:block md:hidden cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
              onClick={toggleMenu}
              role="button"
              alt="Close Menu"
              style={{ border: "1px solid white", borderRadius: "5px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}

          {/* Mobile menu (Collapsible) */}
          <div
            className={`transform ${
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            } transition-transform transition-opacity ease-out duration-300 absolute z-[999] top-[55px] right-0 bg-[#0b154d] w-full p-5 md:hidden`}
          >
            <button className="dm-sans w-full text-left text-[17px]  font-[400] text-white mb-2">
              Download
            </button>
            <Link
              to="/auth/login"
              className="dm-sans w-full text-left text-[17px]  font-[400] text-white block mb-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="dm-sans w-full text-left text-[17px] font-[400] text-white py-[5px] px-[20px] border-[1px] border-white rounded-[15px]"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
