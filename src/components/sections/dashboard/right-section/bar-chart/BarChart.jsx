import React from "react";
import { DownIcon } from "../../../../../data/iconsData";

function BarChart() {
  return (
    <div className=" bg-white rounded-3xl">
      <div className=" px-3 py-2 ">
        <div className=" flex justify-between items-center  px-3 py-2 ">
          <h2 className=" text-[24px] font-semibold">Income</h2>
          <div className="  cursor-pointer ">
            <div className=" flex bg-[#CCFFCD] rounded-3xl px-2 py-1 text-xs font-semibold items-center">
              <select
                name="Week"
                className="bg-[#CCFFCD] appearance-none outline-none"
                id=""
              >
                <option value="">Week</option>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
              </select>
              <img src={DownIcon} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarChart;
