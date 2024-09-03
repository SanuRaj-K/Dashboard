import React from "react";
import PaymentCard from "./cards/PaymentCard";
import QuickTransfer from "./transfer";

function RightSection() {
  return (
    <div className=" ml-5">
      <PaymentCard />
      <QuickTransfer/>
    </div>
  );
}

export default RightSection;
