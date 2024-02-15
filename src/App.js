import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Register";
import { currentYear } from "./Components/Extra/Datefinder";
import Home from "./Components/Home/Home";
import Forgotpass from "./Components/Forgotpass";
import Profile from "./Components/Profile/Profile";
import PrivateRoutes from "./Components/Extra/PrivateRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="heading">
            <h4> <Link to={"/login"}>Welcome to Zen class dashboard</Link></h4>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpass" element= {<Forgotpass />} />
            <Route element={<PrivateRoutes />} >
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element= {<Profile />} />
            </Route>
          </Routes>
        </main>
        <footer className="footer">
          <div className="container-foo">
            <p>&copy; Arasamannar | {currentYear} </p>
            <ul className="social-foo">
              <li>
                <a href="https://www.facebook.com/" target="_blank">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank">X (Twitter)</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
