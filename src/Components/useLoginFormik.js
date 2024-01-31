import { useFormik } from "formik";
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(4, 'Password length must be greater than 4').required('Password is required'),
});

export const useLoginFormik = () => {
    const formik = useFormik({
    initialValues: {
        email: "",
        password: ""
    },
    validationSchema: loginSchema,
    onSubmit: values => {
        console.log(values);
    },
});
return formik;
} 
