import React from "react";
import TopNav from "../../nav/TopNav";
import LeftSection from "./left-section";
import RightSection from "./right-section";

function DashboardSection() {
  return (
    <div className="  ">
      <TopNav />
      <div className=" w-full flex justify-between mt-10">
        <div className=" w-3/4">
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
