import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import "./task.css";

function Tasks() {
  return (
    <div>
      <div className="page-container">
        <Topbar />
        <div className="content-container">
          <Sidebar />{" "}
          <div className="taskcontainer">
            <div className="taskonecont">
              <div style={{ padding: "0px 20px" }}>
                <div className="finalcontainer">
                  <div className="flexcontainer">
                    <div>
                      <div className="title weight-500">Arasamannar A K</div>
                      <div className="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                        <div className="mx-1">(B52 WD Tamil)</div>
                        <div className="mx-1"></div>
                        <div className="">
                          -JavaScript - Day -1: Introduction to Browser &amp;
                          web
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mx-1 secondaryGreyTextColor">
                        submitted on 08/09/2023
                      </div>
                      <div className="ml-3 mr-1 d-flex align-self-end justify-content-end">
                        <div className="marktag mx-1 px-3 rounded">8</div>
                        <div className="tasktag px-2 rounded">Task</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
