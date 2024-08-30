import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import useCreateToken from "../hooks/useCreateToken";
import { useState } from "react";
import Words from "../data/Seeds";

function Login() {
  const navigate = useNavigate();
  const { mutate } = useCreateToken();
  const { isAuthenticated, login, logout } = useAuth();

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [seedsValue, setSeedsValue] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    // login();
    // navigate("/dashboard/folders");
  };

  const handleSubmit = () => {
    mutate(seedsValue.join(" "), {
      onSuccess: (res) => {
        login();
        navigate("/dashboard/folders");
      },
      onError: (error) => {
        setError("Login failed. Please check your credentials.", error);
      },
    });
  };

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    console.log(value);
    console.log(value.split(" ").length);
    setInputValue(value);
    if (value.split(" ").length > 1) {
      setSeedsValue(value.split(" "));
    } else {
      if (value.length > 0) {
        const filteredSuggestions = Words.filter((word) =>
          word.toLowerCase().startsWith(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue("");
    setSeedsValue([...seedsValue, suggestion]);
    setSuggestions([]);
  };

  const removeSeed = (indexToRemove) => {
    setSeedsValue(seedsValue.filter((_, index) => index !== indexToRemove));
  };


  return (
    <section className="flex min-h-screen w-full justify-between flex-col-reverse lg:flex-row">
      <section className="w-full lg:w-[45%] lg:px-[100px] pb-[54px] lg:pb-[182px] flex justify-center items-center">
        <div className="hidden lg:flex flex-col gap-[26px] mt-[95px]">
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
          <img className="w-[337px]" src="/loginlock.png" />
        </div>
        <img className="block lg:hidden" src="/loginlockv2.svg" />
      </section>
      <section className="w-full flex-col items-center lg:w-[55%] bg-[#101E71] rounded-[0px_0px_60px_60px] lg:rounded-[166px_0px_0px_166px] px-[20px] lg:px-[85px] pb-[34px] lg:pb-[182px] flex justify-center">
        <nav className="lg:hidden flex justify-center items-center py-[14px] gradient-border">
          <Link to="/" className="flex items-center gap-[15px]">
            <img src="/logov2.svg" className="cursor-pointer" />
            <h2 className="text-[12px] leading-[36px] font-[400] text-white">
              Password Manager
            </h2>
          </Link>
        </nav>
        <div className="w-full mt-[37px] lg:mt-[95px] flex flex-col gap-[30px] lg:gap-[42px] max-w-[637px]">
          <img
            className="w-[173px] lg:w-[255px] mx-auto"
            src="/loginmainlogo.svg"
          />
          <h3 className="text-white text-center text-[31px] lg:text-[46px] leading-[43px] lg:leading-[64px] font-[400]">
            Log In
          </h3>
          <form className="flex flex-col gap-[42px] lg:gap-[92px]">
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center justify-between">
                <label className="dm-sans text-[#DFDFDF] text-[16px] leading-[32px] font-[400]">
                  Key Seed
                </label>
                <span>
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13.5" cy="13.5" r="13.5" fill="#1E9700" />
                    <path
                      d="M9 14L12.5 17.5L19.5 10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="border-[1px] rounded-[10px] flex gap-[8px] py-[15px] px-[19px] flex-wrap border-[#28399F] outline-none bg-[#0E1A60]">
                {seedsValue?.map((seed, index) => (
                  <span
                    key={index}
                    className="group cursor-pointer dm-sans border-[#9F42FF] border-[1px] px-[8px] text-[16px] leading-[27px] font-[400] text-white rounded-[6px]"
                  >
                    {seed}
                    <span
                      className="cursor-pointer ml-1 text-[#ab1c1c] text-xl hidden group-hover:inline"
                      onClick={() => removeSeed(index)}
                    >
                      x
                    </span>
                  </span>
                ))}
                {seedsValue.length < 16 && (
                  <input
                    className="dm-sans outline-none bg-[#0E1A60] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
                    placeholder="Enter your key seed..."
                    value={inputValue}
                    onChange={(e) => handleInputChange(e)}
                  />
                )}
              </div>
              <div className="flex gap-[8px] mt-[11px] flex-wrap">
                {suggestions.map((seed, index) => (
                  <span
                    onClick={() => handleSuggestionClick(seed)}
                    key={index}
                    className="dm-sans cursor-pointer border-[#9F42FF] border-[1px] px-[8px] text-[16px] leading-[27px] font-[400] text-white rounded-[6px]"
                  >
                    {seed}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[14.64px] lg:gap-[32px]">
              <button
                onClick={handleSubmit}
                // type="submit"
                className="mx-[auto] bg-[linear-gradient(90deg,_#A143FF_0%,_#5003DB_100%)] py-[10px] 
              lg:py-[19px] max-w-[312px] w-[100%] rounded-[11.61px] lg:rounded-[18.37px] outline-none 
              border-none text-[12px] lg:text-[15.5px] leading-[15.26px] 
              lg:leading-[20.18px] font-[400] text-[#FFFFFF66] dm-sans"
              >
                {/* <span className="flex ml-28"> 
                  <svg
                  width="40"
                  height="8"
                  viewBox="0 0 80 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#3498db">
                    <animate
                      attributeName="cy"
                      values="10;5;10"
                      dur="0.6s"
                      keyTimes="0;0.5;1"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="40" cy="10" r="10" fill="#3498db">
                    <animate
                      attributeName="cy"
                      values="10;5;10"
                      dur="0.6s"
                      keyTimes="0;0.5;1"
                      begin="0.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="70" cy="10" r="10" fill="#3498db">
                    <animate
                      attributeName="cy"
                      values="10;5;10"
                      dur="0.6s"
                      keyTimes="0;0.5;1"
                      begin="0.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg></span> */}
                Next
              </button>
              <p className="dm-sans text-center text-[#DFDFDF] text-[12px] lg:text-[16px] leading-[32px] font-[400]">
                Don’t you have any account?{" "}
                <Link className="text-[#A143FF]" to="/auth/register">
                  {" "}
                  Register{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
        <img
          className="hidden lg:block absolute right-0 top-[-10px]"
          src="/loginpattern.svg"
        />
      </section>
    </section>
  );
}

export default Login;
