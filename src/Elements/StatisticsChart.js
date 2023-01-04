import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [15, 16, 17, 20, 1, 5, 6],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const StatisticsChart = () => {
  return (
    <div className=" w-full p-3   ">
      <div className=" bg-white   w-full  h-full relative  p-1  ">
        <div className=" flex flex-col mb-4 ">
          <div className=" flex flex-wrap mb-1">
            <p className=" font-InterSemiBold text-[19px] font-bold">
              Average number of visits
            </p>
          </div>

          <div className=" flex flex-wrap w-[calc(80%)]  justify-between">
            <p className="font-InterSemiBold    text-gray-700/50 text-[12px] ">
              as of 30 May 2022
            </p>
            <div className=" flex flex-wrap  justify-between items-center  min-w-[55px] ">
              <div className=" bg-[#007FC3]/60 h-[7px]  rounded-xl  grid place-items-center font-InterSemiBold text-[13px]  min-w-[20px]  "></div>
              <p className=" text-[12px]   font-InterSemiBold text-gray-700/50">
                today
              </p>
            </div>
          </div>
        </div>
        <div className=" h-[300px] md:h-[400px] lg:h-[500px] xl:h-[300px]">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
