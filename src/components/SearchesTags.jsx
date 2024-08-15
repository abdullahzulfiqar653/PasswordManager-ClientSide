import React from "react";

function SearchesTags() {
  return (
    <section className="min-h-[324px] flex flex-col gap-[18px]">
      <h4 className="pl-[21px] text-white text-[16px] mt-[25px] font-[400]">
        Searches and Tags
      </h4>
      <ul className="flex flex-col gap-[14px] justify-center">
        <li className="cursor-pointer flex gap-[7px] items-center pl-[21px]">
          <DB />
          <h4 className=" text-[#DFDFDF] text-[12px] font-[400] dm-sans">
            Clear Search
          </h4>
        </li>
        <li className="cursor-pointer flex gap-[7px] items-center pl-[21px]">
          <DB />
          <h4 className="text-[#DFDFDF] text-[12px] font-[400] dm-sans">
            All Entities
          </h4>
        </li>
        <li className="cursor-pointer flex gap-[7px] items-center pl-[21px]">
          <DB />
          <h4 className="text-[#DFDFDF] text-[12px] font-[400] dm-sans">
            Expired
          </h4>
        </li>
        <li className="cursor-pointer flex gap-[7px] items-center pl-[21px]">
          <DB />
          <h4 className="text-[#DFDFDF] text-[12px] font-[400] dm-sans">
            Week Passwords
          </h4>
        </li>
      </ul>
      <div className="gradient-border"></div>
      <ul className="flex flex-col gap-[14px] justify-center">
        <li className="cursor-pointer flex gap-[7px] items-center pl-[21px]">
          <Tag />
          <h4 className=" text-[#DFDFDF] text-[12px] font-[400] dm-sans">
            66 tags
          </h4>
        </li>
      </ul>
    </section>
  );
}

export default SearchesTags;

const DB = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3.33333C1 4.62211 3.786 5.66667 7.22222 5.66667C10.6584 5.66667 13.4444 4.62211 13.4444 3.33333C13.4444 2.04456 10.6584 1 7.22222 1C3.786 1 1 2.04456 1 3.33333Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 3.33325V7.99992C1 9.2887 3.786 10.3333 7.22222 10.3333M13.4444 7.61103V3.33325"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 8V12.6667C1 13.9554 3.786 15 7.22222 15M13.6 14.3778L15 15.7778M9.55556 12.6667C9.55556 13.2855 9.80139 13.879 10.239 14.3166C10.6766 14.7542 11.2701 15 11.8889 15C12.5077 15 13.1012 14.7542 13.5388 14.3166C13.9764 13.879 14.2222 13.2855 14.2222 12.6667C14.2222 12.0478 13.9764 11.4543 13.5388 11.0168C13.1012 10.5792 12.5077 10.3333 11.8889 10.3333C11.2701 10.3333 10.6766 10.5792 10.239 11.0168C9.80139 11.4543 9.55556 12.0478 9.55556 12.6667Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Tag = () => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 1V5.586L10 12.586L14.586 8L7.586 1H3ZM2 1C2 0.734784 2.10536 0.48043 2.29289 0.292893C2.48043 0.105357 2.73478 0 3 0H7.586C7.85119 5.66374e-05 8.10551 0.105451 8.293 0.293L15.293 7.293C15.4805 7.48053 15.5858 7.73484 15.5858 8C15.5858 8.26516 15.4805 8.51947 15.293 8.707L10.707 13.293C10.5195 13.4805 10.2652 13.5858 10 13.5858C9.73484 13.5858 9.48053 13.4805 9.293 13.293L2.293 6.293C2.10545 6.10551 2.00006 5.85119 2 5.586V1Z"
      fill="white"
    />
    <path
      d="M5.5 4C5.36739 4 5.24021 3.94732 5.14645 3.85355C5.05268 3.75979 5 3.63261 5 3.5C5 3.36739 5.05268 3.24021 5.14645 3.14645C5.24021 3.05268 5.36739 3 5.5 3C5.63261 3 5.75979 3.05268 5.85355 3.14645C5.94732 3.24021 6 3.36739 6 3.5C6 3.63261 5.94732 3.75979 5.85355 3.85355C5.75979 3.94732 5.63261 4 5.5 4ZM5.5 5C5.89782 5 6.27936 4.84196 6.56066 4.56066C6.84196 4.27936 7 3.89782 7 3.5C7 3.10218 6.84196 2.72064 6.56066 2.43934C6.27936 2.15804 5.89782 2 5.5 2C5.10218 2 4.72064 2.15804 4.43934 2.43934C4.15804 2.72064 4 3.10218 4 3.5C4 3.89782 4.15804 4.27936 4.43934 4.56066C4.72064 4.84196 5.10218 5 5.5 5ZM1 6.086C1.00006 6.35119 1.10545 6.60551 1.293 6.793L8.75 14.25L8.707 14.293C8.51947 14.4805 8.26516 14.5858 8 14.5858C7.73484 14.5858 7.48053 14.4805 7.293 14.293L0.293 7.293C0.105451 7.10551 5.66374e-05 6.85119 0 6.586L0 2C0 1.73478 0.105357 1.48043 0.292893 1.29289C0.48043 1.10536 0.734784 1 1 1V6.086Z"
      fill="white"
    />
  </svg>
);
