import { useFormik } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Tooshort!")
    .max(20, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(4, "Password length must be greater than 4")
    .required("Password is required"),
    batch: Yup.string().required("Batch is required"),
    phone: Yup.string().required("Phone is required"),
    qualification: Yup.string().required("Qualification is required"),
    yopass: Yup.string().required("year of passing is required"),
    yoexperience:Yup.string().required("year of experience is required")
});

export const useLoginFormik = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      name:"",
      batch:"",
      phone:"",
      qualification:"",
      yopass:"",
      yoexperience:"",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 400);
    },
  });
  return formik;
};
