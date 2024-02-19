import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import './classcomponents.css'

function Webcode() {
  return (
    <div>
      <div className="page-container">
        <Topbar />
        <div className="content-container">
          <Sidebar />{" "}
          <div className="webcodeContainer">No Data Available!</div>
        </div>
      </div>
    </div>
  );
}

export default Webcode;
