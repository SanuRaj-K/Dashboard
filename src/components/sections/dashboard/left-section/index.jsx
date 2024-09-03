import React from "react";
import BalanceCard from "./cards/BalanceCard";

import CurrencyMarket from "./progress-bar/CurrencyMarket";
import IncomeProgCard from "./progress-bar/IncomeProgCard";
import SplineAreaChart from "./cards/IncomeChartTop";
import { IncomeCard, IncomeChart } from "../../../../data/iconsData";
import Table from "./currency-table/Table";

function LeftSection() {
  return (
    <div className=" w-full  ">
      <div className=" flex flex-col md:flex-row w-full">
        <div className=" w-full  md:w-1/2">
          <BalanceCard />
        </div>
        <div className=" w-full my-4 md:my-0 md:w-1/2">
          <SplineAreaChart />
        </div>
      </div>
      <div className=" flex justify-between flex-col md:flex-row  my-8 ">
        <div className=" w-full md:w-1/3">
          <IncomeProgCard
            icon={IncomeChart}
            value="$1,400"
            percent="75"
            text="Income"
            color="#00FF6B"
          />{" "}
        </div>
        <div className=" w-full md:w-1/3 md:mx-3 my-4 md:my-0">
          <IncomeProgCard
            icon={IncomeCard}
            value="$2,080"
            color="#FF6756"
            percent="50"
            text="Income"
          />
        </div>
        <div className=" w-full  md:w-1/3">
          <CurrencyMarket />
        </div>
      </div>
      <div className="">
        <Table />
      </div>
    </div>
  );
}

export default LeftSection;
