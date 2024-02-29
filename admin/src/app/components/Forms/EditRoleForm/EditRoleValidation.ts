import * as Yup from "yup";
const EditRoleValidationSchema = Yup.object().shape({
  _id: Yup.string().required(),
  name: Yup.string()
    .min(4, "Name should be at least 4 characters long.")
    .matches(/^[a-zA-Z\s]*$/, "Numbers are not allowed in the name.")
    .required("Name is required."),
  
});
export default EditRoleValidationSchema;
