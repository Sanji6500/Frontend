import React from "react";
import Sidebar from "./Elements/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashborad from "./Pages/Dash/Dashborad";

import TopNavbar from "./Elements/TopNavbar";
import Products from "./Pages/Products/Products";
import Advertising from "./Pages/Advertising/Advertising";
import AdverstisingBrowser from "./Pages/Advertising/AdverstisingBrowser";
import Settings from "./Pages/Settings/Settings";

function App() {
  return (
    <div className=" bg-[#F7F8FC] overflow-x-hidden  ">
      <Router>
        <Sidebar />
        <div className="   ml-[0px]  ease-in-out duration-300 xl:ml-[300px] ">
          <TopNavbar />
          <div className=" lg:max-w-[1400px] mx-auto max-w-[500px]  overflow-x-hidden  md:max-w-[900px]   p-2  ">
            <Routes>
              <Route path="/" element={<Dashborad />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Adervertising" element={<Advertising />} />
              <Route
                path="/AdervertisingBrowser"
                element={<AdverstisingBrowser />}
              />

              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
