import React from "react";
import { useLoginFormik } from "./useLoginFormik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function Register() {
  let navigate = useNavigate();
  const formik = useLoginFormik();
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="user-container">
            <label htmlFor="username">Username</label>
            <div className="input-icon">
              <input
                type="text"
                id="username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              {formik.touched.username && formik.errors.username ? (
                <div className="errormessage">{formik.errors.username}</div>
              ) : null}{" "}
            </div>
          </div>

          <div className="email-container">
            <label htmlFor="email">Email</label>
            <div className="input-icon">
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="errormessage">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="pass-container">
            <label htmlFor="password">Password</label>
            <div className="input-icon">
              <FontAwesomeIcon icon={faLock} />
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="errormessage">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="google-signin">
            <Link to="/Register.jsx">
              <FontAwesomeIcon icon={faGoogle} className="gicon" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faFacebook} className="ficon" />
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="submit"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
            <button
              onClick={() => navigate('/login')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
