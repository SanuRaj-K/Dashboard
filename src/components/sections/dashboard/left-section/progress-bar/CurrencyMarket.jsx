import React from "react";
import { FlagTwo, flagUSA } from "../../../../../data/iconsData";

function CurrencyMarket() {
  return (
    <div className=" bg-white h-[175px]  rounded-3xl">
      <div className="px-6  py-3 ">
        <h2 className=" text-xs lg:text-[20px] pb-3 font-semibold">Currencies Market</h2>
        <div className=" flex justify-between items-center">
          <div className=" flex items-center ">
            <img src={flagUSA}   className=" w-[30px] md:w-[50px]" alt="flag" />
            <div className=" ml-3">
              <h3 className=" text-[18px]">USD</h3>
              <h6 className=" text-[14px] text-[#B6B6B6]">0.73</h6>
            </div>
          </div>
          <div className=" md:hidden flex-col 2xl:flex">
            <h3 className=" text-[18px]">105.27</h3>
            <h6 className="text-[14px] text-[#007A64]">+14.4%</h6>
          </div>
        </div>
        <div className=" flex  mt-3 justify-between items-center">
          <div className=" flex items-center ">
            <img className=" w-[30px] md:w-[50px]" src={FlagTwo} width={50} alt="flag" />
            <div className=" ml-3">
              <h3 className=" text-[18px]">EUR</h3>
              <h6 className=" text-[14px] text-[#B6B6B6]">-0.0086</h6>
            </div>
          </div>
          <div className=" flex flex-col  md:hidden 2xl:flex">
            <h3 className=" text-[18px]">105.27</h3>
            <h6 className="text-[14px] text-[#FF6756]">-0.67%</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyMarket;
