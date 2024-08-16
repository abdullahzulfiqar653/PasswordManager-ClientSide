import React from "react";

function SearchesTags({ hideModal, handleSave }) {
  return (
    <section className="fixed inset-0 flex justify-center items-center bg-[#0000006B] z-50 px-[20px]">
      <section className="bg-[#101E71] w-full max-w-[591px] min-h-[318px] px-[25px] sm:px-[58px] rounded-[5px] flex flex-col items-center justify-center gap-[40px]">
        <h4 className="text-white text-[22px] sm:text-[32px] leading-[30.62px] sm:leading-[44.54px] font-[400] text-center">
          Would you like to save changes to this entry?
        </h4>
        <section className="flex items-center justify-center gap-[20px] flex-wrap">
          <button
            className="dm-sans mx-[auto] bg-[linear-gradient(90deg,_#A143FF_0%,_#5003DB_100%)] w-[140px] h-[50px] rounded-[15px] outline-none 
              border-none flex items-center justify-center text-[15px] 
              leading-[40px] font-[400] text-white"
            onClick={hideModal}
          >
            Cancel
          </button>
          <button
            className="dm-sans mx-[auto] bg-[#0E1A60] w-[140px] h-[50px] rounded-[15px] outline-none 
              border-none flex items-center justify-center text-[15px] 
              leading-[40px] font-[400] text-white"
            onClick={handleSave}
          >
            Save
          </button>
        </section>
      </section>
    </section>
  );
}

export default SearchesTags;
