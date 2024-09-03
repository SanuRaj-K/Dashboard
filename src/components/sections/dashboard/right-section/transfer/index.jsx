import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlagThree, NormalPlus, SendIcon } from "../../../../../data/iconsData";

function QuickTransfer() {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        const data = res.data.data;
        setAccounts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(accounts);

  return (
    <div className=" bg-white mt-8 rounded-3xl ">
      <div className=" px-3 py-2 ">
        <div className=" flex justify-between mb-3">
          <h3 className=" font-semibold text-[24px]">Quick Transfer</h3>
          <a className=" text-blue-500" href="*">
            View all
          </a>
        </div>
        <ul className=" grid grid-cols-5 items-center gap-2 ">
          {accounts?.slice(0, 4).map((item, index) => (
            <li
              key={index}
              className= " cursor-pointer bg-[#e3ae8880] rounded-t-full rounded-b-full"
            >
              <div className="">
                <div className=" flex flex-col items-center  my-3  mx-1">
                  <img
                    width={54}
                    className=" rounded-full"
                    src={item.avatar}
                    alt=""
                  />
                  <span className=" text-[12px]">{item.first_name}</span>
                </div>
              </div>
            </li>
          ))}
          <div className="  rounded-t-full rounded-b-full   h-full flex items-center  border-2 border-dashed   ">
            <img
              className=" cursor-pointer  "
              width={54}
              src={NormalPlus}
              alt=""
            />
          </div>
        </ul>
        <div className=" bg-[#F3F4F7]    my-4 rounded-l-full rounded-r-full">
          <div className=" px-2 py-3 flex justify-between w-full">
            <div className="flex items-center ">
              <img className=" h-[30px] w-[30px]" src={FlagThree} alt="flag" />
              <span className=" text-[24px] font-semibold ml-3">$2,760</span>
            </div>
            <div className="  flex items-center bg-white rounded-full ">
              <img className=" h-[30px] w-[30px]" src={SendIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickTransfer;
