import * as Yup from "yup";

const AdminLoginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required."),
    password: Yup.string().trim().required("Please enter password."),
  });
  export default AdminLoginValidationSchema