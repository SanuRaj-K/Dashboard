import React from "react";
import Visa from "../../../../../assets/images/visa-card.png";
import CardTwo from "../../../../../assets/images/second-card.png";
import { Plus } from "../../../../../data/iconsData";
function PaymentCard() {
  return (
    <div className=" bg-white  mt-3 md:mt-0    rounded-3xl h-[250px] ">
      <div className=" h-full flex flex-col ">
        <div className=" flex justify-between px-3 py-2 ">
          <div>
            <h3 className=" text-[24px] font-semibold  ">Your cards </h3>
            <div className=" bg-[#DAE1FE] inline-block px-2 text-xs rounded-3xl font-semibold py-1">
              premium
            </div>
          </div>
          <img className=" h-[40px] cursor-pointer" src={Plus} alt="plus" />
        </div>
        <div className=" mt-auto pb-3 px-3 flex justify-evenly ">
          <img src={Visa} className=" sm:h-[120px] h-[90px] cursor-pointer " alt="card" />
          <img
            src={CardTwo}
            className="flex md:hidden 2xl:flex  sm:h-[120px] h-[90px] cursor-pointer pl-2"
            alt="card"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
