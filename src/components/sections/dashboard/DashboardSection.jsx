import React from "react";
import TopNav from "../../nav/TopNav";
import LeftSection from "./left-section";

function DashboardSection() {
  return (
    <div className="  ">
      <TopNav />
      <div>
        <LeftSection />
      </div>
    </div>
  );
}

export default DashboardSection;
