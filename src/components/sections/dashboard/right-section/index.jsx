import React from "react";
import PaymentCard from "./cards/PaymentCard";
import QuickTransfer from "./transfer";
import BarChart from "./bar-chart/BarChart";

function RightSection() {
  return (
    <div className=" md:ml-5">
      <PaymentCard />
      <QuickTransfer />
      <BarChart />
    </div>
  );
}

export default RightSection;
