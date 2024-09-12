import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <header className="z-10 relative bg-[linear-gradient(352deg,_rgba(14, 26, 96, 0.00)_4.12%,_#0E1A60_72.05%)]">
      <section className="md:container">
        <nav className="flex justify-around md:justify-between md:items-center py-[11px] gradient-border">
          <Link to="/" className="flex items-center gap-[6px] md:gap-[15px]">
            <img src="/logo.svg" className="cursor-pointer w-10 md:w-full ml-4 md:ml-0" />
            <h2 className="md:text-[22px] xs:font-medium xs:pb-2 text-[16px] md:font-normal text-white whitespace-nowrap">
              Password Manager
            </h2>
          </Link>
          <div className="items-center gap-[95px] hidden md:flex">
            {/* <button className="dm-sans outline-none cursor-pointer border-none text-[20px] leading-[26px] font-[400] text-white">
              Download
            </button> */}
            <div className="flex items-center gap-[39px]">
              <Link
                to="/auth/login"
                className="dm-sans outline-none border-none cursor-pointer text-[20px] leading-[26px] font-[400] text-white"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="dm-sans outline-none text-[20px] whitespace-nowrap cursor-pointer border-[#FFFFFF] py-[22px] px-[40px] rounded-[22px] leading-[26px] font-[400] text-white"
              >
                Register
              </Link>
            </div>
          </div>
          {/*
            <img
              src="/hamburger.svg"
              className="sm:block md:hidden cursor-pointer"
              onClick={toggleMenu}
              alt="Menu"
            />
           "1px solid white", borderRadius: "5px" }}
            >
            */}

          {/* Mobile menu (Collapsible) */}
            <Link
              to="/auth/register"
              className="dm-sans w-full pt-1 pr-4 pb-2 text-end text-[16px] font-[400] text-white md:hidden"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
