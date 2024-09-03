import React from "react";
import BalanceCard from "./cards/BalanceCard";
import IncomeChart from "./cards/IncomeChart";
import IncomeGreen from "./progress-bar/IncomeGreen";
import IncomeRed from "./progress-bar/IncomeRed";
import CurrencyMarket from "./progress-bar/CurrencyMarket";

function LeftSection() {
  return (
    <div>
      <div className=" flex w-full">
        <div className=" w-1/2">
          <BalanceCard />
        </div>
        <div className=" w-1/2">
          <IncomeChart />
        </div>
      </div>
      <div className=" flex w-full">
        <div className=" w-1/3">
          <IncomeGreen />
        </div>
        <div className=" w-1/3">
          <IncomeRed />
        </div>
        <div>
          <CurrencyMarket />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
