import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterInstruction from "../components/RegistrationInstruction";
import RegistrationSeed from "../components/RegistrationSeed";
import useGetSeeds from "../hooks/useGetSeeds";

function Register() {
  const [isAgree, setIsAgree] = useState(false);
  const agreementHandler = () => setIsAgree(true);

  const { data } = useGetSeeds();
  const [seedsData, setSeedsData] = useState(null);
  const handlePassData = () => {
    setSeedsData(data);
  };

  return (
    <section className="flex min-h-screen w-full justify-between flex-col-reverse lg:flex-row">
      <section className="w-full lg:w-[45%] lg:px-[100px] pb-[54px] lg:pb-[182px] flex justify-center items-center">
        <div className="hidden lg:flex flex-col gap-[46px] mt-[95px]">
          <div className="flex flex-col gap-[29px] max-w-[450px]">
            <Link to="/" className="flex items-center gap-[15px]">
              <img src="/logo.svg" className="cursor-pointer" />
              <h2 className="text-[22px] text-white font-[400] leading-[64px]">
                Password Manager
              </h2>
            </Link>
            <p className="dm-sans text-[18px] leading-[26px] font-[400] text-white">
              Login to your account with seed , We do the heavy lifting in a
              no-nonsense, ad-free, tracker-free, and cloud-free manner. Free
              and open source.
            </p>
          </div>
          <img className="w-[337px]" src="/registerlock.png" />
        </div>
        <img className="block lg:hidden" src="/loginlockv2.svg" />
      </section>
      <section className="w-full flex-col items-center lg:w-[55%] bg-[#101E71] rounded-[0px_0px_60px_60px] lg:rounded-[166px_0px_0px_166px] px-[20px] lg:px-[85px] pb-[34px] lg:pb-[182px] flex justify-center">
        <div className="w-full mt-[37px] lg:mt-[95px] flex flex-col gap-[30px] lg:gap-[42px] max-w-[637px]">
          {!isAgree ? (
            <RegisterInstruction
              agreementHandler={agreementHandler}
              onSelectSeeds={handlePassData}
            />
          ) : (
            <RegistrationSeed seedsData={seedsData} />
          )}
          <img
            className="hidden lg:block absolute right-0 top-[-10px]"
            src="/loginpattern.svg"
          />
        </div>
      </section>
    </section>
  );
}

export default Register;
