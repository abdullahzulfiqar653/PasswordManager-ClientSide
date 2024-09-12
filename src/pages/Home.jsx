import React from "react";

function Home() {
  return (
    <>
      <section className="main-banner w-full relative bg-[#071a64]">
        {/* <section className="hero-section relative w-full h-full mx-auto max-w-screen-2xl">
          <section className="container md:p-0 relative z-20 py-[26px] md:py-[180px]">
            <div className="flex justify-between w-full flex-col md:flex-row">
              <div className="flex flex-col gap-[17px] w-fit items-start">
                <button
                  className="rounded-[12px] border-[0.8px] border-[#fff] 
            bg-[linear-gradient(180deg,rgba(255, 255, 255, 0.19)_0%,rgba(153, 153, 153, 0.19)_100%)]
            backdrop-blur-[11px] flex justify-between p-[10px] items-center
            text-[#FDC60B] font-[400] text-[12px] dm-sans
            gap-[9px] outline-none min-w-[254px]
            "
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7188 5V6.3125C11.4438 6.275 11.1313 6.25625 10.7812 6.25V5C10.7812 3.03125 10.225 1.71875 7.5 1.71875C4.775 1.71875 4.21875 3.03125 4.21875 5V6.25C3.86875 6.25625 3.55625 6.275 3.28125 6.3125V5C3.28125 3.1875 3.71875 0.78125 7.5 0.78125C11.2813 0.78125 11.7188 3.1875 11.7188 5Z"
                      fill="url(#paint0_linear_17_34)"
                    />
                    <path
                      d="M11.7188 6.3125C11.4438 6.275 11.1313 6.25625 10.7812 6.25H4.21875C3.86875 6.25625 3.55625 6.275 3.28125 6.3125C1.6875 6.50625 1.25 7.2875 1.25 9.375V10.625C1.25 13.125 1.875 13.75 4.375 13.75H10.625C13.125 13.75 13.75 13.125 13.75 10.625V9.375C13.75 7.2875 13.3125 6.50625 11.7188 6.3125ZM5.44375 10.4437C5.325 10.5562 5.1625 10.625 5 10.625C4.91875 10.625 4.8375 10.6063 4.7625 10.575C4.68125 10.5438 4.61875 10.5 4.55625 10.4437C4.44375 10.325 4.375 10.1625 4.375 10C4.375 9.91875 4.39375 9.8375 4.425 9.7625C4.45625 9.6875 4.5 9.61875 4.55625 9.55625C4.61875 9.5 4.68125 9.45625 4.7625 9.425C4.99375 9.325 5.26875 9.38125 5.44375 9.55625C5.5 9.61875 5.54375 9.6875 5.575 9.7625C5.60625 9.8375 5.625 9.91875 5.625 10C5.625 10.1625 5.55625 10.325 5.44375 10.4437ZM8.075 10.2375C8.04375 10.3125 8 10.3812 7.94375 10.4437C7.825 10.5562 7.6625 10.625 7.5 10.625C7.33125 10.625 7.175 10.5562 7.05625 10.4437C7 10.3812 6.95625 10.3125 6.925 10.2375C6.89375 10.1625 6.875 10.0812 6.875 10C6.875 9.83125 6.94375 9.675 7.05625 9.55625C7.2875 9.325 7.70625 9.325 7.94375 9.55625C8.05625 9.675 8.125 9.83125 8.125 10C8.125 10.0812 8.10625 10.1625 8.075 10.2375ZM10.4437 10.4437C10.325 10.5562 10.1625 10.625 10 10.625C9.8375 10.625 9.675 10.5562 9.55625 10.4437C9.44375 10.325 9.375 10.1688 9.375 10C9.375 9.83125 9.44375 9.675 9.55625 9.55625C9.79375 9.325 10.2125 9.325 10.4437 9.55625C10.4687 9.5875 10.4937 9.61875 10.5187 9.65625C10.5437 9.6875 10.5625 9.725 10.575 9.7625C10.5938 9.8 10.6062 9.8375 10.6125 9.875C10.6187 9.91875 10.625 9.9625 10.625 10C10.625 10.1625 10.5562 10.325 10.4437 10.4437Z"
                      fill="url(#paint1_linear_17_34)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_17_34"
                        x1="6.09375"
                        y1="0.596875"
                        x2="8.34342"
                        y2="6.60236"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FDC60B" />
                        <stop offset="1" stop-color="#FDE07E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_17_34"
                        x1="5.41667"
                        y1="6"
                        x2="8.26546"
                        y2="14.309"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FDC60B" />
                        <stop offset="1" stop-color="#FDE07E" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Cross-platform Password Manager
                </button>
                <div
                  className="rounded-[16px] border-[0.8px] border-[#fff] 
            bg-[linear-gradient(180deg,rgba(255, 255, 255, 0.19)_0%,rgba(153, 153, 153, 0.19)_100%)]
            backdrop-blur-[11px] flex justify-center p-[10px] items-start
            text-[#FDC60B] font-[400] text-[12px] dm-sans flex-col min-h-[260px]
            gap-[36px] px-[20px] max-w-[370px] relative
            "
                >
                  <h2 className="text-white text-[32px] font-[400] leading-[38px]">
                    Password Manager PC Protect your systems
                  </h2>
                  <button className="bg-white outline-none border-[0.797px] border-[#fff] rounded-[14px] py-[14px] px-[24px] text-[#002550] font-[400] text-[20px] dm-sans">
                    Get Started
                  </button>
                  <span className="absolute left-[100%] top-[50%] translate-y-[-50%]">
                    <svg
                      width="103"
                      height="188"
                      viewBox="0 0 103 188"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_b_17_41)">
                        <mask id="path-1-inside-1_17_41" fill="white">
                          <path d="M103 157.5C103 174.345 89.3447 188 72.5 188C55.6553 188 42 174.345 42 157.5C42 140.655 55.6553 127 72.5 127C89.3447 127 103 140.655 103 157.5ZM48.4492 157.5C48.4492 170.783 59.2171 181.551 72.5 181.551C85.7829 181.551 96.5508 170.783 96.5508 157.5C96.5508 144.217 85.7829 133.449 72.5 133.449C59.2171 133.449 48.4492 144.217 48.4492 157.5Z" />
                        </mask>
                        <path
                          d="M103 157.5C103 174.345 89.3447 188 72.5 188C55.6553 188 42 174.345 42 157.5C42 140.655 55.6553 127 72.5 127C89.3447 127 103 140.655 103 157.5ZM48.4492 157.5C48.4492 170.783 59.2171 181.551 72.5 181.551C85.7829 181.551 96.5508 170.783 96.5508 157.5C96.5508 144.217 85.7829 133.449 72.5 133.449C59.2171 133.449 48.4492 144.217 48.4492 157.5Z"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <path
                          d="M103 157.5C103 174.345 89.3447 188 72.5 188C55.6553 188 42 174.345 42 157.5C42 140.655 55.6553 127 72.5 127C89.3447 127 103 140.655 103 157.5ZM48.4492 157.5C48.4492 170.783 59.2171 181.551 72.5 181.551C85.7829 181.551 96.5508 170.783 96.5508 157.5C96.5508 144.217 85.7829 133.449 72.5 133.449C59.2171 133.449 48.4492 144.217 48.4492 157.5Z"
                          stroke="url(#paint0_linear_17_41)"
                          stroke-width="2"
                          mask="url(#path-1-inside-1_17_41)"
                        />
                      </g>
                      <g filter="url(#filter1_b_17_41)">
                        <circle
                          cx="72.5"
                          cy="157.5"
                          r="21.5"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <circle
                          cx="72.5"
                          cy="157.5"
                          r="21"
                          stroke="url(#paint1_linear_17_41)"
                        />
                      </g>
                      <circle
                        cx="72.5"
                        cy="157.5"
                        r="10.5"
                        fill="url(#paint2_linear_17_41)"
                      />
                      <circle
                        cx="72.5"
                        cy="157.5"
                        r="11"
                        stroke="url(#paint3_linear_17_41)"
                        stroke-opacity="0.23"
                      />
                      <path
                        d="M3 2H8.61291C20.7632 2 30.6129 11.8497 30.6129 24V137.613C30.6129 148.872 39.7405 158 51 158V158"
                        stroke="white"
                      />
                      <circle cx="2" cy="2" r="1.5" stroke="white" />
                      <defs>
                        <filter
                          id="filter0_b_17_41"
                          x="38"
                          y="123"
                          width="69"
                          height="69"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_17_41"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_17_41"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_b_17_41"
                          x="47"
                          y="132"
                          width="51"
                          height="51"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_17_41"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_17_41"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_17_41"
                          x1="72.5"
                          y1="127"
                          x2="72.5"
                          y2="188"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_17_41"
                          x1="86"
                          y1="172"
                          x2="71"
                          y2="138"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_17_41"
                          x1="72.5"
                          y1="147"
                          x2="72.5"
                          y2="168"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4D67FF" />
                          <stop offset="1" stop-color="#8C4CFF" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_17_41"
                          x1="73"
                          y1="142.5"
                          x2="72.4677"
                          y2="168"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="#F2F2F2"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[124px] w-fit items-start py-[141px]">
                <div
                  className="rounded-[16px] border-[0.8px] border-[#fff] 
            bg-[linear-gradient(180deg,_rgba(255, 255, 255, 0.19)_0%,_rgba(153, 153, 153, 0.19)_100%)]
            backdrop-blur-[11px] text-[#FDC60B] font-[400] text-[12px] 
            dm-sans min-h-[147px] px-[20px] max-w-[340px] relative flex flex-col justify-center
            "
                >
                  <h2 className="text-white text-[20px] font-[400] leading-[26px]">
                    Generate Unbreakable Passwords
                  </h2>
                  <p className="text-white text-[14px] font-[400] leading-normal">
                    Use the strongest password for your accounts, located in the
                    internet. Give more work to the Hackers
                  </p>
                  <span className="absolute right-[100%] top-[0%] translate-y-[-50%]">
                    <svg
                      width="208"
                      height="188"
                      viewBox="0 0 208 188"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_b_0_1)">
                        <mask id="path-1-inside-1_0_1" fill="white">
                          <path d="M61 30.5C61 47.3447 47.3447 61 30.5 61C13.6553 61 0 47.3447 0 30.5C0 13.6553 13.6553 0 30.5 0C47.3447 0 61 13.6553 61 30.5ZM6.44917 30.5C6.44917 43.7829 17.2171 54.5508 30.5 54.5508C43.7829 54.5508 54.5508 43.7829 54.5508 30.5C54.5508 17.2171 43.7829 6.44917 30.5 6.44917C17.2171 6.44917 6.44917 17.2171 6.44917 30.5Z" />
                        </mask>
                        <path
                          d="M61 30.5C61 47.3447 47.3447 61 30.5 61C13.6553 61 0 47.3447 0 30.5C0 13.6553 13.6553 0 30.5 0C47.3447 0 61 13.6553 61 30.5ZM6.44917 30.5C6.44917 43.7829 17.2171 54.5508 30.5 54.5508C43.7829 54.5508 54.5508 43.7829 54.5508 30.5C54.5508 17.2171 43.7829 6.44917 30.5 6.44917C17.2171 6.44917 6.44917 17.2171 6.44917 30.5Z"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <path
                          d="M61 30.5C61 47.3447 47.3447 61 30.5 61C13.6553 61 0 47.3447 0 30.5C0 13.6553 13.6553 0 30.5 0C47.3447 0 61 13.6553 61 30.5ZM6.44917 30.5C6.44917 43.7829 17.2171 54.5508 30.5 54.5508C43.7829 54.5508 54.5508 43.7829 54.5508 30.5C54.5508 17.2171 43.7829 6.44917 30.5 6.44917C17.2171 6.44917 6.44917 17.2171 6.44917 30.5Z"
                          stroke="url(#paint0_linear_0_1)"
                          stroke-width="2"
                          mask="url(#path-1-inside-1_0_1)"
                        />
                      </g>
                      <g filter="url(#filter1_b_0_1)">
                        <circle
                          cx="30.5"
                          cy="30.5"
                          r="21.5"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <circle
                          cx="30.5"
                          cy="30.5"
                          r="21"
                          stroke="url(#paint1_linear_0_1)"
                        />
                      </g>
                      <circle
                        cx="30.5"
                        cy="30.5"
                        r="10.5"
                        fill="url(#paint2_linear_0_1)"
                      />
                      <circle
                        cx="30.5"
                        cy="30.5"
                        r="11"
                        stroke="url(#paint3_linear_0_1)"
                        stroke-opacity="0.23"
                      />
                      <path
                        d="M52 31H119.742C131.892 31 141.742 40.8497 141.742 53V165C141.742 177.15 151.592 187 163.742 187H208"
                        stroke="white"
                      />
                      <defs>
                        <filter
                          id="filter0_b_0_1"
                          x="-4"
                          y="-4"
                          width="69"
                          height="69"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_0_1"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_0_1"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_b_0_1"
                          x="5"
                          y="5"
                          width="51"
                          height="51"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_0_1"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_0_1"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="30.5"
                          y1="0"
                          x2="30.5"
                          y2="61"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="44"
                          y1="45"
                          x2="29"
                          y2="11"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="30.5"
                          y1="20"
                          x2="30.5"
                          y2="41"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4D67FF" />
                          <stop offset="1" stop-color="#8C4CFF" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_0_1"
                          x1="31"
                          y1="15.5"
                          x2="30.4677"
                          y2="41"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="#F2F2F2"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>

                <div
                  className="rounded-[16px] border-[0.8px] border-[#fff] 
            bg-[linear-gradient(180deg,_rgba(255, 255, 255, 0.19)_0%,_rgba(153, 153, 153, 0.19)_100%)]
            backdrop-blur-[11px] text-[#FDC60B] font-[400] text-[12px] 
            dm-sans min-h-[147px] px-[20px] max-w-[340px] relative flex flex-col justify-center
            "
                >
                  <h2 className="text-white text-[20px] font-[400] leading-[26px]">
                    Let us store your passwords
                  </h2>
                  <p className="text-white text-[14px] font-[400] leading-normal">
                    Secure way to store your passwords in secrets and manage
                    them. Make your Passwords only for you.
                  </p>
                  <span className="absolute right-[99%] top-[100%] translate-y-[-50%]">
                    <svg
                      width="390"
                      height="135"
                      viewBox="0 0 390 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_0_1)">
                        <g filter="url(#filter1_b_0_1)">
                          <mask id="path-1-inside-1_0_1" fill="white">
                            <path d="M65 96.5C65 113.345 51.3447 127 34.5 127C17.6553 127 4 113.345 4 96.5C4 79.6553 17.6553 66 34.5 66C51.3447 66 65 79.6553 65 96.5ZM10.4492 96.5C10.4492 109.783 21.2171 120.551 34.5 120.551C47.7829 120.551 58.5508 109.783 58.5508 96.5C58.5508 83.2171 47.7829 72.4492 34.5 72.4492C21.2171 72.4492 10.4492 83.2171 10.4492 96.5Z" />
                          </mask>
                          <path
                            d="M65 96.5C65 113.345 51.3447 127 34.5 127C17.6553 127 4 113.345 4 96.5C4 79.6553 17.6553 66 34.5 66C51.3447 66 65 79.6553 65 96.5ZM10.4492 96.5C10.4492 109.783 21.2171 120.551 34.5 120.551C47.7829 120.551 58.5508 109.783 58.5508 96.5C58.5508 83.2171 47.7829 72.4492 34.5 72.4492C21.2171 72.4492 10.4492 83.2171 10.4492 96.5Z"
                            fill="white"
                            fill-opacity="0.3"
                          />
                          <path
                            d="M65 96.5C65 113.345 51.3447 127 34.5 127C17.6553 127 4 113.345 4 96.5C4 79.6553 17.6553 66 34.5 66C51.3447 66 65 79.6553 65 96.5ZM10.4492 96.5C10.4492 109.783 21.2171 120.551 34.5 120.551C47.7829 120.551 58.5508 109.783 58.5508 96.5C58.5508 83.2171 47.7829 72.4492 34.5 72.4492C21.2171 72.4492 10.4492 83.2171 10.4492 96.5Z"
                            stroke="url(#paint0_linear_0_1)"
                            stroke-width="2"
                            mask="url(#path-1-inside-1_0_1)"
                          />
                        </g>
                        <g filter="url(#filter2_b_0_1)">
                          <circle
                            cx="34.5"
                            cy="96.5"
                            r="21.5"
                            fill="white"
                            fill-opacity="0.3"
                          />
                          <circle
                            cx="34.5"
                            cy="96.5"
                            r="21"
                            stroke="url(#paint1_linear_0_1)"
                          />
                        </g>
                        <path
                          d="M45 96.5C45 102.299 40.299 107 34.5 107C28.701 107 24 102.299 24 96.5C24 90.701 34.5 86 34.5 86C34.5 86 45 90.701 45 96.5Z"
                          fill="url(#paint2_linear_0_1)"
                        />
                        <path
                          d="M34.5 86L34.7043 85.5436L34.5 85.4522L34.2957 85.5436L34.5 86ZM34.5 86C34.2957 85.5436 34.2955 85.5437 34.2954 85.5438L34.2948 85.544L34.2929 85.5449L34.2864 85.5478L34.2622 85.5588C34.2412 85.5684 34.2105 85.5825 34.1708 85.601C34.0915 85.638 33.9761 85.6926 33.8298 85.7638C33.5374 85.9063 33.121 86.1158 32.6219 86.3851C31.6249 86.9233 30.2923 87.7036 28.9568 88.6704C27.6241 89.6351 26.2711 90.7977 25.2471 92.1045C24.2248 93.4091 23.5 94.8968 23.5 96.5C23.5 102.575 28.4249 107.5 34.5 107.5C40.5751 107.5 45.5 102.575 45.5 96.5C45.5 94.8968 44.7752 93.4091 43.7529 92.1045C42.7289 90.7977 41.3759 89.6351 40.0432 88.6704C38.7077 87.7036 37.3751 86.9233 36.3781 86.3851C35.879 86.1158 35.4626 85.9063 35.1702 85.7638C35.0239 85.6926 34.9085 85.638 34.8292 85.601C34.7895 85.5825 34.7588 85.5684 34.7378 85.5588L34.7136 85.5478L34.7071 85.5449L34.7052 85.544L34.7046 85.5438C34.7045 85.5437 34.7043 85.5436 34.5 86Z"
                          stroke="url(#paint3_linear_0_1)"
                          stroke-opacity="0.23"
                        />
                      </g>
                      <g filter="url(#filter3_d_0_1)">
                        <path
                          d="M56 97H223.839C235.989 97 245.839 87.1503 245.839 75V23C245.839 10.8497 255.688 0.999996 267.839 0.999996H386"
                          stroke="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_0_1"
                          x="0"
                          y="66"
                          width="69"
                          height="69"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_0_1"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_0_1"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_b_0_1"
                          x="0"
                          y="62"
                          width="69"
                          height="69"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_0_1"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_0_1"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter2_b_0_1"
                          x="9"
                          y="71"
                          width="51"
                          height="51"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_0_1"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_0_1"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter3_d_0_1"
                          x="52"
                          y="0.5"
                          width="338"
                          height="105"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_0_1"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_0_1"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="34.5"
                          y1="66"
                          x2="34.5"
                          y2="127"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="48"
                          y1="111"
                          x2="33"
                          y2="77"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="34.5"
                          y1="86"
                          x2="34.5"
                          y2="107"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#4D67FF" />
                          <stop offset="1" stop-color="#8C4CFF" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_0_1"
                          x1="35"
                          y1="81.5"
                          x2="34.4677"
                          y2="107"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="#F2F2F2"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </section> */}

        <section className="container relative z-20 flex items-center">
          <section className="flex flex-col md:flex-row justify-between lg:h-auto pt-[26px] w-full relative">
            {/* <section className="flex flex-col gap-[10px] items-start absolute left-[0px] top-[150px]">
              <button
                className="rounded-[12px] border-[0.8px] border-[#fff] 
            bg-[linear-gradient(180deg,rgba(255, 255, 255, 0.19)_0%,rgba(153, 153, 153, 0.19)_100%)]
            backdrop-blur-[11px] flex justify-between p-[10px] items-center
            text-[#FDC60B] font-[400] text-[12px] dm-sans
            gap-[9px] outline-none min-w-[175px] md:min-w-[254px]
            "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7188 5V6.3125C11.4438 6.275 11.1313 6.25625 10.7812 6.25V5C10.7812 3.03125 10.225 1.71875 7.5 1.71875C4.775 1.71875 4.21875 3.03125 4.21875 5V6.25C3.86875 6.25625 3.55625 6.275 3.28125 6.3125V5C3.28125 3.1875 3.71875 0.78125 7.5 0.78125C11.2813 0.78125 11.7188 3.1875 11.7188 5Z"
                    fill="url(#paint0_linear_17_34)"
                  />
                  <path
                    d="M11.7188 6.3125C11.4438 6.275 11.1313 6.25625 10.7812 6.25H4.21875C3.86875 6.25625 3.55625 6.275 3.28125 6.3125C1.6875 6.50625 1.25 7.2875 1.25 9.375V10.625C1.25 13.125 1.875 13.75 4.375 13.75H10.625C13.125 13.75 13.75 13.125 13.75 10.625V9.375C13.75 7.2875 13.3125 6.50625 11.7188 6.3125ZM5.44375 10.4437C5.325 10.5562 5.1625 10.625 5 10.625C4.91875 10.625 4.8375 10.6063 4.7625 10.575C4.68125 10.5438 4.61875 10.5 4.55625 10.4437C4.44375 10.325 4.375 10.1625 4.375 10C4.375 9.91875 4.39375 9.8375 4.425 9.7625C4.45625 9.6875 4.5 9.61875 4.55625 9.55625C4.61875 9.5 4.68125 9.45625 4.7625 9.425C4.99375 9.325 5.26875 9.38125 5.44375 9.55625C5.5 9.61875 5.54375 9.6875 5.575 9.7625C5.60625 9.8375 5.625 9.91875 5.625 10C5.625 10.1625 5.55625 10.325 5.44375 10.4437ZM8.075 10.2375C8.04375 10.3125 8 10.3812 7.94375 10.4437C7.825 10.5562 7.6625 10.625 7.5 10.625C7.33125 10.625 7.175 10.5562 7.05625 10.4437C7 10.3812 6.95625 10.3125 6.925 10.2375C6.89375 10.1625 6.875 10.0812 6.875 10C6.875 9.83125 6.94375 9.675 7.05625 9.55625C7.2875 9.325 7.70625 9.325 7.94375 9.55625C8.05625 9.675 8.125 9.83125 8.125 10C8.125 10.0812 8.10625 10.1625 8.075 10.2375ZM10.4437 10.4437C10.325 10.5562 10.1625 10.625 10 10.625C9.8375 10.625 9.675 10.5562 9.55625 10.4437C9.44375 10.325 9.375 10.1688 9.375 10C9.375 9.83125 9.44375 9.675 9.55625 9.55625C9.79375 9.325 10.2125 9.325 10.4437 9.55625C10.4687 9.5875 10.4937 9.61875 10.5187 9.65625C10.5437 9.6875 10.5625 9.725 10.575 9.7625C10.5938 9.8 10.6062 9.8375 10.6125 9.875C10.6187 9.91875 10.625 9.9625 10.625 10C10.625 10.1625 10.5562 10.325 10.4437 10.4437Z"
                    fill="url(#paint1_linear_17_34)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_17_34"
                      x1="6.09375"
                      y1="0.596875"
                      x2="8.34342"
                      y2="6.60236"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FDC60B" />
                      <stop offset="1" stop-color="#FDE07E" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_17_34"
                      x1="5.41667"
                      y1="6"
                      x2="8.26546"
                      y2="14.309"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FDC60B" />
                      <stop offset="1" stop-color="#FDE07E" />
                    </linearGradient>
                  </defs>
                </svg>
                Cross-platform Password Manager
              </button>
              <div
                className="rounded-[16px] border-[0.8px] border-[#fff] 
                bg-[linear-gradient(180deg,rgba(255, 255, 255, 0.19)_0%,rgba(153, 153, 153, 0.19)_100%)]
                backdrop-blur-[11px] flex justify-center p-[10px] items-start
                text-[#FDC60B] font-[400] text-[12px] dm-sans flex-col min-h-[180px] md:min-h-[260px]
                md:gap-[36px] gap-[24px] px-[13px] md:px-[20px]  max-w-[298px] md:max-w-[370px] relative"
              >
                <h2 className="text-white text-[22px] md:text-[32px] font-[400] leading-[26px] md:leading-[38px]">
                  Password Manager PC Protect your systems
                </h2>
                <button className="bg-white outline-none border-[0.797px] border-[#fff] rounded-[14px] py-[14px] px-[24px] text-[#002550] font-[400] text-[20px] dm-sans">
                  Get Started
                </button>
                <span className="hidden md:inline-block absolute left-[100%] top-[50%]">
                  <svg
                    width="103"
                    height="188"
                    viewBox="0 0 103 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_942_7038)">
                      <mask id="path-1-inside-1_942_7038" fill="white">
                        <path d="M103 157.5C103 174.345 89.3447 188 72.5 188C55.6553 188 42 174.345 42 157.5C42 140.655 55.6553 127 72.5 127C89.3447 127 103 140.655 103 157.5ZM48.4492 157.5C48.4492 170.783 59.2171 181.551 72.5 181.551C85.7829 181.551 96.5508 170.783 96.5508 157.5C96.5508 144.217 85.7829 133.449 72.5 133.449C59.2171 133.449 48.4492 144.217 48.4492 157.5Z" />
                      </mask>
                      <path
                        d="M103 157.5C103 174.345 89.3447 188 72.5 188C55.6553 188 42 174.345 42 157.5C42 140.655 55.6553 127 72.5 127C89.3447 127 103 140.655 103 157.5ZM48.4492 157.5C48.4492 170.783 59.2171 181.551 72.5 181.551C85.7829 181.551 96.5508 170.783 96.5508 157.5C96.5508 144.217 85.7829 133.449 72.5 133.449C59.2171 133.449 48.4492 144.217 48.4492 157.5Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M103 157.5C103 174.345 89.3447 188 72.5 188C55.6553 188 42 174.345 42 157.5C42 140.655 55.6553 127 72.5 127C89.3447 127 103 140.655 103 157.5ZM48.4492 157.5C48.4492 170.783 59.2171 181.551 72.5 181.551C85.7829 181.551 96.5508 170.783 96.5508 157.5C96.5508 144.217 85.7829 133.449 72.5 133.449C59.2171 133.449 48.4492 144.217 48.4492 157.5Z"
                        stroke="url(#paint0_linear_942_7038)"
                        stroke-width="2"
                        mask="url(#path-1-inside-1_942_7038)"
                      />
                    </g>
                    <g filter="url(#filter1_b_942_7038)">
                      <circle
                        cx="72.5"
                        cy="157.5"
                        r="21.5"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <circle
                        cx="72.5"
                        cy="157.5"
                        r="21"
                        stroke="url(#paint1_linear_942_7038)"
                      />
                    </g>
                    <circle
                      cx="72.5"
                      cy="157.5"
                      r="10.5"
                      fill="url(#paint2_linear_942_7038)"
                    />
                    <circle
                      cx="72.5"
                      cy="157.5"
                      r="11"
                      stroke="url(#paint3_linear_942_7038)"
                      stroke-opacity="0.23"
                    />
                    <path
                      d="M3 2H8.61291C20.7632 2 30.6129 11.8497 30.6129 24V137.613C30.6129 148.872 39.7405 158 51 158V158"
                      stroke="white"
                    />
                    <circle cx="2" cy="2" r="1.5" stroke="white" />
                    <defs>
                      <filter
                        id="filter0_b_942_7038"
                        x="38"
                        y="123"
                        width="69"
                        height="69"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="2"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_942_7038"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_942_7038"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_b_942_7038"
                        x="47"
                        y="132"
                        width="51"
                        height="51"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="2"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_942_7038"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_942_7038"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_942_7038"
                        x1="72.5"
                        y1="127"
                        x2="72.5"
                        y2="188"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_942_7038"
                        x1="86"
                        y1="172"
                        x2="71"
                        y2="138"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_942_7038"
                        x1="72.5"
                        y1="147"
                        x2="72.5"
                        y2="168"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4D67FF" />
                        <stop offset="1" stop-color="#8C4CFF" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_942_7038"
                        x1="73"
                        y1="142.5"
                        x2="72.4677"
                        y2="168"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="#F2F2F2"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="block md:hidden absolute left-[50%] top-[100%]">
                  <svg
                    width="65"
                    height="91"
                    viewBox="0 0 65 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 1V62C0.5 68.6274 5.87258 74 12.5 74H29"
                      stroke="white"
                      stroke-linecap="round"
                    />
                    <g filter="url(#filter0_b_0_1)">
                      <mask id="path-2-inside-1_0_1" fill="white">
                        <path d="M65 72C65 82.4934 56.4934 91 46 91C35.5066 91 27 82.4934 27 72C27 61.5066 35.5066 53 46 53C56.4934 53 65 61.5066 65 72ZM31.0175 72C31.0175 80.2746 37.7254 86.9825 46 86.9825C54.2746 86.9825 60.9825 80.2746 60.9825 72C60.9825 63.7254 54.2746 57.0175 46 57.0175C37.7254 57.0175 31.0175 63.7254 31.0175 72Z" />
                      </mask>
                      <path
                        d="M65 72C65 82.4934 56.4934 91 46 91C35.5066 91 27 82.4934 27 72C27 61.5066 35.5066 53 46 53C56.4934 53 65 61.5066 65 72ZM31.0175 72C31.0175 80.2746 37.7254 86.9825 46 86.9825C54.2746 86.9825 60.9825 80.2746 60.9825 72C60.9825 63.7254 54.2746 57.0175 46 57.0175C37.7254 57.0175 31.0175 63.7254 31.0175 72Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M65 72C65 82.4934 56.4934 91 46 91C35.5066 91 27 82.4934 27 72C27 61.5066 35.5066 53 46 53C56.4934 53 65 61.5066 65 72ZM31.0175 72C31.0175 80.2746 37.7254 86.9825 46 86.9825C54.2746 86.9825 60.9825 80.2746 60.9825 72C60.9825 63.7254 54.2746 57.0175 46 57.0175C37.7254 57.0175 31.0175 63.7254 31.0175 72Z"
                        stroke="url(#paint0_linear_0_1)"
                        stroke-width="1.2459"
                        mask="url(#path-2-inside-1_0_1)"
                      />
                    </g>
                    <g filter="url(#filter1_b_0_1)">
                      <circle
                        cx="45.9999"
                        cy="72"
                        r="13.3934"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <circle
                        cx="45.9999"
                        cy="72"
                        r="13.082"
                        stroke="url(#paint1_linear_0_1)"
                        stroke-width="0.622951"
                      />
                    </g>
                    <circle
                      cx="46"
                      cy="72"
                      r="6.54098"
                      fill="url(#paint2_linear_0_1)"
                    />
                    <circle
                      cx="46"
                      cy="72"
                      r="6.85246"
                      stroke="url(#paint3_linear_0_1)"
                      stroke-opacity="0.23"
                      stroke-width="0.622951"
                    />
                    <defs>
                      <filter
                        id="filter0_b_0_1"
                        x="24.5082"
                        y="50.5082"
                        width="42.9836"
                        height="42.9836"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="1.2459"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_0_1"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_0_1"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_b_0_1"
                        x="30.1146"
                        y="56.1148"
                        width="31.7707"
                        height="31.7705"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="1.2459"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_0_1"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_0_1"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_0_1"
                        x1="46"
                        y1="53"
                        x2="46"
                        y2="91"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_0_1"
                        x1="54.4097"
                        y1="81.0328"
                        x2="45.0655"
                        y2="59.8525"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_0_1"
                        x1="46"
                        y1="65.459"
                        x2="46"
                        y2="78.541"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4D67FF" />
                        <stop offset="1" stop-color="#8C4CFF" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_0_1"
                        x1="46.3114"
                        y1="62.6557"
                        x2="45.9798"
                        y2="78.541"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="#F2F2F2"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </section> */}
            {/* <section className="container relative flex  h-[100vh]">
              <div
                className="rounded-[11px] md:rounded-[16px] border-[0.56px] border-[#fff] 
                bg-[linear-gradient(180deg,rgba(255, 255, 255, 0.19)_0%,rgba(153, 153, 153, 0.19)_100%)]
                backdrop-blur-[11px] flex justify-center p-[10px] items-start
                text-[#FDC60B] font-[400] text-[12px] dm-sans flex-col min-h-[102px] md:min-h-[147px]
                 px-[13px] md:px-[20px] max-w-[236px] md:max-w-[340px] absolute right-[50px] top-[220px]"
              >
                <h2 className="text-white text-[15px] md:text-[20px] font-[400] leading-[18px] md:leading-[26px] dm-sans">
                  Generate Unbreakable Passwords
                </h2>
                <p className="text-[#FFFFFFB2] text-[9px] md:text-[14px] font-[400] leading-[11.72px] md:leading-normal dm-sans">
                  Use the strongest password for your accounts, located in the
                  internet. Give more work to the Hackers
                </p>
                <span className="hidden md:inline-block absolute right-[100%] bottom-[50%]">
                  <svg
                    width="208"
                    height="188"
                    viewBox="0 0 208 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_1_35994)">
                      <mask id="path-1-inside-1_1_35994" fill="white">
                        <path d="M61 30.5C61 47.3447 47.3447 61 30.5 61C13.6553 61 0 47.3447 0 30.5C0 13.6553 13.6553 0 30.5 0C47.3447 0 61 13.6553 61 30.5ZM6.44917 30.5C6.44917 43.7829 17.2171 54.5508 30.5 54.5508C43.7829 54.5508 54.5508 43.7829 54.5508 30.5C54.5508 17.2171 43.7829 6.44917 30.5 6.44917C17.2171 6.44917 6.44917 17.2171 6.44917 30.5Z" />
                      </mask>
                      <path
                        d="M61 30.5C61 47.3447 47.3447 61 30.5 61C13.6553 61 0 47.3447 0 30.5C0 13.6553 13.6553 0 30.5 0C47.3447 0 61 13.6553 61 30.5ZM6.44917 30.5C6.44917 43.7829 17.2171 54.5508 30.5 54.5508C43.7829 54.5508 54.5508 43.7829 54.5508 30.5C54.5508 17.2171 43.7829 6.44917 30.5 6.44917C17.2171 6.44917 6.44917 17.2171 6.44917 30.5Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M61 30.5C61 47.3447 47.3447 61 30.5 61C13.6553 61 0 47.3447 0 30.5C0 13.6553 13.6553 0 30.5 0C47.3447 0 61 13.6553 61 30.5ZM6.44917 30.5C6.44917 43.7829 17.2171 54.5508 30.5 54.5508C43.7829 54.5508 54.5508 43.7829 54.5508 30.5C54.5508 17.2171 43.7829 6.44917 30.5 6.44917C17.2171 6.44917 6.44917 17.2171 6.44917 30.5Z"
                        stroke="url(#paint0_linear_1_35994)"
                        stroke-width="2"
                        mask="url(#path-1-inside-1_1_35994)"
                      />
                    </g>
                    <g filter="url(#filter1_b_1_35994)">
                      <circle
                        cx="30.5"
                        cy="30.5"
                        r="21.5"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <circle
                        cx="30.5"
                        cy="30.5"
                        r="21"
                        stroke="url(#paint1_linear_1_35994)"
                      />
                    </g>
                    <circle
                      cx="30.5"
                      cy="30.5"
                      r="10.5"
                      fill="url(#paint2_linear_1_35994)"
                    />
                    <circle
                      cx="30.5"
                      cy="30.5"
                      r="11"
                      stroke="url(#paint3_linear_1_35994)"
                      stroke-opacity="0.23"
                    />
                    <path
                      d="M52 31H119.742C131.892 31 141.742 40.8497 141.742 53V165C141.742 177.15 151.592 187 163.742 187H208"
                      stroke="white"
                    />
                    <defs>
                      <filter
                        id="filter0_b_1_35994"
                        x="-4"
                        y="-4"
                        width="69"
                        height="69"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="2"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1_35994"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_1_35994"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_b_1_35994"
                        x="5"
                        y="5"
                        width="51"
                        height="51"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="2"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1_35994"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_1_35994"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1_35994"
                        x1="30.5"
                        y1="0"
                        x2="30.5"
                        y2="61"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1_35994"
                        x1="44"
                        y1="45"
                        x2="29"
                        y2="11"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1_35994"
                        x1="30.5"
                        y1="20"
                        x2="30.5"
                        y2="41"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4D67FF" />
                        <stop offset="1" stop-color="#8C4CFF" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1_35994"
                        x1="31"
                        y1="15.5"
                        x2="30.4677"
                        y2="41"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="#F2F2F2"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="inline-block md:hidden absolute left-[5%] bottom-[100%]">
                  <svg
                    width="64"
                    height="88"
                    viewBox="0 0 64 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_1_36353)">
                      <mask id="path-1-inside-1_1_36353" fill="white">
                        <path d="M64 19C64 29.4934 55.4934 38 45 38C34.5066 38 26 29.4934 26 19C26 8.50659 34.5066 0 45 0C55.4934 0 64 8.50659 64 19ZM30.0175 19C30.0175 27.2746 36.7254 33.9825 45 33.9825C53.2746 33.9825 59.9825 27.2746 59.9825 19C59.9825 10.7254 53.2746 4.01752 45 4.01752C36.7254 4.01752 30.0175 10.7254 30.0175 19Z" />
                      </mask>
                      <path
                        d="M64 19C64 29.4934 55.4934 38 45 38C34.5066 38 26 29.4934 26 19C26 8.50659 34.5066 0 45 0C55.4934 0 64 8.50659 64 19ZM30.0175 19C30.0175 27.2746 36.7254 33.9825 45 33.9825C53.2746 33.9825 59.9825 27.2746 59.9825 19C59.9825 10.7254 53.2746 4.01752 45 4.01752C36.7254 4.01752 30.0175 10.7254 30.0175 19Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M64 19C64 29.4934 55.4934 38 45 38C34.5066 38 26 29.4934 26 19C26 8.50659 34.5066 0 45 0C55.4934 0 64 8.50659 64 19ZM30.0175 19C30.0175 27.2746 36.7254 33.9825 45 33.9825C53.2746 33.9825 59.9825 27.2746 59.9825 19C59.9825 10.7254 53.2746 4.01752 45 4.01752C36.7254 4.01752 30.0175 10.7254 30.0175 19Z"
                        stroke="url(#paint0_linear_1_36353)"
                        stroke-width="1.2459"
                        mask="url(#path-1-inside-1_1_36353)"
                      />
                    </g>
                    <g filter="url(#filter1_b_1_36353)">
                      <circle
                        cx="44.9999"
                        cy="18.9999"
                        r="13.3934"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <circle
                        cx="44.9999"
                        cy="18.9999"
                        r="13.082"
                        stroke="url(#paint1_linear_1_36353)"
                        stroke-width="0.622951"
                      />
                    </g>
                    <circle
                      cx="45"
                      cy="19"
                      r="6.54098"
                      fill="url(#paint2_linear_1_36353)"
                    />
                    <circle
                      cx="45"
                      cy="19"
                      r="6.85246"
                      stroke="url(#paint3_linear_1_36353)"
                      stroke-opacity="0.23"
                      stroke-width="0.622951"
                    />
                    <path
                      d="M26 18H13C6.37258 18 1 23.3726 1 30V87.5"
                      stroke="white"
                      stroke-linecap="round"
                    />
                    <defs>
                      <filter
                        id="filter0_b_1_36353"
                        x="23.5082"
                        y="-2.4918"
                        width="42.9836"
                        height="42.9836"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="1.2459"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1_36353"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_1_36353"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_b_1_36353"
                        x="29.1146"
                        y="3.11464"
                        width="31.7705"
                        height="31.7705"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="1.2459"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1_36353"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_1_36353"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1_36353"
                        x1="45"
                        y1="0"
                        x2="45"
                        y2="38"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1_36353"
                        x1="53.4097"
                        y1="28.0327"
                        x2="44.0655"
                        y2="6.85235"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1_36353"
                        x1="45"
                        y1="12.459"
                        x2="45"
                        y2="25.541"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4D67FF" />
                        <stop offset="1" stop-color="#8C4CFF" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1_36353"
                        x1="45.3114"
                        y1="9.65571"
                        x2="44.9798"
                        y2="25.541"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="#F2F2F2"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <div
                className="rounded-[11px] md:rounded-[16px] border-[0.56px] border-[#fff] 
                ml-auto
                bg-[linear-gradient(180deg,rgba(255, 255, 255, 0.19)_0%,rgba(153, 153, 153, 0.19)_100%)]
                backdrop-blur-[11px] flex justify-center p-[10px] items-start
                text-[#FDC60B] font-[400] text-[12px] dm-sans flex-col min-h-[102px] md:min-h-[147px]
                 px-[13px] md:px-[20px] max-w-[236px] md:max-w-[340px] absolute right-[10px] bottom-[230px]"
              >
                <h2 className="text-white text-[15px] md:text-[20px] font-[400] leading-[18px] md:leading-[26px] dm-sans">
                  Generate Unbreakable Passwords
                </h2>
                <p className="text-[#FFFFFFB2] text-[9px] md:text-[14px] font-[400] leading-[11.72px] md:leading-normal dm-sans">
                  Use the strongest password for your accounts, located in the
                  internet. Give more work to the Hackers
                </p>
                <span className="hidden md:inline-block absolute right-[100%] top-[50%]">
                  <svg
                    width="382"
                    height="127"
                    viewBox="0 0 382 127"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_1_35998)">
                      <mask id="path-1-inside-1_1_35998" fill="white">
                        <path d="M61 96.5C61 113.345 47.3447 127 30.5 127C13.6553 127 0 113.345 0 96.5C0 79.6553 13.6553 66 30.5 66C47.3447 66 61 79.6553 61 96.5ZM6.44917 96.5C6.44917 109.783 17.2171 120.551 30.5 120.551C43.7829 120.551 54.5508 109.783 54.5508 96.5C54.5508 83.2171 43.7829 72.4492 30.5 72.4492C17.2171 72.4492 6.44917 83.2171 6.44917 96.5Z" />
                      </mask>
                      <path
                        d="M61 96.5C61 113.345 47.3447 127 30.5 127C13.6553 127 0 113.345 0 96.5C0 79.6553 13.6553 66 30.5 66C47.3447 66 61 79.6553 61 96.5ZM6.44917 96.5C6.44917 109.783 17.2171 120.551 30.5 120.551C43.7829 120.551 54.5508 109.783 54.5508 96.5C54.5508 83.2171 43.7829 72.4492 30.5 72.4492C17.2171 72.4492 6.44917 83.2171 6.44917 96.5Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M61 96.5C61 113.345 47.3447 127 30.5 127C13.6553 127 0 113.345 0 96.5C0 79.6553 13.6553 66 30.5 66C47.3447 66 61 79.6553 61 96.5ZM6.44917 96.5C6.44917 109.783 17.2171 120.551 30.5 120.551C43.7829 120.551 54.5508 109.783 54.5508 96.5C54.5508 83.2171 43.7829 72.4492 30.5 72.4492C17.2171 72.4492 6.44917 83.2171 6.44917 96.5Z"
                        stroke="url(#paint0_linear_1_35998)"
                        stroke-width="2"
                        mask="url(#path-1-inside-1_1_35998)"
                      />
                    </g>
                    <g filter="url(#filter1_b_1_35998)">
                      <circle
                        cx="30.5"
                        cy="96.5"
                        r="21.5"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <circle
                        cx="30.5"
                        cy="96.5"
                        r="21"
                        stroke="url(#paint1_linear_1_35998)"
                      />
                    </g>
                    <circle
                      cx="30.5"
                      cy="96.5"
                      r="10.5"
                      fill="url(#paint2_linear_1_35998)"
                    />
                    <circle
                      cx="30.5"
                      cy="96.5"
                      r="11"
                      stroke="url(#paint3_linear_1_35998)"
                      stroke-opacity="0.23"
                    />
                    <path
                      d="M52 97H219.839C231.989 97 241.839 87.1503 241.839 75V23C241.839 10.8497 251.688 0.999996 263.839 0.999996H382"
                      stroke="white"
                    />
                    <defs>
                      <filter
                        id="filter0_b_1_35998"
                        x="-4"
                        y="62"
                        width="69"
                        height="69"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="2"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1_35998"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_1_35998"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_b_1_35998"
                        x="5"
                        y="71"
                        width="51"
                        height="51"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="2"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1_35998"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_1_35998"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1_35998"
                        x1="30.5"
                        y1="66"
                        x2="30.5"
                        y2="127"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1_35998"
                        x1="44"
                        y1="111"
                        x2="29"
                        y2="77"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1_35998"
                        x1="30.5"
                        y1="86"
                        x2="30.5"
                        y2="107"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4D67FF" />
                        <stop offset="1" stop-color="#8C4CFF" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1_35998"
                        x1="31"
                        y1="81.5"
                        x2="30.4677"
                        y2="107"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="#F2F2F2"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="inline-block md:hidden absolute right-[5%] bottom-[100%]">
                  <svg
                    width="72"
                    height="198"
                    viewBox="0 0 72 198"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_1_36349)">
                      <mask id="path-1-inside-1_1_36349" fill="white">
                        <path d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19ZM4.01752 19C4.01752 27.2746 10.7254 33.9825 19 33.9825C27.2746 33.9825 33.9825 27.2746 33.9825 19C33.9825 10.7254 27.2746 4.01752 19 4.01752C10.7254 4.01752 4.01752 10.7254 4.01752 19Z" />
                      </mask>
                      <path
                        d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19ZM4.01752 19C4.01752 27.2746 10.7254 33.9825 19 33.9825C27.2746 33.9825 33.9825 27.2746 33.9825 19C33.9825 10.7254 27.2746 4.01752 19 4.01752C10.7254 4.01752 4.01752 10.7254 4.01752 19Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19ZM4.01752 19C4.01752 27.2746 10.7254 33.9825 19 33.9825C27.2746 33.9825 33.9825 27.2746 33.9825 19C33.9825 10.7254 27.2746 4.01752 19 4.01752C10.7254 4.01752 4.01752 10.7254 4.01752 19Z"
                        stroke="url(#paint0_linear_1_36349)"
                        stroke-width="1.2459"
                        mask="url(#path-1-inside-1_1_36349)"
                      />
                    </g>
                    <g filter="url(#filter1_b_1_36349)">
                      <circle
                        cx="18.9999"
                        cy="18.9999"
                        r="13.3934"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <circle
                        cx="18.9999"
                        cy="18.9999"
                        r="13.082"
                        stroke="url(#paint1_linear_1_36349)"
                        stroke-width="0.622951"
                      />
                    </g>
                    <circle
                      cx="19"
                      cy="19"
                      r="6.54098"
                      fill="url(#paint2_linear_1_36349)"
                    />
                    <circle
                      cx="19"
                      cy="19"
                      r="6.85246"
                      stroke="url(#paint3_linear_1_36349)"
                      stroke-opacity="0.23"
                      stroke-width="0.622951"
                    />
                    <path
                      d="M37 18.5H57.1669C63.7288 18.5 69.0738 23.7707 69.1657 30.3319L71.5 197"
                      stroke="white"
                      stroke-linecap="round"
                    />
                    <defs>
                      <filter
                        id="filter0_b_1_36349"
                        x="-2.4918"
                        y="-2.4918"
                        width="42.9836"
                        height="42.9836"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="1.2459"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1_36349"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_1_36349"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_b_1_36349"
                        x="3.11464"
                        y="3.11464"
                        width="31.7705"
                        height="31.7705"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="1.2459"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1_36349"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_1_36349"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1_36349"
                        x1="19"
                        y1="0"
                        x2="19"
                        y2="38"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1_36349"
                        x1="27.4097"
                        y1="28.0327"
                        x2="18.0655"
                        y2="6.85235"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1_36349"
                        x1="19"
                        y1="12.459"
                        x2="19"
                        y2="25.541"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4D67FF" />
                        <stop offset="1" stop-color="#8C4CFF" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1_36349"
                        x1="19.3114"
                        y1="9.65571"
                        x2="18.9798"
                        y2="25.541"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="#F2F2F2"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </section> */}
          </section>
        </section>
        <video
          className="absolute hidden md:block top-[-100px] h-[100vh] w-full md:object-cover"
          autoPlay
          muted
          loop={true}
        >
          <source src="/4k.mp4" />
        </video>
        <video
          className="absolute h-auto w-full object-cover md:hidden"
          autoPlay
          muted
          loop={true}
        >
          <source src="/mobileVideo.mp4" />
        </video>
      </section>
    </>
  );
}

export default Home;
