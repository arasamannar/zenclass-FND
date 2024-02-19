import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import userImage from "../Images/user.png";
import { Link } from 'react-router-dom';
import './topbar.css'

function Topbar() {
  return (
    <div>
      <nav className="header__cont flex-y">
        <h1 className="heading">className</h1>
        <div className="lastContents" style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
          <h5 className="mt-3 mr-3">Arasamannar A K</h5>
          <Dropdown>
            <Dropdown.Toggle style={{backgroundColor: "white"}} id="dropdown-basic" >
              <img src={userImage} alt="User" width="46" className="profileIcon"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><Link to={'/profile'}>Profile</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/logout'}>Logout</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
