import * as Yup from "yup";
const EditUserValidationSchema = Yup.object().shape({
  _id: Yup.string().required(),
  email: Yup.string().email("Invalid email").required("Email is required."),
  role: Yup.string().required("Role is Required"),
  name: Yup.string()
    .min(4, "Name should be at least 4 characters long.")
    .matches(/^[a-zA-Z\s]*$/, "Numbers are not allowed in the name.")
    .required("Name is required."),
  city: Yup.string().min(4, "City should be at least 4 characters long.").required("City name is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number should only contain numeric characters.")
    .length(10, "Phone number should be exactly 10 digits.")
    .required("Phone number is required."),
  country: Yup.string().required("User Country name is required"),
  streetAddress: Yup.string().required("User streetAddress is required"),
  postalCode: Yup.string()
    .matches(/^[0-9]+$/, "postalCode should only contain numeric characters")
    .length(6, "postalCode should be exactly 6 digits.")
    .required("postalCode is required."),
  password: Yup.string()
    .trim()
    .required("Please enter password.")
    .matches(/^\S*$/, "Whitespace is not allowed.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
    ),
});
export default EditUserValidationSchema;
