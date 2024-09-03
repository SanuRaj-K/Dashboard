import React from "react";
import { NormalPlus, Down, Increase } from "../../../../../data/iconsData";

function BalanceCard() {
  return (
    <div className=" bg-[#00FF6B] rounded-3xl h-[250px] flex flex-col">
      
      <div className=" flex justify-between px-3 py-2 ">
        <div>
          <p className=" text-[24px]  font-semibold">Total Balance</p>
          <p className=" text-[36px] mt-2 font-bold">
            $20,670 <sup className=" font-normal">USD</sup>
          </p>
        </div>
        <div>
          <img src={NormalPlus} width={44}   alt="plus" />
        </div>
      </div>
      <div className=" mt-auto flex justify-between  px-3 py-2">
        <div className="  bg-white cursor-pointer mr-2 md:mr-0 text-black w-[200px] rounded-full px-4 py-2 flex-center">
          <p>Deposit</p>
          <img className="  ml-1 md:ml-3" src={Down} alt="down" />
        </div>
        <div className="  bg-black w-[200px] cursor-pointer text-white rounded-full px-4 py-2 flex-center">
          <p>Send</p>
          <img className=" ml-3" src={Increase} alt="increase" />
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
