import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(4, "Password length must be greater than 4")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Data has been submitted successfully");
    },
  });
  return (
    <>
    <div className="login-container">
<Header />
    <main>
    <div className="form-container">
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="top-heading">
            <h4>Welcome Back!</h4>
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
            <Link to="/forgotpass" className="fpass">Forget password</Link> 
            <Link to='/register'>Register user</Link>
          </div>
          <div className="google-signin">
            <Link to='#'>
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
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </main>
     
      <Footer />
    </div>
    
    </>
  );
}

export default Login;
