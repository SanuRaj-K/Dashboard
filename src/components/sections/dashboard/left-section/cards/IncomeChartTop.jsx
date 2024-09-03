import React from "react";
import Chart from "react-apexcharts";
import { DownIcon } from "../../../../../data/iconsData";

const SplineAreaChart = () => {
  const options = {
    chart: {
      id: "spline-area-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },

    colors: ["#00E396", "#008FFB"],
  };

  const series = [
    {
      data: [30, 40, 35, 50],
    },
    {
      data: [20, 30, 25, 40],
    },
  ];

  return (
    <div className=" w-full bg-white h-[250px] rounded-3xl ">
      <div>
        <div className=" flex justify-between  px-3 py-2 ">
          <h2 className=" text-[24px] font-semibold">Income</h2>
          <div className="  cursor-pointer ">
            <div className=" flex bg-[#CCFFCD] rounded-3xl px-2 py-1 text-xs font-semibold items-center">
              <select
                name="Month"
                className="bg-[#CCFFCD] appearance-none outline-none"
                id=""
              >
                <option value="">Month</option>
                <option value="Jan">Januvary</option>
                <option value="Feb">Feb</option>
              </select>
              <img src={DownIcon} alt="arrow" />
            </div>
          </div>
        </div>
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default SplineAreaChart;
