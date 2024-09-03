import React from "react";
import Visa from "../../../../../assets/images/visa-card.png";
import CardTwo from "../../../../../assets/images/second-card.png";
import { Plus } from "../../../../../data/iconsData";
function PaymentCard() {
  return (
    <div className=" bg-white   rounded-3xl h-[250px] ">
      <div className=" h-full flex flex-col ">
        <div className=" flex justify-between px-3 py-2 ">
          <div>
            <h3 className=" text-[24px] font-semibold">Your cards </h3>
            <div className=" bg-[#DAE1FE] inline-block px-2 text-xs rounded-3xl font-semibold py-1">
              premium
            </div>
          </div>
          <img className=" h-[40px] cursor-pointer" src={Plus} alt="plus" />
        </div> 
        <div className=" mt-auto pb-3 flex">
          <img src={Visa} className=" h-[120px] cursor-pointer " alt="card" />
          <img src={CardTwo} className=" h-[120px] cursor-pointer pl-2" alt="card" />
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
