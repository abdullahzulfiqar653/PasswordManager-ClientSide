import React from "react";

const PasswordFolder = () => {
  return (
    <section className="w-full rounded-[12px] flex flex-col gap-[11px]">
      <section className="bg-[#101E71] rounded-[12px] min-h-[624px]">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-[#010E59]">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-[18px] h-[18px]  bg-[#101E71] border-[#FFFFFF] rounded"
                    />
                    <label for="checkbox-all-search" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th
                  scope="col"
                  class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400] px-6 py-[20px] text-[#DFDFDF]"
                >
                  Tile
                </th>
                <th
                  scope="col"
                  class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400]  px-6 py-[20px] text-[#DFDFDF]"
                >
                  Username
                </th>
                <th
                  scope="col"
                  class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400]  px-6 py-[20px] text-[#DFDFDF]"
                >
                  URL
                </th>
                <th
                  scope="col"
                  class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400]  px-6 py-[20px] text-[#DFDFDF]"
                >
                  Notes
                </th>
                <th
                  scope="col"
                  class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400]  px-6 py-[20px] text-[#DFDFDF]"
                >
                  Modefied
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <tr
                  key={index}
                  class="bg-transparent border-[1.5px] border-[#002256] hover:bg-[#4207AF]"
                >
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-[18px] h-[18px]  bg-[#101E71] border-[#FFFFFF] rounded"
                      />
                      <label for="checkbox-table-search-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400]  px-6 py-[20px] text-[#DFDFDF] whitespace-nowrap"
                  >
                    ☘️  Netflix
                  </th>
                  <td class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400]  px-6 py-[20px] text-[#DFDFDF]">
                    Aqsa Nawaz
                  </td>
                  <td class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400]  px-6 py-[20px] text-[#DFDFDF]">
                    https://netflix.com
                  </td>
                  <td class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400]  px-6 py-[20px] text-[#DFDFDF]">
                    Personal use account ...
                  </td>
                  <td class="border-[1.5px] border-[#002256] dm-sans text-[15] font-[400]  px-6 py-[20px] text-[#DFDFDF]">
                    20/06/24 3:15pm
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default PasswordFolder;
