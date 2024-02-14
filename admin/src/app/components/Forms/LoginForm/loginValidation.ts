import * as Yup from "yup";

const UserLoginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required."),
    password: Yup.string().trim().required("Please enter password."),
  });
  export default UserLoginValidationSchema