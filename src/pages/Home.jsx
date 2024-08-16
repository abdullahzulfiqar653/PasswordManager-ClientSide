import React from "react";

function Home() {
  return (
    <section className="main-banner w-full relative">
      <section className="hero-section relative w-full h-full mx-auto max-w-screen-2xl">
        <section className="mt-[36px] lg:mt-[85px] xl:mt-[109px] flex flex-col container h-full">
          <section className="h-full flex items-center">
            <section className="relative z-10 md:max-w-[330px] lg:max-w-[534px]  w-full flex flex-col gap-[4.4px] lg:gap-[6px]">
              <div
                className="flex gap-[7px] items-center justify-center py-[8px] px-[8px] 
              max-w-[247px] w-full gradient-border-v2 rounded-[6px] bg-[#FFFFFF24]"
              >
                <img src="/lock.svg" />
                <h4 className="dm-sans text-[8px] lg:text-[12px] font-[400] text-[#FDC60B]">
                  Cross-platform Password Manager
                </h4>
              </div>
              <div className="flex flex-col gap-[41px] lg:gap-[61px]">
                <div className="flex flex-col gap-[21px] lg:gap-[31px]">
                  <h1 className="text-[34px] lg:text-[56px] font-[400] leading-[40.46px] lg:leading-[64px] text-white">
                    Password Manager PC Protect your systems
                  </h1>
                  <p className="dm-sans text-[12px] lg:text-[16px] font-[400] leading-[20.23px] lg:leading-[32px] text-white">
                    Let us store your passwords and auto-fill them into your
                    favorite apps, so you can forget all about them. <br />
                    We do the heavy lifting in a no-nonsense, ad-free,
                    tracker-free, and cloud-free manner. Free and open source.
                  </p>
                </div>
                <button
                  className="bg-[linear-gradient(90deg,_#A143FF_0%,_#5003DB_100%)] py-[10px] 
                lg:py-[18px] px-[37px] rounded-[11.61px] lg:rounded-[18.37px] w-fit outline-none 
                border-none flex items-center gap-[5.71px] lg:gap-[10px] text-[12px] lg:text-[15.5px] leading-[15.26px] 
                lg:leading-[20.18px] font-[400] text-white dm-sans"
                >
                  <img src="/download.svg" />
                  Download
                </button>
              </div>
            </section>
          </section>
          <img className="block md:hidden" src="/HomeV2.png" />
        </section>
        <img
          className="z-0 hidden md:max-w-[600px] lg:max-w-[700px] xl:max-w-fit md:block absolute top-[50%] translate-y-[-50%] right-0"
          src="/Home.png"
        />
      </section>
      {/* <img src="/HomeBottomBars.png" className="absolute top-full mt-[10px]" /> */}
    </section>
  );
}

export default Home;
