import * as Yup from "yup";

const RegistervalidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Name should be at least 4 characters long.")
      .matches(/^[a-zA-Z\s]*$/, "Numbers are not allowed in the name.")
      .required("Name is required."),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match.")
      .required("Please confirm your password"),
    phone: Yup.string()
      .matches(
        /^[0-9]+$/,
        "Phone number should only contain numeric characters."
      )
      .length(10, "Phone number should be exactly 10 digits.")
      .required("Phone number is required."),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/, "Zip code should only contain numeric characters")
      .length(6, "Zip code should be exactly 6 digits.")
      .required("Zip code is required."),
  });

  export default RegistervalidationSchema