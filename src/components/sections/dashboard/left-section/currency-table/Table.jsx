import React from "react";
import { tableData } from "../../../../../data/TableData";
import { Dots, Filter, FilterTwo } from "../../../../../data/iconsData";

function Table() {
  return (
    <div className=" bg-white rounded-3xl">
      <div className="   px-6  py-3 items-center ">
        <div className="flex justify-between">
          <div className=" text-[24px] font-semibold">Currencies Market</div>
          <div className=" flex ">
            <img src={Filter} alt="filter" />
            <img src={FilterTwo} alt="filter" />
          </div>
        </div>
        <table className=" w-full  mt-5">
          <thead className=" text-[#B6B6B6]   text-left ">
            <tr className=" ">
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data, index) => (
              <tr className=" text-[20px]   " key={index}>
                <td>
                  <div className=" flex items-center">
                    <div className=" bg-[#F3F4F7] rounded-md px-2 py-1">
                      <img className="" width={30} src={data.icon} alt="icon" />
                    </div>
                    <span className=" ml-3">{data.name}</span>
                  </div>
                </td>
                <td>{data.amount}</td>
                <td>{data.date}</td>
                <td
                  className={`${
                    data.status.toLowerCase() === "paid"
                      ? "bg-[#CCFFCD] text-green-700"
                      : data.status.toLowerCase() === "overdue"
                      ? "bg-[#FFEBDD] text-[#d57f42]"
                      : data.status.toLowerCase() === "pending"
                      ? "bg-[#FEFACD] text-[#8a8229]"
                      : ""
                  } inline-block px-3 py-1 rounded-full text-xs`}
                >
                  {data.status}
                </td>
                <td>
                  <img src={Dots} alt="dots" />
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
