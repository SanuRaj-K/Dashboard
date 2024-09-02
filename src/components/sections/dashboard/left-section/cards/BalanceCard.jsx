import React from "react";
import { NormalPlus, Down, Increase } from "../../../../../data/iconsData";

function BalanceCard() {
  return (
    <div className=" bg-[#00FF6B]">
      <div>
        <div>
          <p>Total Balance</p>
          <p>
            $20,670 <sup>USD</sup>
          </p>
        </div>
        <div>
          <img src={NormalPlus} alt="plus" />
        </div>
      </div>
      <div>
        <div className="  bg-white text-black rounded-full px-4 py-2 flex-center">
          <p>Deposit</p>
          <img className=" ml-3" src={Down} alt="down" />
        </div>
        <div className="  bg-black text-white rounded-full px-4 py-2 flex-center">
          <p>Send</p>
          <img className=" ml-3" src={Increase} alt="increase" />
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
