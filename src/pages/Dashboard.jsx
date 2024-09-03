import React from "react";
import SideMenu from "../components/nav/SideMenu";
import DashboardSection from "../components/sections/dashboard/DashboardSection";

function Dashboard() {
  return (
    <div>
      <main className=" bg-black h-screen w-full font-customFont ">
        <div className=" flex p-4   bg-[#F3F4F7]  rounded-[50px]">
          {/* <div className=" w-[80px]">
            <SideMenu />
          </div> */}
          <div className=" w-full   flex-grow px-2">
            <DashboardSection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
