import React from "react";
import EmptyUser from "../Images/emptyUser.svg";
import { useLocation } from "react-router-dom";

const RenderTopNavbarname = [
  { PathName: "/", titleName: "Dashbord" },
  { PathName: "/Products", titleName: "Products" },
  { PathName: "/Adervertising", titleName: "Adervertising" },
  { PathName: "/AdervertisingBrowser", titleName: "Adervertising Browser" },
  { PathName: "/Settings", titleName: "Settings" },
];

function TopNavbar() {
  const location = useLocation();

  return (
    <div>
      <div className="  h-24 bg-white border-b-1 flex justify-between   ">
        {RenderTopNavbarname.some(
          (result) => result.PathName === location.pathname
        ) ? (
          <p className=" p-7 text-[30px] font-bold font-Muslich">
            {
              RenderTopNavbarname[
                RenderTopNavbarname.findIndex(
                  (result) => result.PathName === location.pathname
                )
              ].titleName
            }
          </p>
        ) : null}

        <a
          className=" p-7 flex space-x-3 items-center MediumPoppins font-light text-[20px] "
          href="/"
        >
          <p>Markt Name</p>
          <img
            src={EmptyUser}
            height="50"
            width="50"
            alt=""
            className="rounded-full font-poppins"
          />
        </a>
      </div>
    </div>
  );
}
export default TopNavbar;
