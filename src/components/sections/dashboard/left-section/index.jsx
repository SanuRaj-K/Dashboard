import React from "react";
import BalanceCard from "./cards/BalanceCard";

import CurrencyMarket from "./progress-bar/CurrencyMarket";
import IncomeProgCard from "./progress-bar/IncomeProgCard";
import SplineAreaChart from "./cards/IncomeChartTop";
import { IncomeCard, IncomeChart } from "../../../../data/iconsData";
import Table from "./currency-table/Table";

function LeftSection() {
  return (
    <div>
      <div className=" flex w-full">
        <div className=" w-1/2">
          <BalanceCard />
        </div>
        <div className=" w-1/2">
          <SplineAreaChart />
        </div>
      </div>
      <div className=" flex justify-between my-8 ">
        <div className=" w-1/3">
          <IncomeProgCard
            icon={IncomeChart}
            value="$1,400"
            percent="75"
            text="Income"
            color="#00FF6B"
          />{" "}
        </div>
        <div className=" w-1/3 mx-3">
          <IncomeProgCard
            icon={IncomeCard}
            value="$2,080"
            color="#FF6756"
            percent="50"
            text="Income"
          />
        </div>
        <div className=" w-1/3">
          <CurrencyMarket />
        </div>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}

export default LeftSection;
