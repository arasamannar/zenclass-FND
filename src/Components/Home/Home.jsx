import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import "./home.css";

function Home() {
  return (
    <div className="page-container">
      <Topbar />
      <div className="content-container">
        <Sidebar />
        <main>
          <div className="row-container">
            <div className="class-content">
              <section>
                <div className="reccontainer">
                  <div className="videohead">
                    Please select any of the roadmap sessions!
                  </div>
                  <div>
                    <button style={{ border: "1px solid blue" }}>
                      Recording
                    </button>
                  </div>
                </div>
              </section>

              <section>
                <div className="sessioncontainer">
                  <h4>Session Title</h4>
                  <div>Class schedule is not updated</div>
                  <hr></hr>
                  <h4>Contents:</h4>
                  <span>No content available</span>
                  <br style={{borderTop: "20px"}} />
                  <h4>Pre-read:</h4>
                  <span>No preread available</span>
                </div>
              </section>
            </div>

            <div className="sideContainer"></div>

            <div className="roadmap-container justify-self-center">
              <div className="roadmap-area">
                <div className="progress-head">
                  <span className="progress-header">Sessions Roadmap</span>
                </div>
                <div>
                  <div className="sessionsContainer">
                    <div className="roadmap_icon_container RICompleted">
                      <h6>1</h6>
                      <div
                        className="step_path_right"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>2</h6>
                      <div
                        className="step_path_right"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>3</h6>
                      <div
                        className="step_path_right"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>4</h6>
                      <div
                        className="step_path_right"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>5</h6>
                      <div
                        className="step_path_bottom"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>10</h6>
                      <div
                        className="step_path_bottom"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>9</h6>
                      <div
                        className="step_path_left"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>8</h6>
                      <div
                        className="step_path_left"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>7</h6>
                      <div
                        className="step_path_left"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>6</h6>
                      <div
                        className="step_path_left"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>11</h6>
                      <div
                        className="step_path_right"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>12</h6>
                      <div
                        className="step_path_right"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>13</h6>
                      <div
                        className="step_path_right"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>14</h6>
                      <div
                        className="step_path_right"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>15</h6>
                      <div
                        className="step_path_bottom"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>20</h6>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>19</h6>
                      <div
                        className="step_path_left"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>18</h6>
                      <div
                        className="step_path_left"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                    <div className="roadmap_icon_container RICompleted">
                      <h6>17</h6>
                      <div
                        className="step_path_left"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>

                    <div className="roadmap_icon_container RICompleted">
                      <h6>16</h6>
                      <div
                        className="step_path_left"
                        style={{ pointerEvents: "none" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
