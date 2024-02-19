import React from "react";
import img from "../Images/Designer.png";
import '../App.css'

function Othererror() {
  return (
    <div className="messagecont">
      <div>
      404 Missing webpage error please enter correct url !!
      </div>
      <img
    class="fit-picture"
    src={img}
    alt="page not found" />
      
    </div>
  );
}

export default Othererror;
