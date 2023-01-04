import React from "react";
import Logo from "../Images/logo.svg";
import { Link } from "react-router-dom";
import { ItemsNavbar, NestItemNavbar } from "./ItemsNavbar";
import { RiDashboardFill, RiProductHuntFill } from "react-icons/ri";
import { FaAdversal } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";

function Sidebar() {
  const NestNavber = [
    {
      to: "/Adervertising",
      image: <RiProductHuntFill style={{ color: "#F8EDE8" }} size={20} />,
      Value: "Add Adervertising",
    },
    {
      to: "/AdervertisingBrowser",
      image: <RiProductHuntFill style={{ color: "#F8EDE8" }} size={20} />,
      Value: "Adervertising Browser",
    },
    {
      to: "/",
      image: <RiProductHuntFill style={{ color: "#F8EDE8" }} size={20} />,
      Value: "test",
    },
  ];
  return (
    <div className="  w-[300px]  flex-col justify-start   fixed h-full bg-[#007FC3]  translate-x-[-300px] ease-in-out duration-300  xl:translate-x-[0px]">
      <Link className=" flex justify-center  items-center space-x-3 p-6" to="/">
        <img src={Logo} height="64" width="64" alt="" />
        <p className=" font-bold  text-[#F8EDE8]  text-[35px] items-center">
          Horzion
        </p>
      </Link>
      <ul className=" mt-44 px-2 ease-in-out duration-700  ">
        <ItemsNavbar
          to="/"
          items="Dashborad"
          image={<RiDashboardFill style={{ color: "#F8EDE8" }} size={20} />}
        />
        <ItemsNavbar
          to="/Products"
          items="Products"
          image={<RiProductHuntFill style={{ color: "#F8EDE8" }} size={20} />}
        />

        <NestItemNavbar
          FatherImgae={<FaAdversal style={{ color: "#F8EDE8" }} size={20} />}
          FatherValue="Advertising"
          NestsItems={NestNavber}
        />

        <ItemsNavbar
          to="/Settings"
          items="Settings"
          image={<AiTwotoneSetting style={{ color: "#F8EDE8" }} size={20} />}
        />
      </ul>
    </div>
  );
}

export default Sidebar;
