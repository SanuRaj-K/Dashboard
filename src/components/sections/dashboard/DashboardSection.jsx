import React from "react";
import TopNav from "../../nav/TopNav";
import LeftSection from "./left-section";
import RightSection from "./right-section";

function DashboardSection() {
  return (
    <div className=" w-full  ">
      <div className=" ">
        <TopNav />
      </div>
      <div className=" w-full flex flex-col md:flex-row md:justify-between mt-10">
        <div className=" w-full my-auto md:w-3/4">
          <LeftSection />
        </div>
        <div className=" ">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
