import * as Yup from "yup";
const AddUserValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required."),
  role: Yup.string().required("Role is Required"),
  name: Yup.string().required("User name is required"),
});
export default AddUserValidationSchema;
