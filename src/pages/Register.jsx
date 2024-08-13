import { Link } from "react-router-dom";
import RegisterInstruction from "../components/RegistrationInstruction";
import RegistrationSeed from "../components/RegistrationSeed";
import { useState } from "react";

function Register() {
  const [isAgree, setIsAgree] = useState(false)
  const agreementHandler = ()=> setIsAgree(true)
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
            <p className="text-[18px] leading-[26px] font-[400] text-white">
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
          {!isAgree ? <RegisterInstruction agreementHandler={agreementHandler} /> : <RegistrationSeed />}
          <img
        className="hidden lg:block absolute right-0 top-[-10px]"
        src="/loginpattern.svg"
      />
        </div>
      </section>
      {/* <section className="w-full flex-col items-center lg:w-[55%] bg-[#101E71] rounded-[0px_0px_60px_60px] lg:rounded-[166px_0px_0px_166px] px-[20px] lg:px-[85px] pb-[34px] lg:pb-[182px] flex justify-center"> */}
      {/* <nav className="block lg:hidden flex justify-center items-center py-[14px] gradient-border">
          <Link to="/" className="flex items-center gap-[15px]">
            <img src="/logov2.svg" className="cursor-pointer" />
            <h2 className="text-[12px] leading-[36px] font-[400] text-white">
              Password Manager
            </h2>
          </Link>
        </nav> */}
      {/* <div className="w-full mt-[37px] lg:mt-[95px] flex flex-col gap-[30px] lg:gap-[42px] max-w-[637px]">
          {true ? (
            <img
              className="w-[173px] lg:w-[255px] mx-auto"
              src="/registrationlogo.svg"
            />
          ) : (
            <img
              className="w-[173px] lg:w-[255px] mx-auto"
              src="/registrationlogov2.svg"
            />
          )}

          <h3 className="text-white text-center text-[31px] lg:text-[46px] leading-[43px] lg:leading-[64px] font-[400]">
            Register Account
          </h3>
          <form className="flex flex-col gap-[42px] lg:gap-[92px]">
            <div className="flex flex-col gap-[4px]">
              <div className="flex flex-col gap-[9px]">
                <p className="text-[#DFDFDF] text-[16px] leading-[27px] font-[400] text-center">
                  Important Note :
                </p>
                <p className="text-[#DFDFDF] text-[16px] leading-[27px] font-[400] text-center">
                  On the next page you will see a series of 16 words. This is
                  your unique and private seed and it is the ONLY way to recover
                  your wallet in case of loss or manifestation. It is your
                  responsibility to write it down and store it in a safe place
                  outside of the password manager app
                </p>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="border-[1px] flex gap-[8px] py-[21px] px-[19px] flex-wrap border-[#28399F] outline-none bg-[#0E1A60]">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                    <span className="border-[#9F42FF] border-[1px] px-[8px] text-[16px] leading-[27px] font-[400] text-white rounded-[6px]">
                      POWER
                    </span>
                  ))}
                </div>
                <p className="text-[#A143FF] text-[16px] leading-[27px] font-[400]">
                  Please write these down incase you lose your seed
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[14.64px] lg:gap-[32px]">
              <button
                className="mx-[auto] bg-[linear-gradient(90deg,_#A143FF_0%,_#5003DB_100%)] py-[10px] 
              lg:py-[19px] max-w-[312px] w-[100%] rounded-[11.61px] lg:rounded-[18.37px] outline-none 
              border-none text-[12px] lg:text-[15.5px] leading-[15.26px] 
              lg:leading-[20.18px] font-[400] text-white"
              >
                I understand, show me my seed
              </button>
              <p className="text-center text-[#DFDFDF] text-[12px] lg:text-[16px] leading-[32px] font-[400]">
                Already have account?
                <Link className="text-[#A143FF]" to="/auth/login">
                  {" "}
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div> */}
      {/* <img
          className="hidden lg:block absolute right-0 top-[-10px]"
          src="/loginpattern.svg"
        />
      </section> */}
    </section>
  );
}

export default Register;
