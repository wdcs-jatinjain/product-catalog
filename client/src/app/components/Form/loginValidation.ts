import * as Yup from "yup";

const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required."),
    password: Yup.string()
      .trim()
      .required("Please enter password.")
      .matches(/^\S*$/, "Whitespace is not allowed.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
      ),
  });
  export default LoginValidationSchema