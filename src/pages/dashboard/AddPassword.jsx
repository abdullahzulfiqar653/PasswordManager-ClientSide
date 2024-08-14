import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

function AddPassword() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const passwordVisibilityHandler = () =>
    setIsPasswordShow((preValue) => !preValue);
  const [showPicker, setShowPicker] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject.emoji, "emojiObject");
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <section className="w-full relative flex mt-[42px] pb-[56px] container gap-[7px]">
      <section className="w-full flex-1 flex flex-col md:gap-[20px]">
        <h4 className=" text-white text-[32px] leading-[64px] font-[400]">
          Root . Add Entry
        </h4>
        <form className="flex flex-col gap-[25px]">
          <div className="flex flex-col gap-[15px] md:gap-[38px] flex-wrap md:flex-row">
            <div className="flex-1 flex flex-col gap-[4px]">
              <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
                Title
              </label>
              <input className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]" />
            </div>
            <div className="flex-1 flex flex-col gap-[4px]">
              <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
                Username
              </label>
              <input className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]" />
            </div>
          </div>
          <div className="flex flex-col gap-[15px] md:gap-[38px] flex-wrap md:flex-row">
            <div className="flex-1 flex flex-col gap-[4px]">
              <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
                Password
              </label>
              <div className="relative flex-1">
                <input
                  type={isPasswordShow ? "text" : "password"}
                  className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
                />
                <span
                  onClick={passwordVisibilityHandler}
                  className="cursor-pointer absolute top-[50%] right-[13px] translate-y-[-50%]"
                >
                  {isPasswordShow ? <CloseEye /> : <OpenEye />}
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[4px]">
              <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
                URL
              </label>
              <input
                className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
                placeholder="https://examples.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[15px] md:gap-[38px] flex-wrap md:flex-row">
            <div className="relative flex-1 flex flex-col gap-[4px]">
              <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
                Select Emoji
              </label>
              <div
                className="relative flex-1 cursor-pointer"
                onClick={() => setShowPicker((val) => !val)}
              >
                <input
                  type="text"
                  value={inputStr}
                  onChange={(e) => setInputStr(e.target.value)}
                  className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
                />
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[50%] translate-y-[-50%] right-[20px]"
                >
                  <path
                    d="M18 0.623409C18 0.465262 17.9396 0.30342 17.8223 0.182052C17.5877 -0.0606842 17.2039 -0.0606842 16.9693 0.182052L8.94047 8.49025L1.02893 0.30342C0.794353 0.0606833 0.410505 0.0606833 0.175932 0.30342C-0.0586414 0.546156 -0.0586414 0.943361 0.175932 1.1861L8.51397 9.81795C8.74854 10.0607 9.13239 10.0607 9.36697 9.81795L17.8223 1.06841C17.9431 0.943362 18 0.785233 18 0.623409Z"
                    fill="white"
                  />
                </svg>
              </div>
              {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
            </div>
            <div className="flex-1 flex flex-col gap-[4px]">
              <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
                Tags
              </label>
              <input className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]" />
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
              Notes
            </label>
            <textarea
              rows={5}
              className=" w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
            ></textarea>
          </div>
          <div className="flex gap-[12px] justify-center md:justify-end mt-[25px]">
            <button className="py-[17px] w-[140px] rounded-[18.37px] bg-[#101E71] border-none outline-none text-white text-[15.5px] font-[400] dm-sans">
              Cancel
            </button>
            <button
              className="py-[17px] w-[140px] rounded-[18.37px] bg-[#101E71] border-none outline-none text-white text-[15.5px] font-[400] 
            dm-sans
            bg-[linear-gradient(90deg,_#A143FF_0%,_#5003DB_100%)]
"
            >
              Ok
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default AddPassword;

const CloseEye = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5104 12.7C15.2504 14.11 14.1004 15.26 12.6904 15.52"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.47 14.53L2 22"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.0003 2L14.5303 9.47"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const OpenEye = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5104 12.7C15.2504 14.11 14.1004 15.26 12.6904 15.52"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
