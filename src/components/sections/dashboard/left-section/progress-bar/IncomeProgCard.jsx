import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function IncomeProgCard({ icon, value, color, percent, text }) {
  const percentage = percent;
  return (
    <div className=" bg-white  rounded-3xl   ">
      <div className=" flex px-6  py-3 justify-between">
        <div className=" ">
          <img src={icon} width={50} alt="img" />
          <h2 className=" text-[16px] md:text-[24px] font-semibold">{text}</h2>
        </div>
        <div className=" w-[80px] md:w-[100px]">
          <CircularProgressbar
            strokeWidth={18}
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "12px",
              pathTransitionDuration: 0.5,
              pathColor: `${color}`,
              textColor: "#B6B6B6",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
      <h2 className=" text-[24px] md:text-[32px] px-6  font-semibold">{value}</h2>
    </div>
  );
}

export default IncomeProgCard;
