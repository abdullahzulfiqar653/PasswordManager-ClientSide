function Navbar() {
  return (
    <header className="bg-transparent z-10 relative">
      <section className="container">
        <nav className="flex justify-between items-center py-[11px] gradient-border">
          <div className="flex items-center gap-[15px]">
            <img src="/logo.svg" className="cursor-pointer" />
            <h2 className="text-[22px] text-white">Password Manager</h2>
          </div>
          <div className="items-center gap-[95px] hidden lg:flex">
            <button className="outline-none cursor-pointer border-none text-[20px] leading-[26px] font-[400] text-white">
              Download
            </button>
            <div className="flex items-center gap-[39px]">
              <button className="outline-none border-none cursor-pointer text-[20px] leading-[26px] font-[400] text-white">
                Login{" "}
              </button>
              <button className="outline-none text-[20px] border-[1px] cursor-pointer border-[#FFFFFF] py-[22px] px-[40px] rounded-[22px] leading-[26px] font-[400] text-white">
                Register web
              </button>
            </div>
          </div>
          <img src="/hamburger.svg" className="block lg:hidden" />
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
