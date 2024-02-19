import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Register";
import Home from "./Components/Home/Home";
import Forgotpass from "./Components/Forgotpass";
import Profile from "./Components/Profile/Profile";
import PrivateRoutes from "./Components/Extra/PrivateRoutes";
import Tasks from "./Components/classComponents/Tasks";
import Webcode from "./Components/classComponents/Webcode";
import Othererror from "./Components/Othererror";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/class" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/webcode" element={<Webcode />} />
        </Route>
        <Route path="*" element={<Othererror />} />
      </Routes>
    </Router>
  );
}

export default App;
