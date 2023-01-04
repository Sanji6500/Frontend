import React from "react";
import StatisticsCard from "../../Elements/StatisticsCard";
import StatisticsChart from "../../Elements/StatisticsChart";

import BigStatisticCard from "../../Elements/BigStatisticCard";
import StatisticsCardV2 from "../../Elements/StatisticsCardV2";
import vistbar from "../../Images/Vistbar.svg";
import monthlybar from "../../Images/VistbartMonthly.svg";
import Rabatt from "../../Images/Rabatt.svg";
import Await from "../../Images/AwaitProduct.svg";

const Dashborad = () => {
  return (
    <React.Fragment>
      <div className=" flex flex-wrap   ">
        <div className=" flex flex-wrap  w-full  xl:w-1/2   ">
          <StatisticsCardV2
            Description="Estimated daily visit for Ads"
            img={vistbar}
            value="250"
            previousDescription="Yesterday visit   "
            previousValue="15"
            CheckPercentage={true}
            ValuePercentage="+15,5%"
          />
          <StatisticsCardV2
            Description="Estimated Monthly visit for Ads"
            img={monthlybar}
            value="25624"
            previousDescription="last month vist"
            previousValue="50020"
            CheckPercentage={false}
            ValuePercentage="-50,45%"
          />
          <StatisticsCard
            Description="most awaited product for 
                     the discount"
            img={Rabatt}
            value="Papsi 1l "
            previousDescription="second product"
            previousValue="Cola 1l "
          />
          <StatisticsCard
            Description="Most Searched Products"
            img={Await}
            value="chocolate "
            previousDescription="second product"
            previousValue="Orange juice "
          />
        </div>

        <div className="    w-full xl:w-1/2  ">
          <StatisticsChart />
        </div>
      </div>

      <div className=" w-full flex flex-wrap  xl:justify-center">
        <div className="   w-full   xl:w-[calc(47%)]   ">
          <BigStatisticCard />
        </div>
        <div className="  w-full   xl:w-[calc(47%)]     ">
          <BigStatisticCard />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Dashborad;
