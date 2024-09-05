import { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useNavigate, useLocation } from "react-router-dom";

import { toast } from "react-toastify";
import { useAuth } from "../../AuthContext";
import useAddPassword from "../../hooks/useAddPassword";
import useUpdatePassword from "../../hooks/useUpdatePassword";

function AddPassword() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const { state } = location;
  const isUpdating = Boolean(state?.item);
  const [formData, setFormData] = useState({
    title: "",
    username: "",
    password: "",
    url: "",
    notes: "",
    emoji: "",
    ...state?.item,
  });
  const navigate = useNavigate();
  const { handleGeneratePassVisibility, generatorPassword } = useAuth();

  const { mutate: addPassword } = useAddPassword();
  const { mutate: updatePassword } = useUpdatePassword();

  useEffect(() => {
    if (generatorPassword && isUpdating)
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: generatorPassword,
      }));
  }, [generatorPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mutationFn = isUpdating ? updatePassword : addPassword;
    mutationFn(formData, {
      onSuccess: () => {
        navigate("/dashboard/folders");
        toast.success(
          `Password ${isUpdating ? "updated" : "added"} successfully.`,
          {
            className: "toast-message",
          }
        );
      },
      onError: (error) => {
        setErrors(error.response.data);
        toast.error(
          error.response.data?.error
            ? error.response.data?.error[0]
            : "Please fix the errors in mentioned fields.",
          {
            className: "toast-message",
          }
        );
      },
    });
  };

  const passwordVisibilityHandler = () => setIsPasswordShow((prev) => !prev);

  const onEmojiClick = (emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
    const emojiCodePoint = emojiObject.emoji.codePointAt(0).toString(16);
    setFormData((prevFormData) => ({
      ...prevFormData,
      emoji: emojiCodePoint,
    }));
  };

  return (
    <section className="w-full relative flex mt-[42px] pb-[56px] container gap-[7px]">
      <section className="w-full flex-1 flex flex-col md:gap-[20px]">
        <h4 className=" text-white text-[32px] leading-[64px] font-[400]">
          Root . Add Entry
        </h4>
        {/* <form onSubmit={handleSubmit} onC className="flex flex-col gap-[25px]"> */}
        <div className="flex flex-col gap-[15px] md:gap-[38px] flex-wrap md:flex-row">
          <div className="flex-1 flex flex-col gap-[4px]">
            <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
              Title
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
            />
            {errors.title && (
              <span className="text-red-500 text-[12px]">
                {errors.title[0]}
              </span>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-[4px]">
            <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
              Username
            </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
            />
            {errors.username && (
              <span className="text-red-500 text-[12px]">
                {errors.username[0]}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[15px] md:gap-[38px] flex-wrap md:flex-row">
          <div className="flex-1 flex flex-col gap-[4px]">
            <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
              Password
            </label>
            <div className="relative flex-1">
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={isPasswordShow ? "text" : "password"}
                className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
              />
              <span
                onClick={passwordVisibilityHandler}
                className="cursor-pointer absolute top-[50%] right-[13px] translate-y-[-50%]"
              >
                {isPasswordShow ? <OpenEye /> : <CloseEye />}
              </span>
              <span
                onClick={handleGeneratePassVisibility}
                className="cursor-pointer absolute top-[50%] right-[50px] translate-y-[-50%]"
              >
                <Shield />
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500 text-[12px]">
                {errors.password[0]}
              </span>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-[4px]">
            <label className="dm-sans text-[#DFDFDF] text-[9.77px] sm:text-[16px] leading-[19.54px] sm:leading-[32px] font-[400]">
              URL
            </label>
            <input
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
              placeholder="https://examples.com"
            />
            {errors.url && (
              <span className="text-red-500 text-[12px]">{errors.url[0]}</span>
            )}
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
                name="emoji"
                type="text"
                value={inputStr || formData.emoji ? String.fromCodePoint(parseInt(formData.emoji, 16)) : ''}
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
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={5}
            className=" w-full dm-sans border-[1px] rounded-[10px] border-[#374CC4] outline-none bg-[#101E71] py-[15px] px-[24px] placeholder:text-[#DFDFDF36] text-white text-[16px] leading-[32px] font-[400]"
          ></textarea>
          {errors.notes && (
            <span className="text-red-500 text-[12px]">{errors.notes[0]}</span>
          )}
        </div>
        <div className="flex gap-[12px] justify-center md:justify-end mt-[25px]">
          <button
            onClick={() => navigate(-1)}
            className="py-[17px] w-[140px] rounded-[18.37px] bg-[#101E71] border-none outline-none text-white text-[15.5px] font-[400] dm-sans"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="py-[17px] w-[140px] rounded-[18.37px] bg-[#101E71] border-none outline-none text-white text-[15.5px] font-[400] 
            dm-sans
            bg-[linear-gradient(90deg,_#A143FF_0%,_#5003DB_100%)]
"
          >
            Ok
          </button>
        </div>
        {/* </form> */}
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
