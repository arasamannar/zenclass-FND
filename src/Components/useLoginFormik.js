import { useFormik } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Tooshort!")
    .max(20, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  batch: Yup.string().required("Batch is required"),
  phone: Yup.string().required("Phone is required"),
  qualification: Yup.string().required("Qualification is required"),
  yopass: Yup.string().required("year of passing is required"),
  yoexperience: Yup.string().required("year of experience is required"),
  github: Yup.string(),
  portfolio: Yup.string(),
  resume: Yup.string(),
  
});

export const useLoginFormik = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      batch: "",
      phone: "",
      qualification: "",
      yopass: "",
      yoexperience: "",
      github:"",
      portfolio:"",
      resume:"",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Data has been submitted successfully");
    },
  });
  return formik;
};
