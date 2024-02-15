import React, { useState, useEffect } from "react";
import "./profile.css";
import ProfileImage from "./ProfileImage";
import { useLoginFormik } from "../useLoginFormik";

function Profile() {
  const formik = useLoginFormik();
  const [initialValues, setInitialValues] = useState([]);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const initialValues = formik.values;
    setInitialValues(initialValues);
  }, [formik.values]);

  return (
    <div className="profileheading">
      <h3>My Profile</h3>
      <form onSubmit={formik.handleSubmit}>
        <section className="cardSection">
          <ProfileImage></ProfileImage>
        </section>

        <section className="cardSection">
          <div className="namegrid">
            <label htmlFor="name" className="label-style">
              Name
            </label>
            <div>
              <input
                type="text"
                id="username"
                className="formInputs"
                placeholder="Enter your name here..."
                onChange={(e) => {
                  formik.handleChange(e);
                  setHasChanges(true);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="errormessage">{formik.errors.username}</div>
              ) : null}
            </div>

            <label htmlFor="phone" className="label-style">
              Phone
            </label>
            <div>
              <input
                type="text"
                id="phone"
                className="formInputs"
                placeholder="Enter your Phone number..."
                onChange={(e) => {
                  formik.handleChange(e);
                  setHasChanges(true);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="errormessage">{formik.errors.phone}</div>
              ) : null}
            </div>

            <label htmlFor="batch" className="label-style">
              Batch
            </label>

            <div>
              <input
                type="number"
                id="batch"
                className="formInputs"
                placeholder="Enter the batch number..."
                onChange={(e) => {
                  formik.handleChange(e);
                  setHasChanges(true);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.batch}
              />
              {formik.touched.batch && formik.errors.batch ? (
                <div className="errormessage">{formik.errors.batch}</div>
              ) : null}
            </div>

            <label htmlFor="email" className="label-style">
              Email
            </label>
            <div>
              <input
                type="text"
                id="email"
                className="formInputs"
                placeholder="Enter your email..."
                onChange={(e) => {
                  formik.handleChange(e);
                  setHasChanges(true);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="errormessage">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="cardSection">
          <div className="workgrid">
            <label htmlFor="qualification" className="label-style">
              Qualification
            </label>
            <div>
              <input
                type="text"
                id="qualification"
                className="formInputs"
                placeholder="Example: BE Electrical and Electronics Engineering"
                onChange={(e) => {
                  formik.handleChange(e);
                  setHasChanges(true);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.qualification}
              />
              {formik.touched.qualification && formik.errors.qualification ? (
                <div className="errormessage">
                  {formik.errors.qualification}
                </div>
              ) : null}
            </div>

            <label htmlFor="yopass" className="label-style">
              Year of Passing
            </label>
            <div>
              <input
                type="text"
                id="yopass"
                placeholder="Example: 2024"
                className="formInputs"
                onChange={(e) => {
                  formik.handleChange(e);
                  setHasChanges(true);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.yopass}
              />
              {formik.touched.yopass && formik.errors.yopass ? (
                <div className="errormessage">{formik.errors.yopass}</div>
              ) : null}
            </div>

            <label htmlFor="yoexperience" className="label-style">
              Years of Experience
            </label>
            <div>
              <input
                type="text"
                id="yoexperience"
                className="formInputs"
                placeholder="Example: 6"
                onChange={(e) => {
                  formik.handleChange(e);
                  setHasChanges(true);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.yoexperience}
              />
              {formik.touched.yoexperience && formik.errors.yoexperience ? (
                <div className="errormessage">{formik.errors.yoexperience}</div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="cardSection">
          <div className="namegrid">
            <label htmlFor="github" className="label-style">
              Github URL
            </label>
            <div>
              <input type="text" id="github" className="formInputs" />
            </div>
            <label htmlFor="portfolio" className="label-style">
              Portfolio URL
            </label>
            <div>
              <input type="text" id="portfolio" className="formInputs" />
            </div>
            <label htmlFor="resume" className="label-style">
              Resume URL
            </label>
            <div>
              <input type="text" id="resume" className="formInputs" />
            </div>
          </div>
        </section>
        <div className="saveBtnCard">
          <div className="saveBtnGrid">
            <button
              className="saveBtn btn btn-primary"
              disabled={
                !hasChanges || formik.errors.length > 0 || formik.isSubmitting
              }
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
