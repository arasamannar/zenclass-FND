import React, { useState } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBarsProgress,
  faDashboard,
  faGraduationCap,
  faQuestion,
  faLadderWater,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`sidebar ${isHovered ? "expanded" : "collapsed"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => {
          navigate("/class");
        }}
      >
        <div className="siconcontainer">
          <FontAwesomeIcon icon={faHome} className="sideicon" />
          <div className="sideiconheading">{isHovered ? "Class" : null}</div>
        </div>
      </button>
      <button
        onClick={() => {
          navigate("/tasks");
        }}
      >
        <div className="siconcontainer">
          <FontAwesomeIcon icon={faBarsProgress} className="sideicon"/>
          <div className="sideiconheading">{isHovered ? "Tasks" : null}</div>
        </div>
      </button>
      <button
        onClick={() => {
          navigate("/webcode");
        }}
      >
        <div className="siconcontainer">
          <FontAwesomeIcon icon={faBarsProgress} className="sideicon"/>
          <div className="sideiconheading">{isHovered ? "Webcode" : null}</div>
        </div>
      </button>
      <button
        onClick={() => {
          navigate("/finalproject");
        }}
      >
        <div className="siconcontainer">
          <FontAwesomeIcon icon={faBarsProgress} className="sideicon"/>{" "}
          <div className="sideiconheading">
            {isHovered ? "Final Project" : null}
          </div>
        </div>
      </button>
      <button
        onClick={() => {
          navigate("/syllabus");
        }}
      >
        <div className="siconcontainer">
          <FontAwesomeIcon icon={faBarsProgress} className="sideicon"/>{" "}
          <div className="sideiconheading">{isHovered ? "Syllabus" : null}</div>
        </div>
      </button>
      <button
        onClick={() => {
          navigate("/leaderboard");
        }}
      >
        <div className="siconcontainer">
          <FontAwesomeIcon icon={faLadderWater} className="sideicon"/>{" "}
          <div className="sideiconheading">
            {isHovered ? "Leaderboard" : null}
          </div>
        </div>
      </button>
      <button
        onClick={() => {
          navigate("/userdashboard");
        }}
      >
        <div className="siconcontainer">
          <FontAwesomeIcon icon={faDashboard} className="sideicon"/>{" "}
          <div className="sideiconheading">
            {isHovered ? "User Dashboard" : null}
          </div>
        </div>
      </button>
      <button
        onClick={() => {
          navigate("/certificate");
        }}
      >
        <div className="siconcontainer">
          <FontAwesomeIcon icon={faGraduationCap} className="sideicon"/>{" "}
          <div className="sideiconheading">
            {isHovered ? "Certificate" : null}
          </div>
        </div>
      </button>
      <button
        onClick={() => {
          navigate("/queries");
        }}
      >
        <div className="siconcontainer">
          <FontAwesomeIcon icon={faQuestion} className="sideicon"/>{" "}
          <div className="sideiconheading">{isHovered ? "Queries" : null}</div>
        </div>
      </button>
    </div>
  );
}

export default Sidebar;