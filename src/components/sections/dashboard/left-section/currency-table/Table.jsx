import React from "react";
import { tableData } from "../../../../../data/TableData";
import { Dots, Filter, FilterTwo } from "../../../../../data/iconsData";

function Table() {
  return (
    <div className=" bg-white rounded-3xl ">
      <div className="   px-6  py-3 items-center ">
        <div className="md:flex hidden justify-between">
          <div className=" text-[24px] font-semibold">Currencies Market</div>
          <div className=" flex ">
            <img className=" cursor-pointer w-10" src={Filter} alt="filter" />
            <img className=" cursor-pointer w-10 ml-2" src={FilterTwo} alt="filter" />
          </div>
        </div>
        <table className=" w-full  mt-5">
          <thead className=" text-[#B6B6B6]  text-xs   text-left ">
            <tr className=" ">
              <th className=" py-3">Name</th>
              <th className=" py-3">Amount</th>
              <th className=" py-3">Date</th>
              <th className=" hidden md:flex py-3">Status</th>
              <th className=" py-3"></th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data, index) => (
              <tr className=" md:text-[20px] text-xs   " key={index}>
                <td className=" py-3">
                  <div className=" flex items-center">
                    <div className=" bg-[#F3F4F7] hidden sm:flex rounded-md px-2 py-1">
                      <img className=" " width={30} src={data.icon} alt="icon" />
                    </div>
                    <span className=" ml-3">{data.name}</span>
                  </div>
                </td>
                <td className=" py-3">{data.amount}</td>
                <td className=" py-3">{data.date}</td>
                <td
                  className={`${
                    data.status.toLowerCase() === "paid"
                      ? "bg-[#CCFFCD] text-green-700"
                      : data.status.toLowerCase() === "overdue"
                      ? "bg-[#FFEBDD] text-[#d57f42]"
                      : data.status.toLowerCase() === "pending"
                      ? "bg-[#FEFACD] text-[#8a8229]"
                      : ""
                  } md:inline-block px-3 py-1 hidden rounded-full text-xs `}
                >
                  {data.status}
                </td>
                <td className=" py-3">
                  <img className=" w-6 cursor-pointer" src={Dots} alt="dots" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
