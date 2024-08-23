import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="z-10 relative bg-[linear-gradient(352deg,_rgba(14, 26, 96, 0.00)_4.12%,_#0E1A60_72.05%)]">
      <section className="container">
        <nav className="flex justify-between items-center py-[11px] gradient-border">
          <Link to="/" className="flex items-center gap-[15px]">
            <img src="/logo.svg" className="cursor-pointer" />
            <h2 className="text-[22px] text-white">Password Manager</h2>
          </Link>
          <div className="items-center gap-[95px] hidden lg:flex">
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
          <img src="/hamburger.svg" className="block lg:hidden" />
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
