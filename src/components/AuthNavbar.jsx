import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Navbar() {
  const {
    search,
    setSearch,
    handleGeneratePassVisibility,
    handleSaveConfirmationModalVisibility,
  } = useAuth();

  return (
    <header className="bg-transparent z-10 relative">
      <section className="container">
        <nav className="flex justify-between items-center py-[16px] gradient-border gap-[26px]">
          <Link to="/" className="flex items-center gap-[15px]">
            <img
              src="/logov2.svg"
              className="w-[29px] sm:w-[70px] cursor-pointer"
            />
            <h2 className="text-[12px] sm:text-[22px] font-[400] text-white">
              Password Manager
            </h2>
          </Link>
          <div className="flex-1 items-center gap-[18px] flex justify-end">
            <div className="relative flex-1 hidden lg:block">
              <Search />
              <input
                className="dm-sans w-full border-[1px] rounded-[12px] border-[#374CC4] outline-none bg-[#101E71] py-[11px] pl-[41px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex justify-end  gap-[19px]">
              <Link
                onClick={() => handleGeneratePassVisibility('navbar')}
                className="w-[28px] h-[28px] sm:w-[61px] sm:h-[61px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full"
              >
                <Shield />
              </Link>
              <Link
                to="/dashboard/add"
                className="w-[28px] h-[28px] sm:w-[61px] sm:h-[61px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full"
              >
                <Add />
              </Link>
              {/* <Link
                onClick={handleSaveConfirmationModalVisibility}
                className="w-[28px] h-[28px] sm:w-[61px] sm:h-[61px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full"
              >
                <Save />
              </Link> */}
              <Link
                to="/dashboard/folders"
                className="w-[28px] h-[28px] sm:w-[61px] sm:h-[61px] flex items-center justify-center bg-[#101E71] border-[.3px] border-[#374CC4] rounded-full"
              >
                <Folder />
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;

const Search = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-[50%] left-[13px] translate-y-[-50%]"
  >
    <path
      d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
      fill="white"
    />
  </svg>
);
const Shield = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[11px] h-[11px] sm:w-[24px] sm:h-[24px]"
  >
    <path
      d="M10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V7.12006C20.6102 5.89006 19.6702 4.53006 18.5202 4.10006L13.5302 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"
      stroke="white"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12.5V15.5"
      stroke="white"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Add = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[11px] h-[11px] sm:w-[24px] sm:h-[24px]"
  >
    <circle cx="11.5" cy="11.5" r="11" stroke="white" />
    <path
      d="M15.328 12.56H11.76V16.16H10.72V12.56H7.168V11.6H10.72V8H11.76V11.6H15.328V12.56Z"
      fill="white"
    />
  </svg>
);
const Save = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[11px] h-[11px] sm:w-[24px] sm:h-[24px]"
  >
    <path
      d="M21.6673 8.04162V19.9171C21.6673 20.4155 21.5005 20.8318 21.1668 21.1662C20.8332 21.5006 20.4164 21.6674 19.9167 21.6667H6.08465C5.5856 21.6667 5.16923 21.4999 4.83557 21.1662C4.5019 20.8325 4.33471 20.4158 4.33398 19.916V6.08404C4.33398 5.58499 4.50118 5.16862 4.83557 4.83496C5.16996 4.50129 5.58632 4.3341 6.08465 4.33337H17.9591L21.6673 8.04162ZM20.584 8.50421L17.4965 5.41671H6.08465C5.88965 5.41671 5.72968 5.47918 5.60473 5.60412C5.47979 5.72907 5.41732 5.88904 5.41732 6.08404V19.9171C5.41732 20.1114 5.47979 20.271 5.60473 20.396C5.72968 20.5209 5.88965 20.5834 6.08465 20.5834H19.9177C20.112 20.5834 20.2716 20.5209 20.3966 20.396C20.5215 20.271 20.584 20.111 20.584 19.916V8.50421ZM13.0007 17.9162C13.5979 17.9162 14.1085 17.7046 14.5325 17.2814C14.9564 16.8582 15.168 16.3475 15.1673 15.7495C15.1666 15.1515 14.9546 14.6413 14.5314 14.2188C14.1082 13.7963 13.5979 13.5847 13.0007 13.584C12.4034 13.5832 11.8931 13.7948 11.4699 14.2188C11.0467 14.6427 10.8347 15.153 10.834 15.7495C10.8333 16.3461 11.0452 16.8567 11.4699 17.2814C11.8946 17.706 12.4048 17.9177 13.0007 17.9162ZM7.33482 10.5842H15.3753V7.33421H7.33482V10.5842ZM5.41732 8.50421V20.5834V5.41671V8.50421Z"
      fill="white"
    />
  </svg>
);
const Folder = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[11px] h-[11px] sm:w-[24px] sm:h-[24px]"
  >
    <path
      d="M0.675887 4.8375L0.625887 3.75C0.625887 3.08696 0.889279 2.45107 1.35812 1.98223C1.82696 1.51339 2.46285 1.25 3.12589 1.25H7.71589C8.37887 1.25014 9.01466 1.51363 9.48339 1.9825L10.5184 3.0175C10.9871 3.48637 11.6229 3.74986 12.2859 3.75H17.2634C17.6108 3.74996 17.9544 3.82233 18.2723 3.96249C18.5901 4.10265 18.8753 4.30751 19.1096 4.56403C19.3439 4.82054 19.5221 5.12306 19.633 5.4523C19.7438 5.78155 19.7848 6.13028 19.7534 6.47625L18.9571 15.2262C18.9007 15.8474 18.6141 16.425 18.1536 16.8457C17.6932 17.2664 17.0921 17.4998 16.4684 17.5H3.53339C2.90968 17.4998 2.3086 17.2664 1.84813 16.8457C1.38767 16.425 1.10108 15.8474 1.04464 15.2262L0.248387 6.47625C0.196183 5.89732 0.34735 5.31828 0.675887 4.83875V4.8375ZM2.73839 5C2.56474 4.99999 2.393 5.03616 2.23411 5.1062C2.07522 5.17624 1.93267 5.27862 1.81554 5.4068C1.69841 5.53499 1.60927 5.68617 1.5538 5.85072C1.49833 6.01526 1.47776 6.18956 1.49339 6.3625L2.28964 15.1125C2.3177 15.4231 2.46084 15.7119 2.69096 15.9224C2.92107 16.1329 3.22154 16.2497 3.53339 16.25H16.4684C16.7802 16.2497 17.0807 16.1329 17.3108 15.9224C17.5409 15.7119 17.6841 15.4231 17.7121 15.1125L18.5084 6.3625C18.524 6.18956 18.5034 6.01526 18.448 5.85072C18.3925 5.68617 18.3034 5.53499 18.1862 5.4068C18.0691 5.27862 17.9265 5.17624 17.7677 5.1062C17.6088 5.03616 17.437 4.99999 17.2634 5H2.73839ZM8.60089 2.86625C8.48469 2.75002 8.34672 2.65784 8.19486 2.595C8.043 2.53215 7.88024 2.49987 7.71589 2.5H3.12589C2.79844 2.49994 2.48405 2.62837 2.2503 2.85768C2.01655 3.08699 1.88211 3.39886 1.87589 3.72625L1.88339 3.9C2.15255 3.80083 2.43755 3.75083 2.73839 3.75H9.48339L8.60089 2.86625Z"
      fill="white"
    />
  </svg>
);
