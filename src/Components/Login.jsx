import React from "react";
import { useLoginFormik } from "./useLoginFormik";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login() {
  const formik = useLoginFormik();

  return (
    <>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="top-heading">
            <h3>Welcome Back!</h3>
          </div>
          <div className="row">
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

          <div className="row">
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
          <div className="forgetpassword">
            <a href="#" className="fpass">Forget password</a> 
            <a href="#">Register user</a>
          </div>
          <div className="google-signin">
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} className="gicon" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className="ficon" />
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="submit"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
